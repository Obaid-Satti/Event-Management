import React from 'react';

const HeroSection = () => (
  <header className="hero-section" id="home">
    <div className="hero-background"></div>
    <div className="hero-content text-center animate-fade-in">
      <div className="badge glass mb-4 px-3 py-2 fs-6 fw-normal">✨ Your Local Event Guide</div>
      <h1 className="hero-title">
        Discover Events <br />
        <span className="text-gradient-2">Near You</span>
      </h1>
      <p className="hero-subtitle">
        Find the best local experiences, concerts, tech summits, and exclusive gatherings all in one place.
      </p>
      <div className="hero-actions d-flex gap-3 justify-content-center flex-wrap">
        <a href="#events" className="btn btn-primary btn-lg px-4">Explore Now</a>
        <a href="#about" className="btn btn-secondary btn-lg px-4">Learn More</a>
      </div>
    </div>
  </header>
);

export default HeroSection;
