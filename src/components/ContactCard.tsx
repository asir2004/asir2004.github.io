import { ClassNameValue } from 'tailwind-merge';
import ContactCardConnectButton, { ContactCardConnectButtonShowTitleStatus } from '../components/ContactCardConnectButton';

type ContactCardProps = {
    subtitle: string;
    title: string;
    moreInfo?: string;
    link: string;
    icon: ContactIcon;
    color: string;
    className?: ClassNameValue;
}

type ContactIcon = "wechat" | "mail" | "telegram" | "bilibili" | "twitter" | "github"

export default function ContactCard({ subtitle, title, moreInfo, icon, color, link, className }: ContactCardProps) {
    return (
        <div className={className as string}>
            <div className="bg-gray-100/50 p-2 min-w-xs max-w-xl rounded-4xl backdrop-blur-md shadow-xl/5">
                <div className="flex flex-col gap-4 items-start self-center p-4 border border-gray-200 border-dashed rounded-3xl">
                    <div className="flex flex-row w-full justify-between align-top">
                        <img src={"/icons/" + icon + ".jpg"} alt="icon" className="w-16 h-16 rounded-xl bg-gray-400" />
                        <ContactCardConnectButton title="Connect" color={color} link={link} showTitle={ContactCardConnectButtonShowTitleStatus.SHOW} />
                    </div>
                    <div className="flex flex-col items-start ">
                        <div className="text-gray-500">
                            <span>{subtitle}</span>
                            {moreInfo !== undefined && (
                                <>
                                    <span> · </span>
                                    <span>{moreInfo}</span>
                                </>
                            )}
                        </div>
                        <div className="text-xl">{title}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}