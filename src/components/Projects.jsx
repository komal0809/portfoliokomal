import { projects } from '../data/data';
import './Projects.css';

function Projects() {
    const MAX_TAGS = 4;

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="projects__kicker">My Projects</span>
                    <h2 className="section-title">Check out my latest work</h2>
                    <p className="section-subtitle">
                        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((project, index) => {
                        const visibleTags = (project.tags || []).slice(0, MAX_TAGS);
                        const remaining = Math.max(0, (project.tags || []).length - visibleTags.length);

                        return (
                        <div
                            key={project.title}
                            className={`projects__card glass-card reveal stagger-${(index % 4) + 1}`}
                        >
                            <div className="projects__card-content">
                                <h3 className="projects__card-title">{project.title}</h3>
                                <p className="projects__card-desc">{project.description}</p>

                                <div className="projects__card-tags" aria-label="Technologies">
                                    {visibleTags.map((tag) => (
                                        <span key={tag} className="projects__tag">{tag}</span>
                                    ))}
                                    {remaining > 0 ? (
                                        <span className="projects__tag projects__tag--more">+{remaining}</span>
                                    ) : null}
                                </div>
                            </div>

                            <div className="projects__card-footer">
                                {project.github ? (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="projects__source"
                                        aria-label={`Source: ${project.title}`}
                                    >
                                        <svg className="projects__source-icon" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M12 2.25c-5.39 0-9.75 4.36-9.75 9.75 0 4.33 2.81 8.01 6.71 9.3.49.09.67-.21.67-.47 0-.23-.01-.84-.01-1.65-2.73.59-3.3-1.17-3.3-1.17-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59 0.97.07 1.48 1 1.48 1 .86 1.47 2.25 1.05 2.8.8.09-.63.34-1.05.62-1.29-2.18-.25-4.47-1.09-4.47-4.84 0-1.07.38-1.94 1-2.62-.1-.25-.43-1.25.1-2.6 0 0 .82-.26 2.69 1a9.3 9.3 0 0 1 2.45-.33c.83 0 1.66.11 2.45.33 1.87-1.26 2.69-1 2.69-1 .53 1.35.2 2.35.1 2.6.62.68 1 1.55 1 2.62 0 3.76-2.29 4.59-4.48 4.84.35.3.66.9.66 1.82 0 1.31-.01 2.37-.01 2.69 0 .26.18.56.68.47A9.76 9.76 0 0 0 21.75 12c0-5.39-4.36-9.75-9.75-9.75Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span>Source</span>
                                    </a>
                                ) : (
                                    <span className="projects__source projects__source--disabled">Source</span>
                                )}
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;
