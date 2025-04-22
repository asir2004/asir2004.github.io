import ClientType from '../enum/ClientType'

interface Client {
    id: string;
    name: string;
    type: ClientType;
}

export default Client;