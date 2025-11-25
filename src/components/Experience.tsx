import { resumeData } from '@/data/resume';

export default function Experience() {
    return (
        <section id="experience" className="w-full min-h-screen py-20 bg-primary relative overflow-hidden flex items-center">
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
                        Experience
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto space-y-12">
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="bg-white border-[3px] border-black p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b-4 border-black pb-4">
                                <div>
                                    <h3 className="text-3xl font-display font-bold mb-1">{exp.role}</h3>
                                    <p className="font-mono font-bold text-xl text-secondary">{exp.company}</p>
                                </div>
                                <div className="text-right mt-4 md:mt-0">
                                    <span className="bg-black text-white px-4 py-2 font-mono text-sm font-bold block w-fit md:ml-auto mb-2 border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors">
                                        {exp.period}
                                    </span>
                                    <span className="font-mono text-sm font-bold">{exp.location}</span>
                                </div>
                            </div>
                            <ul className="list-disc list-inside font-mono space-y-3 text-lg">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="leading-relaxed pl-2">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
