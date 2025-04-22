import AgencyType from '../enum/AgencyType'

interface Agency {
    id: string;
    name: string;
    type: AgencyType;
}

export default Agency;