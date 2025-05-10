type ContactCardConnectButtonProps = {
    title: string;
    link: string;
    color: string;
    showTitle: ContactCardConnectButtonShowTitleStatus;
}

export enum ContactCardConnectButtonShowTitleStatus {
    SHOW = 'showTitle',
    HIDE = 'hideTitle'
}

const colorClassMap: Record<string, string> = {
    blue: 'from-blue-200 to-blue-500',
    red: 'from-red-200 to-red-500',
    green: 'from-green-200 to-green-500',
    pink: 'from-pink-200 to-pink-500',
    gray: 'from-gray-200 to-gray-500',
    orange: 'from-orange-200 to-orange-500',
}

export default function ContactCardConnectButton({ title, link, color, showTitle }: ContactCardConnectButtonProps) {
    const parentDivClassNames = {
        "const": `flex flex-row gap-1 h-min bg-gradient-to-t ${colorClassMap[color] ?? "from-gray-200 to-gray-500"} rounded-full text-white font-medium`,
        "showTitle": "px-2 py-1",
        "hideTitle": "p-1"
    }

    return (
        <a href={link} className={`${parentDivClassNames["const"]} ${parentDivClassNames[showTitle]}`}>
            {showTitle === "showTitle" && (
                title
            )}

            <div className={`${showTitle === "showTitle" ? "opacity-80" : "opacity-100"}`}>→</div>
        </a>
    )
}