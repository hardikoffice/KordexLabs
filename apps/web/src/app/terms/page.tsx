"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-16 px-4">
            <div className="container mx-auto max-w-3xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 border-b border-[var(--card-border)] pb-8"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:translate-x-[-4px] transition-transform mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Terms of Service</h1>
                            <p className="text-[var(--muted-foreground)] font-medium">Last Updated: March 2026</p>
                        </div>
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="prose prose-invert max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[var(--foreground)]
                        prose-p:text-[var(--muted-foreground)] prose-p:leading-loose prose-p:font-medium
                        prose-li:text-[var(--muted-foreground)] prose-strong:text-[var(--primary)] prose-strong:font-black
                        prose-ul:list-disc prose-li:marker:text-[var(--primary)]"
                >
                    <section>
                        <h2>1. Agreement to Terms</h2>
                        <p>
                            Welcome to KordexLabs. These Terms of Service constitute a legally binding agreement made between you and KordexLabs ("we," "us," or "our"), concerning your access to and use of the KordexLabs web application and dashboard. By accessing the platform, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, you are expressly prohibited from using the site.
                        </p>
                    </section>

                    <section>
                        <h2>2. User Accounts</h2>
                        <p>
                            To access certain features of the platform, such as saving preferences or upvoting AI tools, you may be required to register for an account. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine it is inappropriate or objectionable.
                        </p>
                    </section>

                    <section>
                        <h2>3. Platform Usage & Acceptable Use</h2>
                        <p>
                            KordexLabs provides a centralized dashboard for AI ecosystem news, tool comparisons, and market data. You may not access or use the platform for any purpose other than that for which we make it available.
                        </p>
                        <p>As a user of the site, you agree not to:</p>
                        <ul>
                            <li>Systematically retrieve data or other content from the platform to create or compile a collection, compilation, database, or directory without written permission from us.</li>
                            <li>Circumvent, disable, or otherwise interfere with security-related features of the platform.</li>
                            <li>Engage in unauthorized framing of or linking to the platform.</li>
                            <li>Use the platform in a manner inconsistent with any applicable laws or regulations.</li>
                        </ul>
                    </section>

                    <section className="bg-[var(--surface)]/50 p-8 rounded-3xl border border-[var(--primary)]/20 my-12">
                        <div className="flex items-center gap-3 mb-4 text-[var(--primary)]">
                            <AlertTriangle className="w-6 h-6" />
                            <h2 className="text-xl m-0">4. Financial and Information Disclaimer</h2>
                        </div>
                        <p className="m-0 italic">
                            The information provided on KordexLabs, including but not limited to AI industry news, tool pricing, and real-time market data (such as stock prices and global indices like the Nifty), is for informational and educational purposes only. <strong>We are not financial advisors.</strong> The market data displayed on this dashboard does not constitute financial, investment, or trading advice. You are solely responsible for your own investment decisions, and we bear no liability for any losses or damages incurred as a result of relying on the data provided on this platform.
                        </p>
                    </section>

                    <section>
                        <h2>5. Intellectual Property</h2>
                        <p>
                            Unless otherwise indicated, the platform is our proprietary property. All source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the "Content") are owned or controlled by us. Third-party trademarks, logos, and brand names (e.g., OpenAI, Hugging Face, Microsoft) displayed in the AI tools directory or market sections are the property of their respective owners and are used for identification and comparison purposes only.
                        </p>
                    </section>

                    <section>
                        <h2>6. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and defined following the laws of India. KordexLabs and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>

                    <section>
                        <h2>7. Contact Information</h2>
                        <p>
                            In order to resolve a complaint regarding the platform or to receive further information regarding use of the platform, please contact at <Link href="mailto:kordexlabs@gmail.com" className="text-[var(--primary)] hover:underline">kordexlabs@gmail.com</Link>.
                        </p>
                    </section>
                </motion.article>

                {/* Footer Section Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-[var(--card-border)] text-center"
                >
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[var(--primary)] text-white font-black text-sm hover:scale-105 transition-all shadow-lg shadow-[var(--primary)]/20 uppercase tracking-widest"
                    >
                        Go to Dashboard <FileText className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
