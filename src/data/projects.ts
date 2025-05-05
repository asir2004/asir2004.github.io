import clients from "./clients";
import Project from "./interface/Project";

const projects: Project[] = [
    {
        title: "Some shots in iPhone 16 Review",
        description: "第二次参与何同学的 iPhone 首发评测视频。组件化的柱状图，来看看设计思路。",
        year: 2024,
        month: "September",
        previewLink: "https://taptap.cn",
        coverImage: "placeholder image 16-9.jpg",
        document: "How_to_make_bar_chart_component_in_AE_StudentHes_iPhone_16_Review_Some_Cut_Note",
        client: clients["HTX"],
    },
    {
        title: "TapTap Rebranding Film",
        description: "TapTap 品牌更新，探索了 AE 中三维的实现方法。",
        year: 2023,
        month: "December",
        previewLink: "https://taptap.cn",
        coverImage: "placeholder image 16-9.jpg",
        client: clients["Joyteeth"],
    },
    {
        title: "bilibili 夏日报告 2023",
        description: "第一次参与能被亿计人看到的项目。",
        year: 2023,
        month: "December",
        previewLink: "https://taptap.cn",
        coverImage: "placeholder image 16-9.jpg",
        client: clients["Joyteeth"],
    },
    {
        title: "Introducing Xmind.Works Collaboration",
        description: "Description goes here.",
        year: 2023,
        month: "December",
        previewLink: "https://taptap.cn",
        coverImage: "placeholder image 16-9.jpg",
        client: clients["Xmind"],
    },
]

export default projects;