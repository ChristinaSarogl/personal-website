import { Link, NavLink } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
import MobileMenu from "../../icons/MobileMenu";

import "./header.css";
import "../../../styles/buttons.css";

const NAV_LINKS = [
  { key: "Home", label: "Home", path: "" },
  { key: "About", label: "About", path: "about" },
  { key: "Projects", label: "Projects", path: "projects" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: ['easeIn'] }}
        className="header">
        <div className="header-container">
          <Link to="/" className="logo" aria-label="Christina Saroglou, home">
            CS<span>.</span>
          </Link>

          <nav className="desktop-only" aria-label="Navigation">
            <ul className="nav-links" role="list">
              {NAV_LINKS.map(({ key, label, path }) => (
                <li key={key}>
                  <NavLink to={`/${path}`}
                    className={({ isActive }) => isActive ? "relative active" : "relative"} aria-label={`${label}`}>
                    {label}
                    <div className="link-underline" />
                  </NavLink>
                </li>
              ))}
              <a href="mailto:xristsar@gmail.com" className={'text color small'} aria-label='contact'>
                Let's Talk
              </a>
            </ul>
          </nav>

          <div className="mobile-menu">
            <button type="button" aria-label="Open menu" aria-expanded={isOpen}>
              <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </button>
          </div>
        </div>
      </motion.header>

      <nav className={`mobile-elements ${isOpen ? 'open' : 'closed'}`} aria-label="Mobile menu">
        <ul className="nav-links" role="list">
          {NAV_LINKS.map(({ key, label, path }) => (
            <li key={key}>
              <NavLink to={`/${path}`}
                className={"relative"} aria-label={`${label}`}
                onClick={() => {
                  setIsOpen?.((prev) => !prev);
                }}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <a href="mailto:xristsar@gmail.com" className={'text color small'} aria-label='contact'>
          Let's Talk
        </a>
      </nav>
    </section>
  )
}