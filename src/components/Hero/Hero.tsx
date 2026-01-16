import { Link } from "react-router";
import RightArrow from "../icons/RightArrow";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Mail from "../icons/Mail";

import "./hero.css"

const SOCIAL_LINKS = [
  { key: "Github", Icon: Github, path: "https://github.com/ChristinaSaroglli" },
  { key: "Linkedin", Icon: Linkedin, path: "https://www.linkedin.com/in/christina-ioanna-saroglaki/" },
  { key: "Mail", Icon: Mail, path: "mailto:xristsar@gmail.com"}
];

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-bg">
        <div className="orb left"/>
        <div className="orb right" />
      </div>

      <div className="hero-content">
        <div className="badge">
          <span className="pulse-circle" />
          <p className="badge-content">Available for work</p>
        </div>

        <div>
          <h1 className="hero-title">
            <span>Christina </span>
            <span className="text-color">Saroglaki</span>
          </h1>
        </div>

        <p className="hero-caption">
          Turning coffee into code since 2018. Fast learner, slower sleeper.{" "}
          <br className="hidden md:block" />
          Building products that <em className="text-white/80 not-italic">actually</em> work.
        </p>

        <div className="cta-buttons">
          <Link to={'/projects'} className={'text icon color'}>
            View Projects <RightArrow/>
          </Link>
          <Link to={'/about'} className={'text ghost'}>Learn More</Link>
        </div>

        <div className="social-links">
          {SOCIAL_LINKS.map(({key, Icon, path}) => (
            <Link key={key} to={`/${path}`} className="icon ghost">
              <Icon />
            </Link>
          ))}
        </div>
      </div>      
    </section>
  );
}
