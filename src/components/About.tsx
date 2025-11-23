import { resumeData } from '@/data/resume';

export default function About() {
    return (
        <section id="about" className="w-full py-20 border-b-[3px] border-black bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block bg-secondary text-white font-bold font-mono px-4 py-2 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 rotate-[-1deg]">
                        ABOUT ME
                    </div>

                    <div className="bg-white border-[3px] border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <p className="text-xl md:text-2xl font-mono leading-relaxed mb-8">
                            {resumeData.personal.summary}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4 border-b-2 border-black inline-block">SOFT SKILLS</h3>
                                <ul className="list-disc list-inside font-mono space-y-2">
                                    {resumeData.skills.soft.map((skill) => (
                                        <li key={skill}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4 border-b-2 border-black inline-block">TECHNICAL SKILLS</h3>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.technical.map((skill) => (
                                        <span key={skill} className="bg-primary px-3 py-1 border-2 border-black font-bold text-sm hover:bg-white transition-colors cursor-default">
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
