// app/components/SkillsSection.tsx
const SkillCategory = ({ category, skills }: { category: string; skills: string[] }) => (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
  
  const SkillsSection = () => {
    const skillCategories = [
      {
        category: "Programming Languages",
        skills: ["Python", "JavaScript", "TypeScript", "C++", "Java"]
      },
      {
        category: "Web Development",
        skills: ["Angular", ".NET MVC", "Flask", "HTML/CSS", "jQuery", "Node.js", "React", "Redux", "REST APIs", "Tailwind CSS", "Vite", "Web API"]
      },
      {
        category: "Cloud Technologies",
        skills: ["AWS EC2", "AWS EMR", "AWS S3", "Docker"]
      },
      {
        category: "Databases",
        skills: ["MongoDB", "MySQL", "MSSQL", "SQLAlchemy"]
      },
      {
        category: "Data Processing",
        skills: ["ArcGIS", "Esri Experience Builder","GeoPandas", "Geopy", "Folium", "OpenStreetMap", "Pandas", "PySpark"]
      },
      {
        category: "Tools",
        skills: ["Git", "Github", "JIRA", "Postman", "Slack", "Visual Studio Code"]
      }
    ];
  
    return (
      <section id="skills" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category.category} skills={category.skills} />
          ))}
        </div>
      </section>
    );
  };
  
  export default SkillsSection;
  