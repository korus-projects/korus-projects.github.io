import React from 'react';
import Link from '@docusaurus/Link';
import { HERO_CONTENT } from './constants';
import '@site/src/components/css/HeroSection.css';

/**
 * Hero section - Modern two-column layout with 3D sphere visual
 */
export default function HeroSection() {
    const { eyebrow, title, tagline, description, version, javaVersion, license, highlights } = HERO_CONTENT;

    return (
        <header className="hero-section">
            {/* Background decorative elements */}
            <div className="hero-bg-grid" />
            <div className="hero-bg-glow hero-bg-glow--1" />
            <div className="hero-bg-glow hero-bg-glow--2" />
            <div className="hero-bg-glow hero-bg-glow--3" />

            <div className="hero-container">
                {/* Left Column - Content */}
                <div className="hero-content">
                    {/* Eyebrow badge */}
                    <div className="hero-eyebrow">
                        <span className="hero-eyebrow__dot" />
                        <span className="hero-eyebrow__text">{eyebrow}</span>
                    </div>

                    {/* Main title */}
                    <h1 className="hero-title">
                        <span className="hero-title__line">Build Faster.</span>
                        <span className="hero-title__line hero-title__line--gradient">{title}</span>
                    </h1>

                    {/* Tagline */}
                    <p className="hero-tagline">{tagline}</p>

                    {/* Description */}
                    <p className="hero-description">{description}</p>

                    {/* CTA Buttons */}
                    <div className="hero-actions">
                        <Link className="hero-btn hero-btn--primary" to="/docs/intro">
                            <RocketIcon />
                            <span>Get Started</span>
                            <ArrowIcon />
                        </Link>
                        <Link className="hero-btn hero-btn--secondary" to="https://github.com/korus-projects">
                            <GitHubIcon />
                            <span>View on GitHub</span>
                        </Link>
                    </div>

                    {/* Meta info bar */}
                    <div className="hero-meta-bar">
                        <div className="hero-meta-item">
                            <CodeIcon />
                            <span>Latest: <code>{version}</code></span>
                        </div>
                        <div className="hero-meta-divider" />
                        <div className="hero-meta-item">
                            <JavaIcon />
                            <span>{javaVersion}</span>
                        </div>
                        <div className="hero-meta-divider" />
                        <div className="hero-meta-item">
                            <LicenseIcon />
                            <span>{license}</span>
                        </div>
                    </div>
                </div>

                {/* Right Column - Framework Logo Visual */}
                <div className="hero-visual">
                    <div className="hero-sphere-container">

                        <div className="hero-sphere">
                            <div className="hero-sphere__core">
                                <img src="/img/logo.png" alt="Korus Logo" className="hero-sphere__logo" />
                            </div>
                            <div className="hero-sphere__ring hero-sphere__ring--1"></div>
                            <div className="hero-sphere__ring hero-sphere__ring--2"></div>
                            <div className="hero-sphere__ring hero-sphere__ring--3"></div>
                            <div className="hero-sphere__glow"></div>
                        </div>

                        {highlights && highlights.map((item, index) => (
                            <div
                                key={index}
                                className={`hero-stat-badge hero-stat-badge--${index + 1}`}
                            >
                                <span className="hero-stat-badge__value">{item.value}</span>
                                <span className="hero-stat-badge__label">{item.label}</span>
                            </div>
                        ))}

                        <div className="hero-tech-badge hero-tech-badge--1">Build Time DI</div>
                        <div className="hero-tech-badge hero-tech-badge--2">Native Ready</div>
                        <div className="hero-tech-badge hero-tech-badge--4">Instant Startup</div>
                        <div className="hero-tech-badge hero-tech-badge--9">No Proxies</div>
                        <div className="hero-tech-badge hero-tech-badge--7">Fast Routing</div>
                        <div className="hero-tech-badge hero-tech-badge--8">Modular Design</div>

                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="hero-bottom-fade" />
        </header>
    );
}

// Icons
function RocketIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
    );
}

function CodeIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
    );
}

function JavaIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573"/>
        </svg>
    );
}

function LicenseIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/>
        </svg>
    );
}
