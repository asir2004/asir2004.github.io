import WIPRiveAnimation from "../components/WIPRiveAnimation";
import BlueprintBorder from "../components/BlueprintBorder";
import ContactCard from "../components/ContactCard";

export default function ContactPage() {
    return (
        <>
        {/* <div className="w-full h-full items-center justify-center">
            <div className="flex flex-row w-xl bg-blue-100 items-stretch border-collapse">
                <div className="bg-blue-200 border-2 border-blue-500 border-dashed">
                    <div className="w-50 h-50 scale-130">
                        <WIPRiveAnimation />
                    </div>
                </div>

                <div className="flex flex-col flex-grow gap-4 w-full items-start justify-around border-t-2 border-r-2 border-b-2 border-blue-500 border-dashed p-10 relative">
                    <div className="flex flex-col gap-1 items-start">
                        <div className="text-xl font-bold">Working in Progress</div>
                        <div className="">Contact Page</div>
                    </div>
                    <a href="mailto:markview.business@gmail.com" className="text-blue-500 hover:underline">Send an Email</a>
                    <BlueprintBorder color="blue-100" expandInifinitely={false}/>
                </div>

                <BlueprintBorder color="blue-100" expandInifinitely={true}/>
            </div>
        </div> */}
        <div className="relative">
            <ContactCard className="absolute -rotate-16 -translate-y-10"/>
            <ContactCard className="absolute rotate-10 -translate-y-5"/>
            <ContactCard />
        </div>
        </>
    )
}