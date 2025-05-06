import Project from '@/data/interface/Project';
import ProjectCardView from '../components/ProjectCardView';

interface ProjectsPageSingleYearViewProps {
    year: number;
    description: string;
    projects: Project[];
    expandedCard: { year: number; index: number } | null;
    setExpandedCard: (value: { year: number; index: number } | null) => void;
}

export default function ProjectsPage({ year, description, projects, expandedCard, setExpandedCard }: ProjectsPageSingleYearViewProps) {
    const gridStyles = {
        base: 'grid gap-4',
        responsive: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    };

    return (
        <div className="flex flex-col items-start text-start max-w-6xl gap-4 p-4">
            <div className="flex flex-col items-start text-start">
                <h1>{year}</h1>
                <p className='opacity-50'>{description}</p>
            </div>
            <div className={`${gridStyles.base} ${gridStyles.responsive}`}>
                {projects.map((project, index) => (
                    <ProjectCardView
                        key={index}
                        project={project}
                        isExpanded={expandedCard?.year === year && expandedCard?.index === index}
                        onExpand={() => setExpandedCard({ year, index })}
                        onClose={() => setExpandedCard(null)}
                    />
                ))}
            </div>
        </div>
    );
}