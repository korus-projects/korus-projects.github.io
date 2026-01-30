import React, { useEffect, useRef, useState, useMemo } from 'react';
import Link from '@docusaurus/Link';
import { HERO_CONTENT } from '@site/src/data';
import './HeroSection.css';


function useOrbitalPhysics() {
    const ringRefs = useRef([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const frameId = useRef(0);
    const lastTime = useRef(performance.now());

    const rings = useRef([
        { angle: 0, velocity: 40, baseRotation: [75, 10, 0] },
        { angle: 0, velocity: -25, baseRotation: [65, -30, 0] },
        { angle: 0, velocity: 55, baseRotation: [110, 60, 0] }
    ]);

    useEffect(() => {
        setIsLoaded(true);

        const animate = (now) => {
            const dt = (now - lastTime.current) / 1000;
            lastTime.current = now;

            rings.current.forEach((ring, i) => {
                const ringEl = ringRefs.current[i];
                if (!ringEl) return;

                ring.angle += ring.velocity * dt;

                const radX = ring.baseRotation[0] * Math.PI / 180;
                const radY = ring.baseRotation[1] * Math.PI / 180;
                const radZ = (ring.baseRotation[2] + ring.angle) * Math.PI / 180;

                const cx = Math.cos(radX), sx = Math.sin(radX);
                const cy = Math.cos(radY), sy = Math.sin(radY);
                const cz = Math.cos(radZ), sz = Math.sin(radZ);

                const m11 = cy * cz;
                const m12 = -cy * sz;
                const m13 = sy;
                const m21 = sx * sy * cz + cx * sz;
                const m22 = -sx * sy * sz + cx * cz;
                const m23 = -sx * cy;
                const m31 = -cx * sy * cz + sx * sz;
                const m32 = cx * sy * sz + sx * cz;
                const m33 = cx * cy;

                ringEl.style.transform = `matrix3d(${m11.toFixed(6)}, ${m21.toFixed(6)}, ${m31.toFixed(6)}, 0, ${m12.toFixed(6)}, ${m22.toFixed(6)}, ${m32.toFixed(6)}, 0, ${m13.toFixed(6)}, ${m23.toFixed(6)}, ${m33.toFixed(6)}, 0, 0, 0, 0, 1)`;
            });

            frameId.current = requestAnimationFrame(animate);
        };

        frameId.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(frameId.current);
        };
    }, []);

    return { ringRefs, isLoaded };
}

export default function HeroSection() {
    const { eyebrow, title, tagline, description, version, javaVersion, license, highlights } = HERO_CONTENT;
    const { ringRefs, isLoaded } = useOrbitalPhysics();

    return (
        <header className={`hero-section ${isLoaded ? 'hero-section--loaded' : ''}`}>
            {/* Background decorative elements */}
            <div className="hero-bg-grid" />
            <div className="hero-bg-glow hero-bg-glow--1" />
            <div className="hero-bg-glow hero-bg-glow--2" />
            <div className="hero-bg-glow hero-bg-glow--3" />

            <div className="hero-container">
                {/* Left Column - Content */}
                <div className="hero-content">

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
                        <Link className="hero-btn hero-btn--secondary" to="https://github.com/preonus-projects">
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
                                <img src="/img/logo.png" alt="Preonus Logo" className="hero-sphere__logo" />
                            </div>
                            <div className="hero-sphere__ring hero-sphere__ring--1" ref={el => ringRefs.current[0] = el}></div>
                            <div className="hero-sphere__ring hero-sphere__ring--2" ref={el => ringRefs.current[1] = el}></div>
                            <div className="hero-sphere__ring hero-sphere__ring--3" ref={el => ringRefs.current[2] = el}></div>
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
