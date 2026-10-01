import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleEmailClick = (e) => {
    if (!showEmail) {
      e.preventDefault();
      setShowEmail(true);
      setTimeout(() => setShowEmail(false), 4000);
    }
  };

  const handlePhoneClick = (e) => {
    if (!showPhone) {
      e.preventDefault();
      setShowPhone(true);
      setTimeout(() => setShowPhone(false), 4000);
    }
  };

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let timeout;

    if (isDeleting) {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      }
    } else {
      if (typedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        }, 90);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>Open to Training Opportunities
          </div>
          <h1 className="hero-name">
            <span className="name-line">Hi, I'm</span>
            <span className="name-main">{personalInfo.name}</span>
          </h1>
          <h2 className="hero-title">
            <span className="title-typed">{typedText}</span>
            <span className="cursor-blink">|</span>
          </h2>
          <p className="hero-tagline">
            Empowering students through <strong>Java &bull; DSA &bull; Full Stack &bull; Problem Solving</strong>
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary" id="heroViewWork">
              <span>View My Work</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="https://canva.link/lhpmb1hjxpzvtpn" target="_blank" rel="noreferrer" className="btn btn-secondary" id="heroResume">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>View Resume</span>
            </a>
            <a href="#contact" className="btn btn-outline" id="heroContact">
              <span>Contact Me</span>
            </a>
          </div>
          <div className="hero-social">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-link" id="heroLinkedIn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-link" id="heroGitHub" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </a>
            <a href={`mailto:${personalInfo.email}`} className={`social-link ${showEmail ? 'expanded' : ''}`} id="heroEmail" aria-label="Email" onClick={handleEmailClick}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,12 2,6" />
              </svg>
              {showEmail && <span className="social-text">{personalInfo.email}</span>}
            </a>
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className={`social-link ${showPhone ? 'expanded' : ''}`} id="heroPhone" aria-label="Phone" onClick={handlePhoneClick}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.11 9.5 19.79 19.79 0 011 2.18 2 2 0 013 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {showPhone && <span className="social-text">{personalInfo.phone}</span>}
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-ring ring-outer"></div>
          <div className="hero-image-ring ring-middle"></div>
          <div className="hero-image-ring ring-inner"></div>
          <div className="hero-image-frame">
            <img src="./profile.jpg" alt="Dinesh N - Technical Trainer" className="hero-photo" id="heroPhoto" />
          </div>
          <div className="floating-card card-java">
            <span className="card-icon">
              <img src="./assets/skills/java.svg" alt="Java" style={{ width: '20px', height: '20px', display: 'block' }} />
            </span>
            <span>Java Expert</span>
          </div>
          <div className="floating-card card-dsa">
            <span className="card-icon">
              <img src="./assets/skills/trees-graphs.svg" alt="DSA" style={{ width: '20px', height: '20px', display: 'block' }} />
            </span>
            <span>DSA Mentor</span>
          </div>
          <div className="floating-card card-students">
            <span className="card-icon">
              <img src="./assets/skills/training.svg" alt="Students" style={{ width: '20px', height: '20px', display: 'block' }} />
            </span>
            <span>15000+ Students</span>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator" aria-label="Scroll">
        <span className="scroll-dot"></span>
      </a>
    </section>
  );
}
