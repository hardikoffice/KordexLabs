"use client";
import { tools } from "@/lib/data/tools";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, ThumbsUp, ThumbsDown, DollarSign } from "lucide-react";
import { useState } from "react";

export default function ToolsPage() {
    const [search, setSearch] = useState("");
    const categories = Array.from(new Set(tools.map((t) => t.category)));
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filtered = tools.filter((t) => {
        const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
        const matchCat = activeCategory ? t.category === activeCategory : true;
        return matchSearch && matchCat;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">AI Tools</span>
                </h1>
                <p className="text-[var(--muted-foreground)] text-lg">Discover, compare, and choose the best AI tools for your workflow.</p>
            </motion.div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
                    <input
                        type="text"
                        placeholder="Search tools..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--card-border)] focus:outline-none focus:border-[var(--primary)] transition-colors text-sm"
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    <button onClick={() => setActiveCategory(null)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!activeCategory ? "bg-[var(--primary)] text-white" : "bg-[var(--surface)] hover:bg-[var(--surface-hover)]"}`}>All</button>
                    {categories.map((cat) => (
                        <button key={cat} onClick={() => setActiveCategory(cat === activeCategory ? null : cat)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === cat ? "bg-[var(--primary)] text-white" : "bg-[var(--surface)] hover:bg-[var(--surface-hover)]"}`}>{cat}</button>
                    ))}
                </div>
            </div>

            {/* Compare CTA */}
            <div className="glass-card p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <h3 className="font-bold text-lg">Compare AI Tools Side-by-Side</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">Use our interactive comparison matrix to evaluate tools.</p>
                </div>
                <Link href="/tools/compare" className="glow-btn flex items-center gap-2 whitespace-nowrap">
                    Open Matrix <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Tool Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((tool, i) => (
                    <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="glass-card p-5 flex flex-col group hover:border-[var(--primary)] transition-all"
                        style={{ borderColor: "var(--card-border)" }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-[var(--surface)] flex items-center justify-center text-xl flex-shrink-0 font-bold text-[var(--primary)]">
                                {tool.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold group-hover:text-[var(--primary)] transition-colors">{tool.name}</h3>
                                <span className="text-xs text-[var(--muted-foreground)]">{tool.category}</span>
                            </div>
                        </div>
                        <p className="text-sm text-[var(--muted-foreground)] mb-4 line-clamp-2">{tool.description}</p>
                        <div className="mb-3">
                            <div className="flex items-center gap-1 text-xs text-[var(--success)] mb-1"><ThumbsUp className="w-3 h-3" /> Pros</div>
                            <div className="flex flex-wrap gap-1">
                                {tool.pros.slice(0, 2).map((p) => (
                                    <span key={p} className="tag-use-case text-xs">{p}</span>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center gap-1 text-xs text-[var(--danger)] mb-1"><ThumbsDown className="w-3 h-3" /> Cons</div>
                            <div className="flex flex-wrap gap-1">
                                {tool.cons.slice(0, 2).map((c) => (
                                    <span key={c} className="tag-limitation text-xs">{c}</span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-auto flex items-center gap-1 text-sm font-medium text-[var(--primary)]">
                            <DollarSign className="w-4 h-4" /> {tool.pricing_tier}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
