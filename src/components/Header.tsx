import ArrowUpRight from "@/components/ArrowUpRight";

export default function Header() {
    return (
        <header className="nav" id="topnav">
            <div className="nav-inner">
                <a href="#top" className="logo" aria-label="Home">GK</a>
                <nav className="nav-links">
                    <a href="#work">Work</a>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </nav>
                <a href="/Resume.pdf" target="_blank" rel="noopener" className="nav-cta">Résumé <ArrowUpRight /></a>
            </div>
        </header>
    );
}
