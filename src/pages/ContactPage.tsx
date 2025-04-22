import ContactCard from "../components/ContactCard";

export default function ContactPage() {
    return (
        <>
            <div className="relative">
                <ContactCard className="absolute -rotate-16 -translate-y-10"/>
                <ContactCard className="absolute rotate-10 -translate-y-5"/>
                <ContactCard />
            </div>
        </>
    )
}