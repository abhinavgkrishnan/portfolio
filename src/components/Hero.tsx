import { resumeData } from '@/data/resume';
import ArrowUpRight from '@/components/ArrowUpRight';

export default function Hero() {
    const { personal } = resumeData;
    return (
        <section className="hero" id="hero">
            <div className="grid-bg"></div>
            <div className="wrap hero-inner">
                <div className="hero-text">
                    <span className="kicker reveal">
                        <span className="dot"></span>{personal.name} · {personal.location}
                    </span>
                    <h1 className="reveal d1">
                        {personal.headlineLead} <span className="hl">{personal.headlineHighlight}</span> {personal.headlineTrail}
                    </h1>
                    <p className="lead reveal d2">{personal.lead}</p>
                    <p className="sub mono reveal d2">{personal.sub}</p>
                    <div className="hero-actions reveal d3">
                        <a href="#work" className="btn primary">See selected work <span className="arr">→</span></a>
                        <a href="/resume.pdf" target="_blank" rel="noopener" className="btn">Résumé <ArrowUpRight /></a>
                    </div>
                </div>
                <div className="portrait-wrap reveal d2">
                    <div className="portrait-card">
                        <div className="portrait-img"><img src="/profile.png" alt={personal.name} /></div>
                        <div className="portrait-meta">
                            <span className="co"><span className="pulse"></span><b>AI Tech Cloud Network</b></span>
                            <span className="now">Open to work</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
