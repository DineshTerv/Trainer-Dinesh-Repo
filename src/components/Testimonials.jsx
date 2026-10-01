import React from 'react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="section section-alt" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What They Say</span>
          <h2 className="section-title">
            Student <span className="accent-text">Testimonials</span>
          </h2>
        </div>
        <div className="testimonials-grid reveal">
          {testimonialsData.map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{item.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{item.avatar}</div>
                <div>
                  <h4>{item.author}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
