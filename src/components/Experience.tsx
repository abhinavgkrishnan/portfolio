import { resumeData } from '@/data/resume';

export default function Experience() {
    return (
        <section className="block" id="experience">
            <div className="wrap">
                <div className="block-head" style={{ marginBottom: '44px' }}>
                    <span className="seclabel reveal"><span className="num">03</span> Experience <span className="bar"></span></span>
                    <h2 className="h2 reveal">Where I&apos;ve worked.</h2>
                </div>
                <div className="exp-list">
                    {resumeData.experience.map((exp) => (
                        <div className="exp-item reveal" key={exp.company}>
                            <div className="exp-meta">
                                <span className="period">{exp.period}</span>
                                <span className="loc">{exp.location}</span>
                                <div className="comp">{exp.company}</div>
                            </div>
                            <div className="exp-body">
                                <h3>{exp.role}</h3>
                                <ul>
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
