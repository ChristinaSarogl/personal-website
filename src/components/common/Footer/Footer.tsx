import { Link } from 'react-router';

import './footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className='footer-content'>
          <div className="footer-text">
            <span>Christina</span>
            <span className="text-primary">.</span>
            <span>Saroglaki</span>
          </div>

          <div className="footer-links">
            <Link to=''onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Top</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/about'>Bio</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
      </div>

      <div className="rights-text">
        <p>© 2026 Christina Saroglaki - All rights reserved</p>
        <p>Made with React, Tailwind CSS & caffeine</p>
      </div>
    </footer>
  );
}