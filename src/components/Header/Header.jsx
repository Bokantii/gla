import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import logo from "./../../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    console.log("Menu toggled");
    setMenuIsOpen((prevState) => !prevState);
  }

  const overlayClass = menuIsOpen
    ? `${classes.overlay_visible}`
    : `${classes.overlay}`;

  return (
    <>
      <section className={overlayClass}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="https://glaabuja.org/lyricsFormatter/index.html">
              Lyrics Formatter
            </a>
          </li>
          <li>
            <a
              href="https://october2power.web.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Events
            </a>
          </li>
          <li>
            <Link to="/giving">Giving</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/dataCollection">Newcomers</Link>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faXmark}
          className={classes.x_mark}
          onClick={toggleMenu}
        />
      </section>

      <section className={classes.header}>
        <section className={classes.header_content}>
          <img src={logo} alt="logo" className={classes.logo} />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="https://glaabuja.org/lyricsFormatter/index.html">
                Lyrics Formatter
              </a>
            </li>
            <li>
              <a
                href="https://october2power.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Events
              </a>
            </li>
            <li>
              <Link to="/giving">Giving</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/dataCollection">Newcomers</Link>
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faBars}
            className={classes.hamburger_menu}
            onClick={toggleMenu}
          />
        </section>
      </section>
    </>
  );
};

export default Header;
