import { useState, useEffect } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function Image({ src, alt, title }: any) {
    const [imageIsExpanded, setImageIsExpanded] = useState(false);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") setImageIsExpanded(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <>
            <div
                className={`my-4 rounded-md overflow-clip hover:shadow-xl hover:-translate-y-1 hover:scale-101 transition-all duration-300 ${imageIsExpanded ? "opacity-30" : ""
                    }`}
                onClick={() => setImageIsExpanded(!imageIsExpanded)}
            >
                <img src={src} alt={alt} title={title} />
            </div>
            {createPortal(
                <AnimatePresence>
                    {imageIsExpanded && (
                        <motion.div
                            transition={{ duration: 0.2, easeInOut }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-xl"
                            onClick={() => setImageIsExpanded(false)}
                        >
                            <p className="fixed -translate-y-[45vh] text-white px-4 py-2 rounded-full bg-slate-800/50 opacity-80 z-1">Click anywhere to exit.</p>
                            <motion.img
                                src={src}
                                alt={alt}
                                title={title}
                                transition={{ duration: 0.2, ease: [0, 0, 0, 1] }}
                                initial={{ scale: 0.7 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.7 }}
                                className="fixed max-w-[90vw] max-h-[90vh] object-contain rounded-md"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    )
}