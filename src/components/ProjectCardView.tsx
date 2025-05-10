import Project from "@/data/interface/Project";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock, InlineCode, H1, H2, Image } from './markdown/index'
import ProjectCardImageVideoView from "./ProjectCardImageVideoView";

interface ProjectCardViewProps {
    project: Project;
    yearIsShown?: boolean;
    isExpanded: boolean;
    onExpand: () => void;
    onClose: () => void;
}

interface MarkdownFiles {
    [key: string]: string;
}

const markdownFiles = import.meta.glob("/public/content/*.md", {
    query: "?url&raw",
    import: "default",
    eager: true,
}) as MarkdownFiles;

export default function ProjectCardView({ project, yearIsShown, isExpanded, onExpand, onClose }: ProjectCardViewProps) {
    const cardStyles = {
        base: "flex flex-col items-start text-start bg-gray-100",
        closed: "max-w-xs h-64 rounded-xl overflow-clip border",
        expanded: "w-[calc(100%-2rem)] max-w-2xl max-h-[calc(100%-8rem)] overflow-scroll fixed top-1/2 left-1/2 -translate-x-1/2 shadow-lg rounded-3xl",
    };

    const [zIndex, setZIndex] = useState(0);
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        if (isExpanded) {
            const fileName = project.document;
            const filePath = `/public/content/${fileName}.md`;
            const content = markdownFiles[filePath];
            if (content) {
                setMarkdownContent(content);
            }
        }
    }, [isExpanded, project.document]);

    React.useEffect(() => {
        if (isExpanded) {
            setZIndex(100);
        } else {
            const timeout = setTimeout(() => {
                setZIndex(0);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [isExpanded]);

    return (
        <motion.div>
            <AnimatePresence mode="popLayout">
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`${cardStyles.base} ${cardStyles.closed} w-xs`}
                    />
                )}
            </AnimatePresence>

            <motion.div
                layout
                transition={{ duration: 0.5, type: "spring" }}
                className={`${cardStyles.base} ${isExpanded ? cardStyles.expanded : cardStyles.closed}`}
                onClick={!isExpanded ? onExpand : undefined}
                style={{
                    zIndex: zIndex,
                    scrollbarWidth: "none",
                    overscrollBehavior: "none",
                    WebkitOverflowScrolling: "touch",
                    ...(isExpanded && {
                        top: 'calc(6rem)',
                    }),
                }}
            >
                {/*Close Button*/}
                <AnimatePresence mode="popLayout">
                    {isExpanded && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bg-gray-200 p-2 rounded-full m-2 self-end z-5"
                        >
                            <button onClick={onClose}>Close</button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/*Project details when closed*/}
                <AnimatePresence mode="popLayout">
                    {!isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex flex-col w-full h-30 items-start ${isExpanded ? "pt-20 px-8 pb-8" : "p-4"}`}
                        >
                            <div className="flex flex-row w-full justify-between">
                                <p className={`font-bold ${project.description === "" ? "line-clamp-2" : "line-clamp-1"}`}>{project.title}</p>
                            </div>
                            <div className="flex flex-row w-full justify-between">
                                <p>{project.client?.name}</p>
                                <div className="flex flex-row text-neutral-500">
                                    <p>{project.month}</p>
                                    {yearIsShown && (
                                        <>
                                            <p>, </p>
                                            <p>{project.year}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                            <p className="line-clamp-1 text-neutral-500">{project.description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/*Project details when expanded*/}
                <AnimatePresence mode="popLayout">
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col w-full items-start p-8 pt-16 gap-1"
                        >
                            <p className="font-bold">{project.title}</p>
                            <div className="flex flex-row w-full justify-between">
                                <div className="flex flex-row">
                                    <p>{project.month}</p>
                                    <p>,&nbsp;</p>
                                    <p>{project.year}</p>
                                </div>
                            </div>
                            <p>{project.client?.name}</p>
                            <p>{project.description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/*Cover Image*/}
                <ProjectCardImageVideoView project={project} isExpanded={isExpanded} />

                {isExpanded && markdownContent !== "" && (
                    <div className="flex flex-col w-full p-8 gap-4">
                        <Markdown
                            components={{
                                h1: H1,
                                h2: H2,
                                code: InlineCode,
                                pre: CodeBlock,
                                ol: ({ ...props }) => <ol className="list-decimal pl-[1rem]" {...props} />,
                                ul: ({ ...props }) => <ul className="list-disc pl-[1rem]" {...props} />,
                                img: Image,
                            }}
                            remarkPlugins={[remarkGfm]}
                        >
                            {markdownContent}
                        </Markdown>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}