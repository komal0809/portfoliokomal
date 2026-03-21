import { useEffect, useRef, useState } from 'react';
import { personalInfo, stats } from '../data/data';
import './About.css';

function AnimatedCounter({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 2000;
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(eased * target);
                        setCount(current);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">// About Me</span>
                    <h2 className="section-title">Get to Know Me</h2>
                    <p className="section-subtitle">
                        A passionate developer who loves turning ideas into reality
                    </p>
                </div>

                <div className="about__content">
                    <div className="about__info reveal-left">
                        <div className="about__bio glass-card">
                            <div className="about__bio-icon">🧑‍💻</div>
                            <h3 className="about__bio-title">Who am I?</h3>
                            <p className="about__bio-text">
                                {personalInfo.aboutBio}
                            </p>
                            <div className="about__details">
                                <div className="about__detail">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>{personalInfo.location}</span>
                                </div>
                                <div className="about__detail">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <span>{personalInfo.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about__stats reveal-right">
                        {stats.map((stat, index) => (
                            <div key={index} className={`about__stat glass-card stagger-${index + 1}`}>
                                <div className="about__stat-value">
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="about__stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
