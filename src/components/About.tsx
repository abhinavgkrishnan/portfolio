import { resumeData } from '@/data/resume';

export default function About() {
    const { personal, skills } = resumeData;
    return (
        <section className="block" id="about">
            <div className="wrap">
                <div className="block-head" style={{ marginBottom: '46px' }}>
                    <span className="seclabel reveal"><span className="num">02</span> About <span className="bar"></span></span>
                </div>
                <div className="about-grid">
                    <div className="about-card reveal">
                        <p className="big">{personal.aboutBig}</p>
                        <p className="small">{personal.aboutSmall}</p>
                    </div>
                    <div className="about-side">
                        <div className="panel reveal d1">
                            <h4>Tech I reach for</h4>
                            <div className="stack-chips">
                                {skills.technical.map((tech) => (
                                    <span className="chip" key={tech}>{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="panel reveal d2">
                            <h4>What I focus on</h4>
                            <ul className="focus-list">
                                {personal.focus.map((item) => (
                                    <li key={item}><span className="sq"></span>{item}</li>
                                ))}
                            </ul>
                            <p className="soft-line">{personal.focusNote}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
