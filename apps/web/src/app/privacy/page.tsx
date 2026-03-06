"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
                        <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                            <Shield className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Privacy Policy</h1>
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
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to KordexLabs. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our web application and use our comprehensive AI ecosystem dashboard, including our tool directories, news aggregators, and market trackers.
                        </p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <p>
                            We collect personal information that you voluntarily provide to us when you register on the platform, express an interest in obtaining information about us or our products, or otherwise contact us.
                        </p>
                        <ul>
                            <li><strong>Account Information:</strong> When you create an account to save preferences or upvote AI tools, we collect your name, email address, and authentication credentials.</li>
                            <li><strong>Usage Data:</strong> We automatically collect certain information when you visit, use, or navigate the platform. This includes device and usage information, such as your IP address, browser and device characteristics, operating system, and information about how and when you use our web application.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Information</h2>
                        <p>
                            We use personal information collected via our platform for a variety of business purposes described below:
                        </p>
                        <ul>
                            <li>To facilitate account creation and logon processes.</li>
                            <li>To provide and manage services, such as delivering real-time market data and personalized AI tool comparisons.</li>
                            <li>To improve our platform's user experience through analytics and feedback.</li>
                            <li>To protect our services and ensure the security of our application.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Cookies and Tracking Technologies</h2>
                        <p>
                            We may use cookies and similar tracking technologies to access or store information. This helps us maintain your session state, remember your theme preferences (dark/light mode), and analyze site traffic to optimize performance.
                        </p>
                    </section>

                    <section>
                        <h2>5. Data Sharing and Security</h2>
                        <p>
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We implement appropriate technical and organizational security measures to protect the security of any personal information we process. However, please note that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2>6. Your Privacy Rights</h2>
                        <p>
                            Depending on your geographic location, including applicable data protection laws in India and other jurisdictions, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request a review, update, or deletion of your personal information, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2>7. Contact Us</h2>
                        <p>
                            If you have questions or comments about this notice, you may email us at <Link href="mailto:privacy@kordexlabs.com" className="text-[var(--primary)] hover:underline">privacy@kordexlabs.com</Link> or reach out via our GitHub repository.
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
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[var(--surface)] border border-[var(--card-border)] font-bold text-sm hover:border-[var(--primary)] transition-all group"
                    >
                        Return to Dashboard <Shield className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
