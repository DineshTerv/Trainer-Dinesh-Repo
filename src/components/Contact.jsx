import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">
            Get In <span className="accent-text">Touch</span>
          </h2>
          <p className="section-sub">
            Available for college training programs, placement bootcamps, workshops, and speaking engagements
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Ready to level up your students' technical skills?</h3>
            <p>
              Whether you need a week-long Java bootcamp, an intensive DSA placement track, or a customized curriculum for your institution, let's talk.
            </p>
            <div className="contact-items">
              <a href={`mailto:${personalInfo.email}`} className="contact-item" id="cntEmail">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,12 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="ci-label">Email Me</div>
                  <div className="ci-val">{personalInfo.email}</div>
                </div>
              </a>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-item" id="cntPhone">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.11 9.5 19.79 19.79 0 011 2.18 2 2 0 013 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="ci-label">Call / WhatsApp</div>
                  <div className="ci-val">{personalInfo.phone}</div>
                </div>
              </a>
              <div className="contact-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="ci-label">Location</div>
                  <div className="ci-val">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap reveal">
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject / Institution</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="e.g. Campus Placement Training"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell me about your batch size, topics, or dates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full" id="formSubmit">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
              {submitted && (
                <div className="form-success" id="formSuccess" style={{ display: 'block', marginTop: '12px' }}>
                  Message sent! I'll get back to you soon. &#127881;
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
