import { resumeData } from '@/data/resume';

export default function Hero() {
    return (
        <section className="w-full min-h-[calc(100vh-64px)] bg-primary flex flex-col items-center justify-center p-4 relative overflow-hidden border-b-[3px] border-black">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="max-w-5xl w-full relative z-10 flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-block bg-white border-[3px] border-black px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
                        <span className="font-mono font-bold text-sm md:text-base">HELLO, I AM</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-6 uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                        ABHINAV<br />
                        <span className="text-white text-stroke-black">KRISHNAN</span>
                    </h1>

                    <p className="text-xl md:text-2xl font-mono font-medium mb-8 max-w-lg leading-relaxed bg-white/50 p-2 inline-block border-2 border-black">
                        {resumeData.personal.role} based in {resumeData.personal.location}.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-8 py-4 bg-accent text-black font-black font-display text-xl border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                            VIEW WORK
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white text-black font-black font-display text-xl border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                            CONTACT ME
                        </a>
                    </div>
                </div>

                {/* Visual Element / Profile Card */}
                <div className="flex-1 w-full max-w-md">
                    <div className="bg-white border-[3px] border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                        <div className="bg-secondary h-64 w-full border-[3px] border-black mb-4 flex items-center justify-center overflow-hidden relative">
                            {/* Placeholder for profile image or abstract art */}
                            <div className="absolute inset-0 flex items-center justify-center text-9xl font-display font-black text-white/20 select-none">
                            </div>
                            <img
                                src={`/profile.png?v=${new Date().getTime()}`}
                                alt="Abhinav G Krishnan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center border-b-2 border-black pb-2">
                                <span className="font-mono font-bold">ROLE</span>
                                <span className="font-bold bg-success px-2 py-0.5 border-2 border-black text-xs">AVAILABLE</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-mono font-bold">EXP</span>
                                <span className="font-display font-black text-2xl">2+ YEARS</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
