import Project from '../data/interface/Project'
import { motion } from 'framer-motion'
import Vimeo from '@u-wave/react-vimeo'
import Link from './Link'

interface ProjectCardImageVideoViewProps {
    project: Project,
    isExpanded: boolean,
}

export default function ProjectCardImageVideoView({ project, isExpanded }: ProjectCardImageVideoViewProps) {
    return (
        <motion.div className={`relative ${isExpanded ? "" : "flex items-center justify-center w-full h-full overflow-hidden"}`}>
            <motion.img
                layout
                transition={{ duration: 0.5, type: "spring" }}
                src={"/covers/" + project.coverImage}
                alt={project.title}
                className={`w-full transition-all ${isExpanded ? 'blur-lg opacity-50' : ''}`}
            />
            {isExpanded && (
                <motion.div key="vimeo-overlay" className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/50">
                    { project.vimeoID !== undefined ? (
                        <Vimeo key={isExpanded ? 'expanded' : 'collapsed'} video={project.vimeoID == undefined ? "1053344944" : project.vimeoID} muted autoplay width={672} />
                    ) : (
                        <Link href={project.previewLink} background >Watch on <div className='max-w-48 overflow-clip text-cyan-500 line-clamp-1 mask-r-from-0'>{project.previewLink}</div></Link>
                    )}
                </motion.div>
            )}
        </motion.div>
    )
}