import { skills } from '../data/data';
import './Skills.css';

const normalizeKey = (value) =>
    String(value)
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/\//g, ' ')
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();

// Monochrome SVG icons via Simple Icons CDN.
// Note: not every tech has a dedicated icon; we fall back to initials.
const iconSlugBySkill = {
    java: 'openjdk',
    mysql: 'mysql',
    docker: 'docker',
    linux: 'linux',
    swagger: 'swagger',
    postman: 'postman',
    github: 'github',
    'git and github': 'github',
    git: 'git',
    'vs code': 'visualstudiocode',
    'intellij idea': 'intellijidea',
    'spring boot': 'springboot',
    'spring security': 'spring',
    'spring ai': 'spring',
    'rest apis': 'swagger',
    'npm maven': 'npm',
    npm: 'npm',
    maven: 'apachemaven',
    python: 'python',
    tensorflow: 'tensorflow',
    opencv: 'opencv',
    xgboost: 'xgboost',
    'scikit-learn': 'scikitlearn',
    streamlit: 'streamlit',
    c: 'c',
    'c++': 'cplusplus',
};

const getIconUrl = (name) => {
    const key = normalizeKey(name);
    const slug = iconSlugBySkill[key];
    if (!slug) return null;
    // 0A0A0A = near-black, matches our paper theme text color
    return `https://cdn.simpleicons.org/${slug}/0A0A0A`;
};

const getAbbr = (name) => {
    const cleaned = String(name).trim();
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return parts
        .slice(0, 2)
        .map((p) => p[0])
        .join('')
        .toUpperCase();
};

const MarqueeRow = ({ items, reverse = false }) => {
    const doubled = [...items, ...items];
    return (
        <div className={`skills__marquee ${reverse ? 'skills__marquee--reverse' : ''}`}>
            <div className="skills__marquee-track">
                {doubled.map((name, idx) => (
                    <div className="skills__marquee-item" key={`${name}-${idx}`}>
                        <div className="skills__marquee-icon" aria-hidden="true">
                            {getIconUrl(name) ? (
                                <img
                                    className="skills__marquee-icon-img"
                                    src={getIconUrl(name)}
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                />
                            ) : (
                                getAbbr(name)
                            )}
                        </div>
                        <div className="skills__marquee-label">{name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

function Skills() {
    const allSkillNames = skills.flatMap((category) => category.items.map((item) => item.name));

    const rowA = allSkillNames.filter((_, i) => i % 3 === 0);
    const rowB = allSkillNames.filter((_, i) => i % 3 === 1);
    const rowC = allSkillNames.filter((_, i) => i % 3 === 2);

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">// My Skills</span>
                    <h2 className="section-title">Technologies I Work With</h2>
                    <p className="section-subtitle">
                        Constantly learning and expanding my toolkit
                    </p>
                </div>

                <div className="skills__marquee-wrap reveal">
                    <MarqueeRow items={rowA} />
                    <MarqueeRow items={rowB} reverse />
                    <MarqueeRow items={rowC} />
                </div>
            </div>
        </section>
    );
}

export default Skills;
