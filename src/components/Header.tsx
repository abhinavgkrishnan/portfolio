import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full border-b-[3px] border-black bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-display uppercase tracking-tighter hover:text-primary transition-colors">
                    Meet-Cute
                </Link>

                <nav className="hidden md:flex items-center gap-8 font-mono font-bold">
                    <Link href="#about" className="hover:underline decoration-4 decoration-primary underline-offset-4">ABOUT</Link>
                    <Link href="#experience" className="hover:underline decoration-4 decoration-secondary underline-offset-4">EXPERIENCE</Link>
                    <Link href="#projects" className="hover:underline decoration-4 decoration-accent underline-offset-4">PROJECTS</Link>
                    <Link href="#contact" className="hover:underline decoration-4 decoration-success underline-offset-4">CONTACT</Link>
                </nav>

                <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-black text-white font-bold font-mono border-2 border-black hover:bg-primary hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                    RESUME
                </a>
            </div>
        </header>
    );
}
