import ContactCard from "../components/ContactCard";
import { useState } from "react";
import { motion, AnimatePresence, Transition } from "motion/react";

export default function ContactPage() {
    const [cardsAreExpanded, setCardsAreExpanded] = useState(false);

    const transitionSpring: Transition = { duration: 0.5, type: "spring" }

    return (
        <>
            <motion.div className={`${cardsAreExpanded ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'blur-md opacity-50'}`}>
                <motion.div
                    layout
                    transition={{ ...transitionSpring, duration: 0.8 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: cardsAreExpanded ? 0 : 25 }}
                    className={ cardsAreExpanded ? "" : "absolute" }
                >
                    <ContactCard link={"mailto:markview.business@gmail.com"} subtitle="Email" title="markview.business@gmail.com" icon="mail" color="blue" />
                </motion.div>
                <motion.div
                    layout
                    transition={{ ...transitionSpring, duration: 0.7 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: cardsAreExpanded ? 0 : -10 }}
                    className={ cardsAreExpanded ? "" : "absolute" }
                >
                    <ContactCard link="" subtitle="WeChat" title="@mark_x64" icon="wechat" color="green" />
                </motion.div>
                <motion.div
                    layout
                    transition={{ ...transitionSpring, duration: 0.6 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: cardsAreExpanded ? 0 : 5 }}
                    className={ cardsAreExpanded ? "" : "absolute" }
                >
                    <ContactCard link="https://t.me/marklmao233" subtitle="Telegram" title="@marklmao233" icon="telegram" color="blue" />
                </motion.div>

                <motion.div
                    layout
                    transition={{ ...transitionSpring, duration: 0.6 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: cardsAreExpanded ? 0 : -30 }}
                    className={ cardsAreExpanded ? "" : "absolute" }
                >
                    <ContactCard link="https://x.com/markbuildin" subtitle="Twitter" moreInfo="1221 followers" title="Mark View" icon="twitter" color="blue" />
                </motion.div>

                <motion.div
                    layout
                    transition={{ ...transitionSpring, duration: 0.6 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: cardsAreExpanded ? 0 : 15 }}
                    className={ cardsAreExpanded ? "" : "absolute" }
                >
                    <ContactCard link="https://github.com/asir2004" subtitle="GitHub" title="asir2004" icon="github" color="gray" />
                </motion.div>

                {/* Last one should be NOT absolute */}
                <motion.div
                    layout
                    transition={{ ...transitionSpring, duration: 0.5 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                >
                    <ContactCard link="https://space.bilibili.com/238029680" subtitle="bilibili" moreInfo="9700 followers" title="@Mark_View" icon="bilibili" color="pink" />
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {!cardsAreExpanded && (
                    <motion.button initial={{ scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5, type: "spring" }} onClick={() => setCardsAreExpanded(!cardsAreExpanded)} className="absolute snap-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-4 bg-gradient-to-b from-blue-600/80 to-blue-300/30 rounded-full text-white whitespace-nowrap text-xl font-medium cursor-pointer hover:underline">Contact →</motion.button>
                )}
            </AnimatePresence>
        </>
    )
}