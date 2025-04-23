import ProjectsPageSingleYearView from '../components/ProjectsPageSingleYearView';
import projects from '../data/projects';
import { groupProjectsByYear } from '../function/groupProjectsByYear';
import { yearlyDescriptions } from '../data/yearlyDescriptions';
import { useState } from 'react';

export default function ProjectsPage() {
    const groupedProjectsByYear = groupProjectsByYear(projects);
    const [expandedCard, setExpandedCard] = useState<{ year: number; index: number } | null>(null);

    return (
        <div className="flex flex-col gap-8 max-w-5xl pt-16">
            {groupedProjectsByYear.years.map((year) => (
                <ProjectsPageSingleYearView
                    key={year}
                    year={year}
                    description={yearlyDescriptions[year] ?? "Null"}
                    projects={groupedProjectsByYear.groups[year]}
                    expandedCard={expandedCard}
                    setExpandedCard={setExpandedCard}
                />
            ))}

            <div onClick={ () => setExpandedCard(null) } className={`z-1 fixed bg-black w-screen h-screen left-0 top-0 transition-opacity ${expandedCard === null ? "opacity-0 pointer-events-none" : "opacity-50 pointer-events-auto"}`} />
        </div>
    )
}