import { resumeData } from '@/data/resume';

export default function Projects() {
    return (
        <section id="projects" className="w-full py-20 border-b-[3px] border-black bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12 border-b-[3px] border-black pb-4">
                    <h2 className="text-5xl md:text-6xl font-display font-black uppercase">
                        Projects
                    </h2>
                    <span className="font-mono font-bold text-xl hidden md:block">SELECTED WORKS</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="group relative bg-white border-[3px] border-black h-full flex flex-col">
                            <div className="bg-accent h-48 border-b-[3px] border-black flex items-center justify-center overflow-hidden group-hover:bg-secondary transition-colors duration-300 relative">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="font-display font-black text-4xl text-black/20 group-hover:text-white/20 transition-colors">
                                        PROJECT {index + 1}
                                    </span>
                                )}
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-display font-bold mb-2">{project.name}</h3>
                                <p className="font-mono text-sm font-bold mb-4 bg-primary inline-block px-2 border border-black w-fit">
                                    {project.role}
                                </p>
                                <p className="font-mono mb-6 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center bg-black text-white font-bold font-mono py-2 border-2 border-black hover:bg-white hover:text-black transition-colors"
                                    >
                                        VIEW PROJECT
                                    </a>
                                </div>
                            </div>
                            {/* Shadow element */}
                            <div className="absolute top-2 left-2 w-full h-full border-[3px] border-black -z-10 bg-transparent group-hover:top-3 group-hover:left-3 transition-all"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
