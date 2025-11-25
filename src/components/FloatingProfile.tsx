'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloatingProfile() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Trigger transition when scrolling past the hero section (approx 80vh)
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            setIsScrolled(scrollPosition > windowHeight * 0.8);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isScrolled && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-8 right-8 z-50 hidden md:block"
                >
                    <div className="bg-white border-[3px] border-black p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-64 rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                        <div className="bg-secondary h-48 w-full border-[3px] border-black mb-3 flex items-center justify-center overflow-hidden relative">
                            <img
                                src={`/profile.png?v=${new Date().getTime()}`}
                                alt="Abhinav G Krishnan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between items-center border-b-2 border-black pb-1">
                                <span className="font-mono font-bold text-sm">ROLE</span>
                                <span className="font-bold bg-success px-1 py-0.5 border-2 border-black text-[10px]">OPEN</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-mono font-bold text-sm">EXP</span>
                                <span className="font-display font-black text-lg">2+ YRS</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
