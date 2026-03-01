"use client";
import { stocks } from "@/lib/data/stocks";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowUpRight, BarChart3 } from "lucide-react";

function MiniChart({ data, positive }: { data: number[]; positive: boolean }) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const width = 120;
    const height = 40;
    const points = data
        .map((v, i) => `${(i / (data.length - 1)) * width},${height - ((v - min) / range) * height}`)
        .join(" ");

    return (
        <svg width={width} height={height} className="opacity-80">
            <polyline
                fill="none"
                stroke={positive ? "var(--success)" : "var(--danger)"}
                strokeWidth="2"
                points={points}
            />
        </svg>
    );
}

export default function MarketsPage() {
    const stocksList = stocks.filter((s) => s.asset_type === "Stock");
    const indices = stocks.filter((s) => s.asset_type === "Index");

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    <span className="bg-gradient-to-r from-[var(--success)] to-[var(--secondary)] bg-clip-text text-transparent">AI Markets</span>
                </h1>
                <p className="text-[var(--muted-foreground)] text-lg">Track AI stocks and indices in real time.</p>
            </motion.div>

            {/* Indices */}
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-[var(--primary)]" /> Indices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {indices.map((s, i) => (
                    <motion.div
                        key={s.ticker}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Link href={`/markets/${encodeURIComponent(s.ticker)}`} className="glass-card p-6 flex items-center justify-between group hover:border-[var(--primary)] transition-all block">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-bold text-lg group-hover:text-[var(--primary)] transition-colors">{s.ticker}</h3>
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--primary)]" />
                                </div>
                                <p className="text-sm text-[var(--muted-foreground)]">{s.company_name}</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className="text-xl font-bold">{s.price.toLocaleString()}</span>
                                    <span className={`flex items-center gap-1 text-sm font-medium ${s.change >= 0 ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>
                                        {s.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                        {s.change >= 0 ? "+" : ""}{s.change_percent.toFixed(2)}%
                                    </span>
                                </div>
                            </div>
                            <MiniChart data={s.history} positive={s.change >= 0} />
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Stocks */}
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-[var(--success)]" /> AI Stocks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {stocksList.map((s, i) => (
                    <motion.div
                        key={s.ticker}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                    >
                        <Link href={`/markets/${encodeURIComponent(s.ticker)}`} className="glass-card p-5 group hover:border-[var(--primary)] transition-all block">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <h3 className="font-bold group-hover:text-[var(--primary)] transition-colors">{s.ticker}</h3>
                                    <p className="text-xs text-[var(--muted-foreground)]">{s.company_name}</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-md bg-[var(--surface)] text-[var(--muted-foreground)]">{s.exchange}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-lg font-bold">${s.price.toLocaleString()}</span>
                                    <div className={`text-sm font-medium ${s.change >= 0 ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>
                                        {s.change >= 0 ? "+" : ""}{s.change.toFixed(2)} ({s.change >= 0 ? "+" : ""}{s.change_percent.toFixed(2)}%)
                                    </div>
                                </div>
                                <MiniChart data={s.history} positive={s.change >= 0} />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
