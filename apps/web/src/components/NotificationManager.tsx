"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useNotificationStore, NotificationType } from "@/store/notificationStore";
import { CheckCircle, AlertCircle, Info, X, AlertTriangle } from "lucide-react";

const icons: Record<NotificationType, React.ReactNode> = {
    success: <CheckCircle className="w-5 h-5 text-emerald-500" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500" />,
    info: <Info className="w-5 h-5 text-sky-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
};

const bgColors: Record<NotificationType, string> = {
    success: "border-emerald-500/20 bg-emerald-500/5",
    error: "border-rose-500/20 bg-rose-500/5",
    info: "border-sky-500/20 bg-sky-500/5",
    warning: "border-amber-500/20 bg-amber-500/5",
};

export default function NotificationManager() {
    const { notifications, removeNotification } = useNotificationStore();

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
            <AnimatePresence>
                {notifications.map((n) => (
                    <motion.div
                        key={n.id}
                        initial={{ opacity: 0, x: 100, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 100, scale: 0.9, transition: { duration: 0.2 } }}
                        className={`pointer-events-auto flex items-center gap-3 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl min-w-[320px] max-w-md ${bgColors[n.type]}`}
                    >
                        <div className="flex-shrink-0">{icons[n.type]}</div>
                        <p className="text-sm font-medium text-white/90 flex-1">{n.message}</p>
                        <button
                            onClick={() => removeNotification(n.id)}
                            className="p-1 rounded-lg hover:bg-white/10 transition-colors text-white/40 hover:text-white"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
