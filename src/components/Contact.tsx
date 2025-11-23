import { resumeData } from '@/data/resume';

export default function Contact() {
    return (
        <section id="contact" className="w-full py-20 bg-secondary border-b-[3px] border-black">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-white mb-8">
                    LET'S WORK<br />TOGETHER
                </h2>

                <div className="flex flex-col items-center gap-6">
                    <a
                        href={`mailto:${resumeData.personal.email}`}
                        className="text-2xl md:text-4xl font-mono font-bold bg-white border-[3px] border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                    >
                        {resumeData.personal.email}
                    </a>

                    <div className="flex gap-6 mt-8">
                        <a
                            href={resumeData.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white p-4 rounded-full border-2 border-white hover:bg-white hover:text-black transition-colors"
                        >
                            GITHUB
                        </a>
                        <a
                            href={resumeData.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white p-4 rounded-full border-2 border-white hover:bg-white hover:text-black transition-colors"
                        >
                            LINKEDIN
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
