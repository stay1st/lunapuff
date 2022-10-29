import './index.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 2700)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't']}
            idx={19}
          />
        </h1>
        
        <h2>Introduction:</h2>
        <p>
        I'm Josh, a 29 year old ENTJ-Capricorn 😂 who's working his way into becoming a Senior Software Engineer. From Tampa, FL currently living in Pittsburgh, PA. 
        <h2>When my love for the Tech Industry started:</h2>
        At age 6 I was taking apart all of my battery operated toys to try and understand how they worked, I drove my mother crazy with this by the way! At age 9 I traded all of my games for a laptop. After that, I was hooked! By age 14 I could fix any windows computer issue, and I started heavily using Adobe Photoshop to touch up images for photographers in FL. I enrolled 
        a web design course in High School. When assigned projects, I would use Photoshop in tandem with Dreamweaver to design web pages. During that class, I was given the task of managing our high school's website alongside the teacher. I went to school in Hillsborough County, Florida. The 8th 
        largest school district in the US. So, to me this was huge!
        <h3>When I started utilizing Technology to generate revenue</h3>
        <p>Around this time in High School, is when I started collecting broken 1st and 2nd generation iPhones to fix and sell. My two younger brothers and I ran other businesses when I was 17, making and selling modified gaming consoles, components, constrollers, games, etc. I was 17 at the time. I posted videos on youtube regarding some of these in 2010. Honestly, couldn't believe I found at least some of them still up, Haha.
        Here is a link to one of them <a href='https://www.youtube.com/watch?v=fQlyCR3GSSE'>WAW lobby iso Xbox360</a></p>
        <h2>A little about my history</h2>
        <p>We had a rough childhood, with 8 brothers and sisters in the household. My brother and I had to become entrepreneurs early on in our teenage years to survive in our teenage years. I did not know this at the time, but all of these skills I was learning while not in school led me to be in a position to generate multiple 
        great streams of income for others and myself. I attended college for Computer Engineering Technology, gained 54 credit hours before dropping out of the program. Right now, you may be thinking, "Why would I do that with only a semester to go for the A.S.?", and you'd have a point! I was paying out of pocket for school,
        my online Shopify store was generating a good deal of business already, and I just had a child. With that said, I'm still considering doing it after my fianceé is done with Grad School.</p>
        
        <p>Until 5 months ago, I thought coding was the boring side of techology, but I had never done it besides simple HTML/CSS! But wow, I can't believe how mistaken I was to think that! Currently, I insert technology solutions into business sales cycles to generate substantial amounts of revenue. Over the last 11 years I've been in the sales/management industry, was flown across the US a few different times to train, manage, and develop offices. 
        <h2>Why others have hired me, and why you should to!</h2>
        <p>Recently, I've resigned from one of my roles in order to learn code as much as 
        possible. You'll have to look very far and wide to find someone that can outwork me consistently. Over the last 5 months I've not skipped a day. Since the end of August I've been studying and coding 80-100 hours/wk. Not for any other reason other than how much I love this now. I just 
        cannot believe I missed this. But then again, there wasn't anywhere near even half the resources there are now! Now, is always so much better than tomorrow or never. I'm here to stay, that's for sure.. 
        </p>
        </p>
        <p>Career Highlights: Developed an inside sales office from $0 to a multi-million dollar a year location. Revamped offices with declining revenues. Generated multi-millions for start-up small-mid sized buisinesses. I'm deciding to become a Software Engineer because I truly enjoy it! Thanks for reading this, if you made it all the way down here! You are wonderful!!</p>
        
        </p>
        <h2>Languages / Libraries / Frameworks:</h2>
          <p>ReactJS, VanillaJS, ReactThree-Fiber, ThreeJS, NodeJS, ExpressJS, EmailJS, D3, MongoDB, MySQL, HTML/CSS, SASS, JQuery, Bootstrap, and React Frameworks</p> 
          <h2>Other Software:</h2>
          <p>Adobe XD, Adobe Illustrator, Adobe Photoshop, Blender, WordPress, WebEx, Convertkit, </p>
          <ul>
          <p>
            <li>
              <strong>Favorite Resources:</strong> <a href='https://www.freecodecamp.org/'>FreeCodeCamp.org</a>, <a href='https://www.codesmith.io/'>CSX/Javascript-Workshops/Pair-Programming/Codesmith.io</a>, 
              <a href='https://www.theodinproject.com/theOdinProject.com'>The Odin Project</a>.
            </li>
            <li>
              <strong>Documentation:</strong> MDN, W3 Schools, FontAwesome CDN, Github,
              Git CLI, Daily.dev, ThreeJS.org, Codewars, Leetcode, ThreeJS-Journey, ReactThree-Fiber, NPM, 
            </li>
            </p>
          </ul>
        {/* <h3>About me:</h3> 
        The section below has never been publicly shared, but I'm presenting it in hopes to save a life. Like others have done for mine. This is for you baby Luna.
        In a way to let you know truly who I am and where I started. My hope is that someone
        that reads this can find empowerment through this short timeline, and understand that they can overcome almost any obstacle!
        <p color='orange'>Here's the hard parts:</p>
          <ul>
            <li>Age NewBorn: Born in NY, Father almost causes me to be born blind - 2 sisters</li>
            <li>Age 2: Not speaking; Mother gets me speech lessons</li>
            <li>Age 4: Moved to Fort Myers, FL - affordability - 3 sisters 1 brothers</li>
            <li>Age 6: Don't know when If I'll walk again. Six Months/ Mother nurses me back to health! I can walk!</li>
            <li>Age 7: Mother was renting to own, house is foreclosed and we move to apt.</li>
            <li>Age 8: Father leaves - 3 sisters 2 brothers</li>
            <li>Age 9: 3 younger siblings re-homed to AR, eldest sister re-homed to TN, 2nd eldest sister and I re-homed to KS</li>
            <li>Age 10: All 6 of us children move to Tampa, FL into a group home to be closer to our mother</li>
            <li>Age 11: Group Home continues - - See mother weekend/month due to Group Home rules - There are 7 children now</li>
            <li>Age 12: Father removes second youngest brother and I from group home to avoid childsupport. Youngest brother is 6 left alone in group home for another year. Girls don't can't see boys. 3 sisters still in</li>
            <li>Age 15: Life was normal and okay from 12yr-15yr from step Mother & Family's Involvement. Made true impact!</li>
            <li>Age 15: Step Mother seperates from Father</li>
            <li>Age 16: </li>
          </ul>
          <ul>
            <li>Born: Johnson City NY</li>
          </ul>
        </p> */}
        <span
          style={{
            color: 'grey',
            fontWeight: '400',
            height: '100%',
          }}
        >
          Inspired by Luna Crawford.
        </span>
      </div>
      <div className="stage-cube-cont">
        <div className="cube-spinner">
          <div className="react">
            <Link to="/portfolio" alt="portfolio">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </Link>
          </div>

          <div className="html5">
            <Link to="/portfolio" alt="portfolio">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </Link>
          </div>
          <div className="css3">
            <Link to="/portfolio" alt="portfolio">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </Link>
          </div>
          <div className="nodejs">
            <Link to="/portfolio" alt="nodejs">
              <FontAwesomeIcon icon={faNode} color="#FFF" />
            </Link>
          </div>
          <div className="javaScript" alt="portfolio">
            <Link to="/portfolio">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </Link>
          </div>
          <div className="git">
            <a href="https://www.github.com/stay1st/" alt="github@stay1st">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
