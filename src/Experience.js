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

function Experience() {
    return (
        <div id='experience' className='section'>
              <h1>Experience</h1>
              <ul className='section-content'>
              {experience.map((experience) => (
                  <li id={experience.companyName}>
                    <h3>{experience.companyName}</h3>
                    <h4><i>{experience.position}</i></h4>
                    <p>{experience.jobDescription}</p>
                  </li>
              ))}
              </ul>
            </div>
    )
}

export default Experience;