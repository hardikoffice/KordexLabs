"use client";

import { motion } from "framer-motion";
import { Newspaper, Cpu, LineChart, ArrowRight, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const features = [
        {
            title: "Curated Insights",
            description: "Cut through the hype with deep-dive articles, tutorials, and the latest news on major LLM releases and AI agents.",
            icon: Newspaper,
            color: "var(--primary)"
        },
        {
            title: "Interactive Tool Directory",
            description: "Evaluate, filter, and compare the perfect AI tools for your workflow—from code assistants to image generators—with our dynamic matrix.",
            icon: Cpu,
            color: "var(--accent)"
        },
        {
            title: "Live Market Data",
            description: "Track the financial pulse of the AI boom. Get real-time visibility into the tech giants driving the industry and monitor global indices like the Nifty without ever leaving your workflow.",
            icon: LineChart,
            color: "#10b981" // Success green
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[var(--primary)]/10 to-transparent blur-3xl pointer-events-none" />

                <div className="container mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] bg-300% animate-gradient">
                            Demystifying the AI Ecosystem
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto font-medium leading-relaxed"
                    >
                        Navigate the AI revolution with clarity. Curated news, deep-dive tool comparisons, and real-time market tracking—all in one immersive dashboard.
                    </motion.p>
                </div>
            </section>

            {/* The Mission Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeIn}>
                            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">The Signal in the Noise</h2>
                            <p className="text-lg text-[var(--muted-foreground)] leading-loose">
                                The artificial intelligence landscape is evolving at breakneck speed. Between daily model releases, shifting market dynamics, and a constant flood of new developer tools, staying informed can feel overwhelming. KordexLabs was built to solve this fragmentation. We serve as your centralized intelligence hub, designed to help developers, investors, and tech enthusiasts make informed decisions with confidence.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden glass-card group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-[var(--accent)]/10 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />

                            {/* Abstract Geometric Graphic Placeholder */}
                            <div className="w-full h-full flex items-center justify-center p-12">
                                <div className="relative w-full h-full">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--primary)]/30"
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-8 rounded-full border-2 border-dashed border-[var(--accent)]/20"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 rounded-3xl bg-[var(--primary)] shadow-[0_0_50px_rgba(var(--primary-rgb),0.5)] flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-700">
                                            <Cpu className="w-16 h-16 text-white -rotate-45 group-hover:-rotate-90 transition-transform duration-700" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Platform Section */}
            <section className="py-24 px-4 bg-[var(--surface)]/30">
                <div className="container mx-auto">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Everything You Need to Scale</h2>
                        <p className="text-[var(--muted-foreground)]">Powerful features built for the modern AI pioneer.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                {...fadeIn}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--primary)]/5 transition-all duration-300 cursor-default"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-1 ring-inset ring-white/10"
                                    style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                                >
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-[var(--primary)] transition-colors">{feature.title}</h3>
                                <p className="text-[var(--muted-foreground)] leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Story Section */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-3xl">
                    <motion.article {...fadeIn} className="text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">Built for the Future</h2>
                        <div className="space-y-6 text-lg text-[var(--muted-foreground)] leading-loose font-medium">
                            <p>
                                KordexLabs started as a hands-on pursuit to build a high-performance, production-ready web application that solves a genuine problem. Founded and developed by Aniket, the platform is continuously evolving.
                            </p>
                            <p>
                                It is driven by a commitment to clean architecture, seamless user experience, and providing actionable, high-value data to our community.
                            </p>
                        </div>
                    </motion.article>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/5 to-transparent pointer-events-none" />
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        {...fadeIn}
                        className="glass-card p-12 md:p-20 border-[var(--primary)]/20 shadow-2xl shadow-[var(--primary)]/10"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Ready to Explore?</h2>
                        <p className="text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl mx-auto font-medium">
                            Whether you are searching for your next AI pair programmer or tracking the latest market trends, we have you covered.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/dashboard"
                                className="glow-btn px-10 py-4 rounded-2xl font-black flex items-center gap-2 uppercase tracking-widest text-sm w-full sm:w-auto justify-center"
                            >
                                <LayoutDashboard className="w-5 h-5" /> Go to Dashboard
                            </Link>
                            <Link
                                href="/tools"
                                className="px-10 py-4 rounded-2xl font-black border border-[var(--card-border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--primary)] transition-all uppercase tracking-widest text-sm w-full sm:w-auto justify-center flex items-center gap-2"
                            >
                                Compare Tools <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
