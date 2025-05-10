import ContactIcon from '../enum/ContactIcon';

interface ContactInfo {
    link: string;
    subtitle: string;
    moreInfo?: string;
    title: string;
    icon: ContactIcon;
    color: string;
}

export default ContactInfo