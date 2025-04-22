import Project from "@/data/interface/Project";

interface GroupedProjects {
    groups: Record<number, Project[]>;
    years: number[];  // 添加所有年份的数组
}

export function groupProjectsByYear(projects: Project[]): GroupedProjects {
    const groups = projects.reduce((acc, project) => {
        if (!acc[project.year]) {
            acc[project.year] = [];
        }
        acc[project.year].push(project);
        return acc;
    }, {} as Record<number, Project[]>);

    // 获取所有年份并排序（降序）
    const years = Object.keys(groups)
        .map(year => parseInt(year))
        .sort((a, b) => b - a);

    return {
        groups,  // 分组后的项目
        years    // 年份数组
    };
}