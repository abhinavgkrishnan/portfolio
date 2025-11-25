import { resumeData } from '@/data/resume';

export default function Projects() {
    return (
        <section id="projects" className="w-full min-h-screen py-20 bg-secondary relative overflow-hidden flex items-center">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-center mb-16">
                    <h2 className="text-4xl md:text-8xl font-display font-black uppercase text-white text-stroke-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] md:drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                        Projects
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="group relative bg-white border-[3px] border-black h-full flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                            <div className="bg-black h-56 border-b-[3px] border-black flex items-center justify-center overflow-hidden group-hover:bg-secondary transition-colors duration-300 relative">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                                    />
                                ) : (
                                    <span className="font-display font-black text-4xl text-white/20 group-hover:text-white/40 transition-colors">
                                        PROJECT {index + 1}
                                    </span>
                                )}
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-3xl font-display font-bold mb-3">{project.name}</h3>
                                <p className="font-mono text-sm font-bold mb-6 bg-primary inline-block px-3 py-1 border-2 border-black w-fit">
                                    {project.role}
                                </p>
                                <p className="font-mono mb-8 flex-1 text-lg leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center bg-black text-white font-bold font-mono py-3 border-2 border-black hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(123,97,255,1)] hover:shadow-none"
                                    >
                                        VIEW PROJECT
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
