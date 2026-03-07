"use client";
import { create } from "zustand";


interface DashboardStore {
  savedBlogs: string[];
  pinnedTools: string[];
  favoriteStocks: string[];
  toggleSavedBlog: (id: string) => void;
  togglePinnedTool: (id: string) => void;
  toggleFavoriteStock: (ticker: string) => Promise<void>;
  fetchFavorites: () => Promise<void>;
}

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000") + "/api";

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  savedBlogs: ["1", "3"],
  pinnedTools: ["1", "4"],
  favoriteStocks: [],
  fetchFavorites: async () => {
    try {
      const authData = localStorage.getItem('auth-storage');
      const token = authData ? JSON.parse(authData)?.state?.token : null;
      console.log("Fetching favorites with token:", token ? "exists" : "missing");

      if (!token) return;

      const res = await fetch(`${API_BASE}/favorites/`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        set({ favoriteStocks: data.map((f: any) => f.ticker) });
      } else {
        console.error("Fetch favorites failed:", res.status, await res.text());
      }
    } catch (err) {
      console.error("Failed to fetch favorites:", err);
    }
  },
  toggleSavedBlog: (id) =>
    set((s) => ({
      savedBlogs: s.savedBlogs.includes(id)
        ? s.savedBlogs.filter((b) => b !== id)
        : [...s.savedBlogs, id],
    })),
  togglePinnedTool: (id) =>
    set((s) => ({
      pinnedTools: s.pinnedTools.includes(id)
        ? s.pinnedTools.filter((t) => t !== id)
        : [...s.pinnedTools, id],
    })),
  toggleFavoriteStock: async (ticker) => {
    const isFav = get().favoriteStocks.includes(ticker);
    const authData = localStorage.getItem('auth-storage');
    const token = authData ? JSON.parse(authData)?.state?.token : null;

    console.log(`Toggling favorite for ${ticker}. Current isFav: ${isFav}. Token: ${token ? "exists" : "missing"}`);

    if (!token) {
      console.warn("No auth token found, cannot toggle favorite.");
      return;
    }

    try {
      if (isFav) {
        const res = await fetch(`${API_BASE}/favorites/${ticker}`, {
          method: "DELETE",
          headers: { "Authorization": `Bearer ${token}` }
        });
        if (res.ok) {
          set((s) => ({ favoriteStocks: s.favoriteStocks.filter((t) => t !== ticker) }));
        } else {
          console.error("Delete favorite failed:", res.status, await res.text());
        }
      } else {
        const res = await fetch(`${API_BASE}/favorites/`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ ticker })
        });
        if (res.ok) {
          set((s) => ({ favoriteStocks: [...s.favoriteStocks, ticker] }));
        } else {
          console.error("Post favorite failed:", res.status, await res.text());
        }
      }
    } catch (err) {
      console.error("Toggle favorite failed:", err);
    }
  },
}));
