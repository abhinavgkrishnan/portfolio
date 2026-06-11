import { resumeData } from '@/data/resume';
import ArrowUpRight from '@/components/ArrowUpRight';

export default function Projects() {
    const featured = resumeData.projects.find((p) => p.featured);
    const rest = resumeData.projects.filter((p) => !p.featured);
    const revealDelays = ['d1', 'd2', 'd3'];

    return (
        <section className="block" id="work">
            <div className="wrap">
                <div className="block-head">
                    <span className="seclabel reveal"><span className="num">01</span> Selected work <span className="bar"></span></span>
                    <h2 className="h2 reveal">Projects I&apos;ve shipped.</h2>
                    <p className="lead-2 reveal d1">From AI workflow platforms to Farcaster indexers and mobile games, most of my projects are built end to end — from infrastructure and data pipelines to the UI.</p>
                </div>

                {featured && (
                    <article className="featured reveal d1">
                        <div className="shot">
                            <span className="tag-feat">Featured</span>
                            <img src={featured.image} alt={featured.name} />
                        </div>
                        <div className="body">
                            <span className="role">{featured.role}</span>
                            <h3>{featured.name}</h3>
                            <p>{featured.description}</p>
                            <div className="chips">
                                {featured.chips?.map((chip) => (
                                    <span className="chip" key={chip}>{chip}</span>
                                ))}
                            </div>
                            <div className="links">
                                <a href={featured.link} target="_blank" rel="noopener" className="btn primary">
                                    Visit <ArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </article>
                )}

                <div className="proj-grid">
                    {rest.map((project, index) => (
                        <article className={`pcard reveal ${revealDelays[index % revealDelays.length]}`} key={project.name}>
                            <div className="shot"><img src={project.image} alt={project.name} /></div>
                            <div className="pbody">
                                <span className="role">{project.role}</span>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className="chips">
                                    {project.chips?.map((chip) => (
                                        <span className="chip" key={chip}>{chip}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener" className="open">
                                    Visit <ArrowUpRight />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
