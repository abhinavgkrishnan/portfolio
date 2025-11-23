import { resumeData } from '@/data/resume';

export default function Experience() {
    return (
        <section id="experience" className="w-full py-20 border-b-[3px] border-black bg-primary">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-display font-black uppercase text-white text-stroke-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        Experience
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="bg-white border-[3px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b-2 border-black pb-4">
                                <div>
                                    <h3 className="text-2xl font-display font-bold">{exp.role}</h3>
                                    <p className="font-mono font-bold text-lg">{exp.company}</p>
                                </div>
                                <div className="text-right mt-2 md:mt-0">
                                    <span className="bg-black text-white px-3 py-1 font-mono text-sm font-bold block w-fit md:ml-auto mb-1">
                                        {exp.period}
                                    </span>
                                    <span className="font-mono text-sm">{exp.location}</span>
                                </div>
                            </div>
                            <ul className="list-disc list-inside font-mono space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="leading-relaxed">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
