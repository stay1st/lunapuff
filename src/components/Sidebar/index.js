import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-j.svg'
import LogoSubtitle from '../../assets/images/joshua-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCodeBranch,
  faCodeMerge,
  faCodePullRequest,
  faEnvelope,
  faHome,
  faHomeAlt,
  faMicrochip,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faHackerNews,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { useMemo } from 'react'

const Sidebar = () => {
  return useMemo(() => {
    return (
      <div className="nav-bar">
        <Link className="logo" to="/">
          <div className="lgrey-div">
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="joshua" />
          </div>
        </Link>
        <nav>
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
      </div>
    )
  })
}

export default Sidebar
