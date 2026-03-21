import { experience } from '../data/data';
import './Experience.css';

function Experience() {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">// Experience</span>
                    <h2 className="section-title">My Journey</h2>
                    <p className="section-subtitle">
                        Where I've been and what I've done
                    </p>
                </div>

                <div className="experience__timeline">
                    <div className="experience__timeline-line"></div>
                    {experience.map((item, index) => (
                        <div
                            key={index}
                            className={`experience__item reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'} stagger-${index + 1}`}
                        >
                            <div className="experience__dot">
                                <div className="experience__dot-inner"></div>
                            </div>
                            <div className="experience__card glass-card">
                                <div className="experience__card-header">
                                    <div>
                                        <h3 className="experience__role">{item.role}</h3>
                                        <p className="experience__company">{item.company}</p>
                                    </div>
                                    <span className="experience__period">{item.period}</span>
                                </div>
                                <p className="experience__description">{item.description}</p>
                                <div className="experience__tech">
                                    {item.technologies.map((tech) => (
                                        <span key={tech} className="experience__tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
