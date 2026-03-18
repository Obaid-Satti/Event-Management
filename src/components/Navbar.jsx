import React, { useState } from 'react';
import { Navigation, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar glass fixed-top border-bottom">
      <div className="container-xl d-flex align-items-center" style={{ minHeight: '80px', position: 'relative' }}>
        <div className="navbar-logo position-absolute start-0 ps-4">
          <Navigation className="logo-icon-svg" />
          <span>Aura<span className="text-gradient">Events</span></span>
        </div>

        <ul className="navbar-links d-none d-md-flex mx-auto mb-0 list-unstyled gap-4">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="mobile-menu-btn d-md-none position-absolute end-0 pe-4" onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="mobile-menu glass animate-fade-in">
            <ul className="mobile-navbar-links list-unstyled">
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#events" onClick={toggleMenu}>Events</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
