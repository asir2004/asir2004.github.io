type LinkProps = {
    href: string,
    isRTL?: boolean,
    background?: boolean,
    children: any,
}

export default function Link({ href, isRTL, background, children }: LinkProps) {
    return (
        <a href={href} className={`flex ${isRTL ? "flex-row-reverse gap-2" : "flex-row"} text-blue-500 group items-center ${background ? "px-6 py-4 bg-white rounded-2xl" : ""}`}>
            <svg viewBox="-12 -10 24 20" className="h-4 mr-0 stroke-2 stroke-blue-300 fill-none aspect-[17/14] -translate-x-2.5 group-hover:mr-2 group-hover:translate-x-0 transition-all">
                <path d="M10 0 L2 -8 L10 0 L2 8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M-10 0 L10 0" strokeLinecap="round" strokeLinejoin="round" className="translate-x-3 scale-x-0 group-hover:scale-x-100 group-hover:translate-x-0 transition-all" />
            </svg>
            <a className="group-hover:underline text-nowrap">{children}</a>
        </a>
    )
}