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

function Projects(){
    return (
        <div id='projects' className='section'>
              <h1>Projects</h1>
              <ul className='section-content'>
              {projects.map((project) => (
                  <li>
                    <a href={project.url} target='_blank' rel="noreferrer">{project.name}</a>
                    <p className='section-content'>
                      {project.description}
                    </p>
                  </li>
              ))}
              </ul>
            </div>
    );
}

export default Projects;