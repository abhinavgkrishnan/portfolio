'use client';

import { resumeData } from '@/data/resume';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className="w-full min-h-screen py-20 bg-primary flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="max-w-6xl w-full relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block bg-white border-[3px] border-black px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]"
                    >
                        <span className="font-mono font-bold text-sm md:text-base">HELLO, I AM</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="text-6xl md:text-9xl font-display font-black leading-[0.9] mb-6 uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]"
                    >
                        ABHINAV<br />
                        <span className="text-white text-stroke-black">KRISHNAN</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-3xl font-mono font-medium mb-8 max-w-lg leading-relaxed bg-white/50 p-2 inline-block border-2 border-black"
                    >
                        {resumeData.personal.role} based in {resumeData.personal.location}.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-4 justify-center md:justify-start"
                    >
                        <a href="#projects" className="px-8 py-4 bg-accent text-black font-black font-display text-xl border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                            VIEW WORK
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white text-black font-black font-display text-xl border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                            CONTACT ME
                        </a>
                    </motion.div>
                </div>

                {/* Visual Element / Profile Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 10 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="flex-1 w-full max-w-md order-1 md:order-2"
                >
                    <div className="bg-white border-[3px] border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2 hover:rotate-0 transition-transform duration-300">
                        <div className="bg-secondary h-64 md:h-96 w-full border-[3px] border-black mb-4 flex items-center justify-center overflow-hidden relative">
                            <img
                                src="/profile.png"
                                alt="Abhinav G Krishnan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center border-b-2 border-black pb-2">
                                <span className="font-mono font-bold text-lg">ROLE</span>
                                <span className="font-bold bg-success px-2 py-0.5 border-2 border-black text-sm">AVAILABLE</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-mono font-bold text-lg">EXP</span>
                                <span className="font-display font-black text-3xl">2+ YEARS</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
