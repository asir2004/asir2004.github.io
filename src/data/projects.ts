import clients from "./clients";
import Project from "./interface/Project";

const projects: Project[] = [
    {
        title: "Delve Launch Video",
        description: "Finished in a week, worked like hackathon",
        year: 2025,
        month: "January",
        previewLink: "https://www.linkedin.com/posts/karun-kaushik_today-were-thrilled-to-announce-our-33m-activity-7290036228878430209-HqqC?utm_source=share&utm_medium=member_desktop",
        coverImage: "Delve Launch.png",
        client: clients["Delve"],
    },
    {
        title: "Some shots in iPhone 16 Review",
        description: "第二次参与何同学的 iPhone 首发评测视频。组件化的柱状图，来看看设计思路。",
        year: 2024,
        month: "September",
        previewLink: "https://www.bilibili.com/video/BV1zWtjezEAL/?share_source=copy_web&t=1297",
        coverImage: "HTX iPhone 16 - Charts.png",
        document: "How_to_make_bar_chart_component_in_AE_StudentHes_iPhone_16_Review_Some_Cut_Note",
        client: clients["HTX"],
    },
    {
        title: "Mercor",
        description: "",
        year: 2024,
        month: "March",
        previewLink: "https://www.bilibili.com/video/BV1zWtjezEAL/?share_source=copy_web&t=1297",
        coverImage: "mercor.png",
        client: clients["Mercor"],
    },
    {
        title: "TapTap Rebranding Film",
        description: "TapTap 品牌更新，探索了 AE 中三维的实现方法。",
        year: 2023,
        month: "December",
        previewLink: "https://taptap.cn",
        coverImage: "TapTap Rebranding.png",
        client: clients["Joyteeth"],
    },
    {
        title: "bilibili 夏日报告 2023",
        description: "第一次参与能被亿计人看到的项目。",
        year: 2023,
        month: "August",
        previewLink: "https://www.bilibili.com/video/BV1nj41117FS/",
        coverImage: "bilibili 2023 summer.jpg",
        client: clients["Joyteeth"],
    },
    {
        title: "Introducing Xmind.Works Collaboration",
        description: "",
        year: 2023,
        month: "July",
        previewLink: "https://www.youtube.com/watch?v=ZWgh5z0RbSA",
        coverImage: "Xmind Works.png",
        client: clients["Xmind"],
    },
    {
        title: "Xmind Widget on iOS",
        description: "",
        year: 2023,
        month: "July",
        previewLink: "https://www.youtube.com/watch?v=QrTDM-SIX0I",
        coverImage: "Xmind iOS Widget.png",
        client: clients["Xmind"],
    },
]

export default projects;