import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; 2023 MyCompany. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
