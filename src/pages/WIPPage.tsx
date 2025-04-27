import WIPRiveAnimation from "../components/WIPRiveAnimation"
import BlueprintBorder from "../components/BlueprintBorder"

type WIPPageProps = {
    lackedPageName?: string;
}

export default function WIPPage({ lackedPageName }: WIPPageProps) {
    return (
        <div className="w-full h-full items-center justify-center overflow-hidden">
            <div className="flex flex-row w-xl bg-blue-100 items-stretch border-collapse">
                <div className="bg-blue-200 border-2 border-blue-500 border-dashed">
                    <div className="w-50 h-50 scale-130">
                        <WIPRiveAnimation />
                    </div>
                </div>

                <div className="flex flex-col flex-grow gap-4 w-full items-start justify-around border-t-2 border-r-2 border-b-2 border-blue-500 border-dashed p-10">
                    <div className="flex flex-col gap-1 items-start">
                        <div className="text-xl font-bold">Working in Progress...</div>
                        <div className="text-gray-500">{ lackedPageName }</div>
                    </div>
                    <a href="mailto:markview.business@gmail.com" className="flex flex-row text-blue-500 group items-center">
                        <svg viewBox="-12 -10 24 20" className="h-4 mr-0 stroke-2 stroke-blue-300 fill-none aspect-[17/14] -translate-x-2.5 group-hover:mr-2 group-hover:translate-x-0 transition-all">
                            <path d="M10 0 L2 -8 L10 0 L2 8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M-10 0 L10 0" strokeLinecap="round" strokeLinejoin="round" className="translate-x-3 scale-x-0 group-hover:scale-x-100 group-hover:translate-x-0 transition-all" />
                        </svg>
                        <a className="group-hover:underline">Send an Email?</a>
                    </a>
                </div>

                <BlueprintBorder color="blue-100" expandInifinitely={true}/>
            </div>
        </div>
    )
}