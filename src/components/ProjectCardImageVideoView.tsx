import Project from '../data/interface/Project'
import { motion } from 'framer-motion'
import Vimeo from '@u-wave/react-vimeo'

interface ProjectCardImageVideoViewProps {
    project: Project,
    isExpanded: boolean,
}

export default function ProjectCardImageVideoView({ project, isExpanded }: ProjectCardImageVideoViewProps) {
    return (
        <motion.div className="relative">
            <motion.img
                layout
                transition={{ duration: 0.5, type: "spring" }}
                src={"/src/resources/" + project.coverImage}
                alt={project.title}
                className={`w-full transition-all ${isExpanded ? 'blur-lg opacity-50' : ''}`}
            />
            {isExpanded && (
                <motion.div key="vimeo-overlay" className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/50">
                    <Vimeo key={isExpanded ? 'expanded' : 'collapsed'} video="1053344944" muted autoplay width={672} />
                </motion.div>
            )}
        </motion.div>
    )
}