import { useState, useEffect } from 'react';
import { personalInfo } from '../data/data';
import ParticlesBackground from './ParticlesBackground';
import './Hero.css';

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = personalInfo.roles[roleIndex];
        let timeout;

        if (!isDeleting) {
            if (text.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setText(currentRole.slice(0, text.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            if (text.length > 0) {
                timeout = setTimeout(() => {
                    setText(currentRole.slice(0, text.length - 1));
                }, 40);
            } else {
                setTimeout(() => {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
                }, 0);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section id="home" className="hero">
            <ParticlesBackground />
            <div className="hero__bg-glow hero__bg-glow--1"></div>
            <div className="hero__bg-glow hero__bg-glow--2"></div>

            <div className="hero__content container">
                
                {/* LEFT SIDE */}
                <div className="hero__text">
                    <p className="hero__greeting">
                        <span className="hero__wave">👋</span> Hello, I'm
                    </p>

                    <h1 className="hero__name">
                        {personalInfo.name}
                        <span className="hero__dot">.</span>
                    </h1>

                    <div className="hero__role-wrapper">
                        <span className="hero__role-prefix">I'm a </span>
                        <span className="hero__role">
                            {text}
                            <span className="hero__cursor">|</span>
                        </span>
                    </div>

                    <p className="hero__description">
                        {personalInfo.bio}
                    </p>

                    <div className="hero__actions">
                        <a href="#contact" className="btn btn-primary">
                            Get in Touch
                        </a>

                        <a 
                            href={personalInfo.resumeLink} 
                            className="btn btn-secondary" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE (IMAGE) */}
                <div className="hero__visual">
                    
                    <div className="hero__avatar-ring">
                        <div className="hero__avatar">
                            <img 
                                src="/src/assets/profile.jpg"  
                                alt="test"
                                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                            />
                        </div>
                    </div>

                    <div className="hero__floating-badge hero__floating-badge--1">
                        <span>🐍</span> Python
                    </div>

                    <div className="hero__floating-badge hero__floating-badge--2">
                        <span>🤖</span> TensorFlow
                    </div>

                    <div className="hero__floating-badge hero__floating-badge--3">
                        <span>📊</span> Scikit-learn
                    </div>

                </div>
            </div>

            <div className="hero__scroll-indicator">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
}

export default Hero;