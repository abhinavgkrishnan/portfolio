import { resumeData } from '@/data/resume';

export default function Contact() {
    return (
        <section id="contact" className="w-full min-h-screen py-20 bg-primary relative overflow-hidden flex items-center justify-center">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-9xl font-display font-black uppercase text-white mb-12 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] md:drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                    LET'S WORK<br />TOGETHER
                </h2>

                <div className="flex flex-col items-center gap-8">
                    <a
                        href={`mailto:${resumeData.personal.email}`}
                        className="text-lg md:text-5xl font-mono font-bold bg-white border-[4px] border-black px-6 py-4 md:px-10 md:py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 break-all"
                    >
                        {resumeData.personal.email}
                    </a>

                    <div className="flex gap-8 mt-12">
                        <a
                            href={resumeData.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white p-6 rounded-full border-[3px] border-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                        >
                            GITHUB
                        </a>
                        <a
                            href={resumeData.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white p-6 rounded-full border-[3px] border-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                        >
                            LINKEDIN
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
