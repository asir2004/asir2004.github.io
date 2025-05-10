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

export default function ContactCardConnectButton({ title, link, color, showTitle }: ContactCardConnectButtonProps) {
    const parentDivClassNames = {
        "const": `flex flex-row gap-1 h-min bg-gradient-to-t from-${color}-200 to-${color}-500 rounded-full text-white font-medium`,
        "showTitle": "px-2 py-1",
        "hideTitle": "p-1"
    }

    return (
        <a href={link} className={`${parentDivClassNames["const"]} ${parentDivClassNames[showTitle]}`}>
            { showTitle === "showTitle" && (
                title
            )}

            <div className={`${showTitle === "showTitle" ? "opacity-80" : "opacity-100"}`}>→</div>
        </a>
    )
}