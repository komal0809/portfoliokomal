import { navLinks, socialLinks, personalInfo } from '../data/data';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <a href="#home" className="footer__logo" onClick={(e) => handleNavClick(e, '#home')}>
                            <span className="footer__logo-bracket">&lt;</span>
                            <span className="footer__logo-name">{personalInfo.name}</span>
                            <span className="footer__logo-bracket"> /&gt;</span>
                        </a>
                        <p className="footer__tagline">
                            Building AI/ML solutions, one model at a time.
                        </p>
                    </div>

                    <div className="footer__links">
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__social">
                        <h4 className="footer__heading">Connect</h4>
                        <div className="footer__social-icons">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer__divider"></div>

                <div className="footer__bottom">
                    <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
                    <p className="footer__credit">
                        Crafted with <span className="footer__heart">❤️</span> using React + Vite
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
