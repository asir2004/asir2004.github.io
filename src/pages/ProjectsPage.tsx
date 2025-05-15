import ProjectsPageSingleYearView from '../components/ProjectsPageSingleYearView';
import projects from '../data/projects';
import { groupProjectsByYear } from '../function/groupProjectsByYear';
import { yearlyDescriptions } from '../data/yearlyDescriptions';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ProjectsPage() {
    const groupedProjectsByYear = groupProjectsByYear(projects);
    const [expandedCard, setExpandedCard] = useState<{ year: number; index: number } | null>(null);

    const navigate = useNavigate();

    const handleCloseProject = () => {
        navigate('/projects/');
    };

    return (
        <div className="flex flex-col gap-8 max-w-5xl pt-16">
            {groupedProjectsByYear.years.map((year, index) => (
                <motion.div
                    initial={{ translateY: 40, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: index * 0.1, duration: 1 }}
                >
                    <ProjectsPageSingleYearView
                        key={year}
                        year={year}
                        description={yearlyDescriptions[year] ?? "Null"}
                        projects={groupedProjectsByYear.groups[year]}
                        expandedCard={expandedCard}
                        setExpandedCard={setExpandedCard}
                    />
                </motion.div>
            ))}

            <AnimatePresence mode="wait">
                {expandedCard && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => {
                            setExpandedCard(null)
                            handleCloseProject()
                        }}
                        className={`z-1 fixed bg-black w-screen h-screen left-0 top-0 pointer-events-auto}`}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}