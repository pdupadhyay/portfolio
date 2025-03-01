const ExperienceItem = ({ title, company, date, description }: { title: string; company: string; date: string; description: string[] }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{company} | {date}</p>
    <ul className="list-disc py-2 px-6">
      {description.map((desc, index)=> (
        <li key={index} className="mb-1">{desc}</li>
      ))}
    </ul>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <ExperienceItem
          title="Software Engineer"
          company="University of Maryland"
          date="Oct 2023 - Present"
          description={[
            "Spearheaded innovative projects focusing on urban safety and traffic analysis, leveraging advanced geospatial technologies and web development frameworks.",
            "Engineered an interactive mapping solution that significantly improved the identification and analysis of high-risk pedestrian zones.",
            "Revolutionized large-scale data processing workflows using cloud computing technologies, resulting in substantial efficiency gains.",
            "Designed and implemented a comprehensive web application for in-depth analysis of vehicular incidents, enhancing data accessibility and visualization for stakeholders.",
            "Streamlined development operations by implementing robust CI/CD practices, ensuring rapid and reliable software deployments.",
            "Pioneered a novel approach to data management, dramatically reducing redundancy and enhancing user experience through persistent session capabilities.",
            "Demonstrated exceptional problem-solving skills by optimizing complex data visualization techniques and resolving intricate technical challenges."
          ]}
        />
        <ExperienceItem
          title="Software Engineer"
          company="LTIMindtree"
          date="Aug 2021 - Jul 2023"
          description={[
            "Orchestrated major enhancements to a multinational pricing tool, significantly improving database efficiency and streamlining data management processes.",
            "Served as a crucial liaison between various technical teams, fostering improved collaboration and driving substantial performance improvements across the application.",
            "Played a key role in optimizing the software development lifecycle, resulting in markedly reduced bug occurrences and accelerated release schedules.",
            "Took a leading role in knowledge dissemination, mentoring new team members and conducting comprehensive training sessions on diverse technologies and methodologies."
          ]}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
