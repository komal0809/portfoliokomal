import { useEffect, useMemo, useState } from 'react';
import { personalInfo, socialLinks } from '../data/data';
import './FloatingDock.css';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';

  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;

  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
  return prefersDark ? 'dark' : 'light';
}

function setDocumentTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

function normalizeUrl(url) {
  if (!url) return url;
  if (url.startsWith('mailto:[') && url.endsWith(']')) {
    return `mailto:${url.slice('mailto:['.length, -1)}`;
  }
  return url;
}

function Icon({ name }) {
  switch (name) {
    case 'home':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="dock__icon">
          <path
            d="M3 10.5 12 3l9 7.5V21a1.5 1.5 0 0 1-1.5 1.5H15a.75.75 0 0 1-.75-.75V16.5a2.25 2.25 0 0 0-2.25-2.25h0A2.25 2.25 0 0 0 9.75 16.5v5.25A.75.75 0 0 1 9 22.5H4.5A1.5 1.5 0 0 1 3 21V10.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'projects':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="dock__icon">
          <path
            d="M7.5 3.75h11.25A1.5 1.5 0 0 1 20.25 5.25v13.5a1.5 1.5 0 0 1-1.5 1.5H7.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7.5 3.75A2.25 2.25 0 0 0 5.25 6v14.25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5.25 18.75h13.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="dock__icon">
          <path
            d="M12 2.25c-5.39 0-9.75 4.36-9.75 9.75 0 4.33 2.81 8.01 6.71 9.3.49.09.67-.21.67-.47 0-.23-.01-.84-.01-1.65-2.73.59-3.3-1.17-3.3-1.17-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59 0.97.07 1.48 1 1.48 1 .86 1.47 2.25 1.05 2.8.8.09-.63.34-1.05.62-1.29-2.18-.25-4.47-1.09-4.47-4.84 0-1.07.38-1.94 1-2.62-.1-.25-.43-1.25.1-2.6 0 0 .82-.26 2.69 1a9.3 9.3 0 0 1 2.45-.33c.83 0 1.66.11 2.45.33 1.87-1.26 2.69-1 2.69-1 .53 1.35.2 2.35.1 2.6.62.68 1 1.55 1 2.62 0 3.76-2.29 4.59-4.48 4.84.35.3.66.9.66 1.82 0 1.31-.01 2.37-.01 2.69 0 .26.18.56.68.47A9.76 9.76 0 0 0 21.75 12c0-5.39-4.36-9.75-9.75-9.75Z"
            fill="currentColor"
          />
        </svg>
      );

    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="dock__icon">
          <path
            d="M6.5 9.5H3.75V20.25H6.5V9.5Zm.25-3.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM20.25 20.25h-2.75v-5.67c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99v5.77H10.7V9.5h2.64v1.46h.04c.37-.7 1.27-1.88 3.11-1.88 3.32 0 3.94 2.19 3.94 5.04v6.13Z"
            fill="currentColor"
          />
        </svg>
      );

    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="dock__icon">
          <path
            d="M18.9 2.25h2.65l-5.78 6.61 6.79 8.89h-5.32l-4.17-5.4-4.72 5.4H5.7l6.18-7.07-6.51-8.43h5.45l3.77 4.95 4.31-4.95Zm-.93 13.92h1.47L9.86 3.75H8.29l9.68 12.42Z"
            fill="currentColor"
          />
        </svg>
      );

    case 'email':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="dock__icon">
          <path
            d="M4.5 6.75h15A1.5 1.5 0 0 1 21 8.25v9A1.5 1.5 0 0 1 19.5 18.75h-15A1.5 1.5 0 0 1 3 17.25v-9A1.5 1.5 0 0 1 4.5 6.75Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="m4.5 8.25 7.2 5.4a.75.75 0 0 0 .9 0l7.2-5.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'resume':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="dock__icon">
          <path
            d="M7.5 3.75h6.75L18.75 8.25V20.25a1.5 1.5 0 0 1-1.5 1.5H7.5a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M14.25 3.75v4.5h4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 12h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9 15.75h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'theme':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="dock__icon">
          <path
            d="M21 12.8A7.2 7.2 0 0 1 11.2 3a.75.75 0 0 0-.98-.98A9 9 0 1 0 22 13.78a.75.75 0 0 0-.98-.98Z"
            fill="currentColor"
          />
        </svg>
      );

    default:
      return null;
  }
}

function FloatingDock() {
  const internalLinks = useMemo(
    () => [
      { label: 'Home', href: '#home', icon: 'home' },
      { label: 'Projects', href: '#projects', icon: 'projects' },
    ],
    []
  );

  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    setDocumentTheme(theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const sections = internalLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: '-80px 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [internalLinks]);

  const handleInternalClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(target.id);
    }
  };

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  const socialByIcon = useMemo(() => {
    const map = new Map();
    socialLinks.forEach((item) => map.set(item.icon, item));
    return map;
  }, []);

  const dockSocial = useMemo(() => {
    const ordered = ['github', 'linkedin', 'twitter', 'email'];
    return ordered
      .map((key) => socialByIcon.get(key))
      .filter(Boolean);
  }, [socialByIcon]);

  return (
    <div className="dock" role="navigation" aria-label="Quick navigation">
      <div className="dock__inner">
        <div className="dock__group">
          {internalLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`dock__item ${isActive ? 'dock__item--active' : ''}`}
                aria-label={link.label}
                title={link.label}
                data-tooltip={link.label}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => handleInternalClick(e, link.href)}
              >
                <Icon name={link.icon} />
              </a>
            );
          })}
        </div>

        <div className="dock__divider" aria-hidden="true" />

        <div className="dock__group">
          {dockSocial.map((item) => (
            <a
              key={item.icon}
              href={normalizeUrl(item.url)}
              className="dock__item"
              aria-label={item.name}
              title={item.name}
              data-tooltip={item.name}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name={item.icon} />
            </a>
          ))}

          {personalInfo?.resumeLink ? (
            <a
              href={personalInfo.resumeLink}
              className="dock__item"
              aria-label="Resume"
              title="Resume"
              data-tooltip="Resume"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="resume" />
            </a>
          ) : null}
        </div>

        <div className="dock__divider" aria-hidden="true" />

        <div className="dock__group">
          <button
            type="button"
            className="dock__item dock__item--button"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-pressed={theme === 'dark'}
            title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
            data-tooltip={theme === 'dark' ? 'Light theme' : 'Dark theme'}
            onClick={toggleTheme}
          >
            <Icon name="theme" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FloatingDock;
