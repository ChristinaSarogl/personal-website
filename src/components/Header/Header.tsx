import { NavLink } from "react-router";
import { useState } from "react";
import MobileMenu from "../icons/MobileMenu";

import "./header.css";
import "../../buttons.css";

const NAV_LINKS = [
  { key: "Home", label: "Home", path: "" },
  { key: "About", label: "About", path: "about" },
  { key: "Projects", label: "Projects", path: "projects"}
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section>
      <header className="header">
        <div className="header-container">
          <a className="group flex items-center gap-2">
            <div className="logo">CS</div>
            <span className="logo-name">Christina Saroglaki</span>
          </a>
          

          <nav className="desktop-only" aria-label="Navigation">
            <ul className="nav-links" role="list">
              {NAV_LINKS.map(({key, label, path}) => (
                <li key={key}>
                  <NavLink to={`/${path}`}
                    className={({ isActive }) => isActive ? "relative active" : "relative"} aria-label={`${label}`}>
                    {label}
                    <div className="link-underline" />
                  </NavLink>
                </li>
              ))}
              <NavLink to={`/contact`} className={'text color small'} aria-label='contact'>
                Let's Talk
              </NavLink>
            </ul>            
          </nav>

          <div className="mobile-menu">
            <button type="button" aria-label="Open menu" aria-expanded={isOpen}>
              <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-elements ${isOpen ? 'open' : 'closed'}`} aria-label="Mobile menu">
        <ul className="nav-links" role="list">
          {NAV_LINKS.map(({key, label, path}) => (
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
        <NavLink to={`/contact`} className={'text color small'} aria-label='contact'>
          Let's Talk
        </NavLink>
      </nav>
    </section>
  )
}