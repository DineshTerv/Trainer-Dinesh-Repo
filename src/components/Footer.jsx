import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#home" className="footer-logo">
            Dinesh Trainer
          </a>
          <p className="footer-tagline">
            Technical Trainer &amp; Training Team Lead &bull; {personalInfo.location}
          </p>
          <div className="footer-links">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
          </div>
          <p className="footer-copy">&copy; 2024 Dinesh N. Built with passion for teaching.</p>
        </div>
      </div>
    </footer>
  );
}
