import './contact.css';

export default function Contact() {
  return (
    <section>
      <div className="contact-container">
        <div className="glass-card" >
          <div className="glass-card-bg" ></div>
          <div className="glass-card-orb"></div>

          <div className="relative">
            <h2 className="contact-title"><span>Let's build something amazing!</span></h2>
            <p className="contact-description">
              Always open to interesting projects and collaborations.<br />
              Drop me a line and let's chat.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="https://www.linkedin.com/in/christina-ioanna-saroglaki/" className={'text color'}
                target="_blank">
                Find me on LinkedIn
              </a>

              <a href={'mailto:xristsar@gmail.com'} className={'text ghost'}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}