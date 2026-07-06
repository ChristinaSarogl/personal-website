import { Link } from 'react-router';
import RightArrow from '../icons/RightArrow';

import './contact.css';

export default function Contact() {
  return (
    <section>
      <div className="contact-container">
        <h2 className="contact-title"><span>Let's build something amazing!</span></h2>
        <p className="contact-description">
          Always open to interesting projects and collaborations.<br />
          Drop me a line and let's chat.
        </p>

        <Link to={'/projects'} className={'text color'}>
          Get in Touch
        </Link>
      </div>
    </section>
  );
}