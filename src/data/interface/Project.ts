import Month from '../enum/Month'
import Client from './Client'
import Agency from './Agency'

interface Project {
    id: string;
    title: string;
    description: string;
    year: number;
    month: Month;
    previewLink: string;
    coverImage: string;
    client?: Client;
    agency?: Agency;
    document?: string;
    vimeoID?: string;
}

export default Project;