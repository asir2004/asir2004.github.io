import ContactCard from "../components/ContactCard";
import { useState, useMemo } from "react";
import { motion, AnimatePresence, Transition } from "motion/react";
import { contacts } from "../data/contacts";

export default function ContactPage() {
    const RotationAngles = useMemo(() => {
        const min = -30
        const max = 30
        const totalCards = 6
        return Array.from({ length: totalCards }, () => Math.floor(Math.random() * (max - min + 1)) + min)
    }, [])

    const [cardsAreExpanded, setCardsAreExpanded] = useState(false);

    const transitionSpring: Transition = { duration: 0.5, type: "spring" }

    return (
        <>
            <motion.div className={`${cardsAreExpanded ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'blur-md opacity-50'}`}>
                {contacts.map((contact, index) => (
                    <motion.div
                        layout
                        transition={{ ...transitionSpring, duration: 0.8 }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: cardsAreExpanded ? 0 : RotationAngles[index] }}
                        className={!cardsAreExpanded && index !== contacts.length - 1 ? "absolute" : ""}
                    >
                        <ContactCard link={contact.link} subtitle={contact.subtitle} title={contact.title} icon={contact.icon} color={contact.color} moreInfo={contact.moreInfo} />
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {!cardsAreExpanded && (
                    <motion.button initial={{ scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5, type: "spring" }} onClick={() => setCardsAreExpanded(!cardsAreExpanded)} className="absolute snap-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-4 bg-gradient-to-b from-blue-600/80 to-blue-300/30 rounded-full text-white whitespace-nowrap text-xl font-medium cursor-pointer hover:underline">Contact →</motion.button>
                )}
            </AnimatePresence>
        </>
    )
}