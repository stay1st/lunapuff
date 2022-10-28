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
  faTriangleCircleSquare,
  faCodeFork,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { useMemo } from 'react'



const Sidebar = () => {
  const [navMobileMenu, setNavMobileMenu] = useState(false)
  const [hamburgerAnimate, setHamburgerAnimate] = useState('hamburger-close')

  const handleMenuCloseHide = () => {
    if (navMobileMenu === true) {
      setHamburgerAnimate('hamburger-close')
    return setNavMobileMenu(false)
    }
    setHamburgerAnimate('hamburger')
    return setNavMobileMenu(true)
  }

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
          <NavLink 
            onClick={handleMenuCloseHide}
            exact="true" 
            className='fa-home'
            activeclassname="active" 
            to="/"
          >
            <FontAwesomeIcon icon={faCodeMerge} color="#a3a3a6" />
          </NavLink>
          <NavLink
            onClick={handleMenuCloseHide}
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faCodeBranch} color="#a3a3a6" />
          </NavLink>
          <NavLink
            onClick={handleMenuCloseHide}
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faCodePullRequest} color="#a3a3a6" />
          </NavLink>
          <NavLink
            onClick={handleMenuCloseHide}
            exact="true" 
            activeclassname="active" 
            className="portfolio-link" 
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faCodeCompare} color="#a3a3a6" />
          </NavLink>
          <NavLink
            onClick={handleMenuCloseHide}
            exact="true" 
            activeclassname="active" 
            className="resume-link" 
            to="/resume"
          >
            <FontAwesomeIcon icon={faCodeFork} color="#a3a3a6" />
          </NavLink>
        </nav>
        <ul>
        <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://vercel.com/stay1st"
            >
              <FontAwesomeIcon icon={faTriangleCircleSquare} color="#a3a3a6" />
            </a>
          </li>
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
        <span id='hamburger-container'>
          <div
            onClick={handleMenuCloseHide}
            id={hamburgerAnimate}
            style={{
              margin: '25px',
              float: 'right',
            }}
          >
            <div></div>
          </div>
        </span>
      </div>
    )
  })
}

export default Sidebar
