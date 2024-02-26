import './Content.css';
import './Projects.js';
import { useState } from 'react';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Education from './Education.js';
import Skills from './Skills.js';
import About from './About.js';

function Content() {
  const [active, setActive] = useState(null);
    return (
      <div className='Content'>
        <nav className="nav-bar">
            <div className="nav-list">
                <h2>On this Page</h2>
                <hr></hr>
                <ul className='nav-list-content'>
                  <li><a  className={active === "about"?'active': ''} onClick={() => setActive('about')} href='#about'>About</a></li>
                  <li><a  className={active === "skills"?'active': ''} onClick={() => setActive('skills')} href='#skills'>Skills</a></li>
                  <li><a  className={active === "education"?'active': ''} onClick={() => setActive('education')} href='#education'>Education</a></li>
                  <li><a  className={active === "experience"?'active': ''} onClick={() => setActive('experience')} href='#experience'>Experience</a></li>
                  <li><a  className={active === "projects"?'active': ''} onClick={() => setActive('projects')} href='#projects'>Projects</a></li>
                </ul>
            </div>
        </nav>
        <div className="main-content">
            <h3>Hello World!</h3>
            {(active === "about" || active === null) && <About></About>}
            {active === "skills" && <Skills></Skills>}
            {active === "education" && <Education></Education>}
            {active === "experience" && <Experience></Experience>}
            {active === "projects" && <Projects></Projects>}
            
        </div>
      </div>
    );
  }
  
  export default Content;