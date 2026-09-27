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

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link to={'mailto:xristsar@gmail.com'} className={'text color'}>
            Find me on LinkedIn
          </Link>

          <Link to={'mailto:xristsar@gmail.com'} className={'text ghost'}>
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}