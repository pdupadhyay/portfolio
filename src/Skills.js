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
  
function Skills(){
  return (
      <div id='skills' className='section'>
          <h1>Skills</h1>
          <ul className='section-content'>
          {skills.map((skill) => (
              <li id={skill.level}><strong>{skill.name}</strong> : <SkillLevel skilllevel={skill.level}></SkillLevel></li>
          ))}
          </ul>
      </div>
  )
}

export default Skills;