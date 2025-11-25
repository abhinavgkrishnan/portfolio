import { resumeData } from '@/data/resume';

export default function About() {
    return (
        <section id="about" className="w-full min-h-screen py-20 bg-secondary relative overflow-hidden flex items-center">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="inline-block bg-white text-black font-bold font-mono px-4 py-2 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12 rotate-[-1deg]">
                        ABOUT ME
                    </div>

                    <div className="bg-white border-[3px] border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                        <p className="text-xl md:text-3xl font-mono leading-relaxed mb-12">
                            {resumeData.personal.summary}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-display text-3xl font-bold mb-6 border-b-4 border-black inline-block">SOFT SKILLS</h3>
                                <ul className="list-none font-mono space-y-4">
                                    {resumeData.skills.soft.map((skill) => (
                                        <li key={skill} className="flex items-center gap-3 text-lg">
                                            <span className="w-3 h-3 bg-black"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-display text-3xl font-bold mb-6 border-b-4 border-black inline-block">TECHNICAL SKILLS</h3>
                                <div className="flex flex-wrap gap-3">
                                    {resumeData.skills.technical.map((skill) => (
                                        <span key={skill} className="bg-secondary text-white px-4 py-2 border-2 border-black font-bold text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
