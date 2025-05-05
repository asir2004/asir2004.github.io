import Client from "./interface/Client";

const clients: { [key: string]: Client } = {
    Mercor: {
        id: "Mercor",
        name: "Mercor",
        type: "Startup",
    },
    HTX: {
        id: "HTX",
        name: "HTX Studio",
        type: "Video Studio",
    },
    Joyteeth: {
        id: "Joyteeth",
        name: "Joyteeth",
        type: "Individual Designer",
    },
    Xmind: {
        id: "Xmind",
        name: "Xmind",
        type: "Tech Company",
    },
    Tanka: {
        id: "Tanka",
        name: "Tanka",
        type: "Startup",
    }
}

export default clients