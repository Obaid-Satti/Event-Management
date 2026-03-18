import React from 'react';
import { Navigation } from 'lucide-react';

const Footer = () => (
  <footer className="footer border-top" id="contact">
    <div className="container text-center py-5">
      <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
        <Navigation size={24} className="text-primary" />
        <span className="fw-bold fs-5">AuraEvents</span>
      </div>
      <p className="text-tertiary mb-4">Connecting you with local experiences.</p>
      <div className="d-flex justify-content-center gap-4 footer-links mb-4">
        <a href="#home">Home</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </div>
      <hr className="border-subtle" />
      <p className="text-sm text-tertiary mb-0">© 2026 AuraEvents Startups. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
