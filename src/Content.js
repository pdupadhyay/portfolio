import { SocialIcon } from 'react-social-icons';
import './Content.css';
import { useState } from 'react';

const projects =[
  {
    name: 'Insurance Website',
    description: "An Online website made with Angular, Web Api’s (Dot Net) and MSSQL. This executed the implementation of an efficient admin dashboard empowering administrators to swiftly evaluate and approve/decline claims, as well as dynamically adjust claim amounts when necessary and streamlined claim processing.",
    url: 'https://github.com/pdupadhyay/General-Insurance'
  },
  {
    name: 'Color Palette',
    description: "A python application which processes an image using unsupervised learning and describes four major colors of the same. It uses K-Means clustering algorithm to differentiate among colors of the image. With vector quantization, it partitioned n colors into four clusters and displays them.",
    url:'https://github.com/pdupadhyay/ColourPalette'
  },
  {
    name: 'Tic-Tac-Toe',
    description: "A tic-tac-toe game made using React which stores the game history as the game progresses. It allows players to review their moves and see previous versions of game’s board.",
    url:'https://github.com/pdupadhyay/Tic-Tac-Toe'
  }
]

const experience = [
  {
    companyName : "University of Maryland, College Park",
    position : "Software Engineer",
    jobDescription: "Currently working as a Software Engineer in University of Maryland. In my role as a Software Engineer at the University of Maryland, I am actively engaged in processing large geospatial data, totaling in Terabytes. Leveraging AWS resources, I specialize in extracting and filtering essential information."
  },
  {
    companyName : "LTI Mindtree",
    position : "Software Engineer",
    jobDescription : "In my previous role as a Software Engineer at LTIMindtree, I spent two years supporting and maintaining a pricing tool for a leading manufacturing company. This tool, built on .NET MVC with an MSSQL database, was hosted on the Azure cloud. My experience has honed my skills in C#, Python, C++, Azure, MSSQL, Angular, TypeScript, Javascript, and jQuery."
  }
]

const skills = [
  {
    name: 'Angular',
    level: 4
  },
  {
    name: 'AWS Cloud9',
    level: 7
  },
  {
    name: 'AWS EC2',
    level: 6
  },
  {
    name: 'AWS S3',
    level: 6
  },
  {
    name: 'C++',
    level: 5
  },
  {
    name: 'C#',
    level: 7
  },
  {
    name: 'Clustering',
    level: 4
  },
  {
    name: 'Dot Net MVC',
    level: 7
  },
  {
    name: 'Git/Github',
    level: 7
  },
  {
    name: 'HTML',
    level: 8
  },
  {
    name: 'JavaScript/jQuery',
    level: 6
  },
  {
    name: 'MSSQL',
    level: 7
  },
  {
    name: 'Python',
    level: 8
  },
  {
    name: 'React',
    level: 5
  },
  {
    name: 'TypeScript',
    level: 7
  }
]

function SkillLevel(skilllevel) {
  return (
      <span style={{ width: `${skilllevel.skilllevel*10}%`}} className='skill-indicator' >
        {skilllevel.skilllevel*10}%
      </span>
  )
}

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
            <div id='about' className='section'>
              <h1>About Me</h1>
              <p className='section-content'>
                As a Purposeful Software Engineer with two years of experience at LTIMindtree, and currently pursuing a master’s degree 
                in software engineering, I bring a strong educational foundation and practical expertise to the table. 
                Armed with a bachelor’s degree in computer science, I possess a comprehensive skillset that includes expertise in various 
                web technologies. Proficient in developing and enhancing web applications, I excel in debugging, troubleshooting, and 
                optimizing performance. Now, I am seeking an internship as a Software Developer to further leverage my skills and 
                contribute to innovative projects in a dynamic team environment while continuing my academic journey in 
                software engineering.</p>
            </div>
            <div id='skills' className='section'>
              <h1>Skills</h1>
                <ul className='section-content'>
                {skills.map((skill) => (
                    <li><strong>{skill.name}</strong> : <SkillLevel skilllevel={skill.level}></SkillLevel></li>
                ))}
                </ul>
            </div>
            <div id='education' className='section'>
              <h1>Education</h1>
              <p className='section-content'>
                Currently pursuing my Master of Engineering in Software Engineering from University of Maryland, College Park.
                My Bachelors degree was in Computer Engineering from Devi Ahilya University, Indore, India.
              </p>
            </div>
            <div id='experience' className='section'>
              <h1>Experience</h1>

              {experience.map((experience) => (
                <ul className='section-content'>
                  <li>
                    <h3>{experience.companyName}</h3>
                    <h4><i>{experience.position}</i></h4>
                    <p>{experience.jobDescription}</p>
                  </li>
                </ul>
              ))}

            </div>
            <div id='projects' className='section'>
              <h1>Projects</h1>

              {projects.map((project) => (
                <ul className='section-content'>
                  <li>
                    <a href={project.url} target='_blank' rel="noreferrer">{project.name}</a>
                    <p className='section-content'>
                      {project.description}
                    </p>
                  </li>
                </ul>
              ))}

            </div>
        </div>
      </div>
    );
  }
  
  export default Content;