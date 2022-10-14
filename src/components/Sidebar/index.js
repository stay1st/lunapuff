import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
import LogoS from '../../assets/images/logo-j.svg'
import LogoSubtitle from '../../assets/images/joshua-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCodeBranch,
  faCodeMerge,
  faCodePullRequest,
  faCodeCompare,
  faHamburger,
  faCodeFork,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faHackerNews,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { useMemo } from 'react'

const Sidebar = () => {
  const [navMobileMenu, setNavMobileMenu] = useState(false)

  return useMemo(() => {
    return (
      <div className="nav-bar">
        <Link className="logo" to="/">
          <div className="lgrey-div">
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="joshua" />
          </div>
        </Link>
        <nav className={!navMobileMenu ? 'hide-menu' : 'show-menu'}>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faCodeMerge} color="#a3a3a6" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faCodeBranch} color="#a3a3a6" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faCodePullRequest} color="#a3a3a6" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faCodeCompare} color="#a3a3a6" />
          </NavLink>
          <div id="close-div">
            <FontAwesomeIcon
              onClick={() => setNavMobileMenu(false)}
              icon={faCodeFork}
              color="#fff"
              size="3x"
              className="close-menu"
              id={navMobileMenu}
            />
            <div id="close" onClick={() => setNavMobileMenu((false))}>CLOSE</div>
          </div>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/joshuascrawford/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#a3a3a6" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/stay1st"
            >
              <FontAwesomeIcon icon={faGithub} color="#a3a3a6" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/joshua.crawford.PA"
            >
              <FontAwesomeIcon icon={faFacebook} color="#a3a3a6" />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setNavMobileMenu(true)}
          icon={faHamburger}
          color="#00ffc2"
          size="3x"
          className="hamburger-mobile-fa"
          id={navMobileMenu}
        />
      </div>
    )
  })
}

export default Sidebar
