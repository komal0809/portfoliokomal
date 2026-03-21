import { useState, useEffect } from 'react';
import { navLinks } from '../data/data';
import './Navbar.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = navLinks.map(link =>
            document.querySelector(link.href)
        ).filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container container">
                <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
                    <span className="navbar__logo-bracket">&lt;</span>
                    <span className="navbar__logo-name">Komal Lamba</span>
                    <span className="navbar__logo-bracket"> /&gt;</span>
                </a>

                <ul className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                                <span className="navbar__link-indicator"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="#contact" className="navbar__cta btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>
                    Let's Talk
                </a>

                <button
                    className={`navbar__hamburger ${isMobileOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
