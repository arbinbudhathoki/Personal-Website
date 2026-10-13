import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming and query languages',
      note: 'Used in coursework, jobs, or projects',
      skills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Bash', 'PowerShell', 'Kotlin']
    },
    {
      title: 'Data analytics and visualization',
      note: 'Used in the Tableau project and data bootcamp',
      skills: ['Tableau', 'Excel', 'Power BI', 'Pandas', 'Data cleaning']
    },
    {
      title: 'Cloud and data engineering',
      note: 'Used in the healthcare ETL script',
      skills: ['Amazon S3', 'AWS Glue', 'PySpark']
    },
    {
      title: 'IT infrastructure and support',
      note: 'Used at Jabil, NKU broadcasts, and the student union',
      skills: ['Linux', 'Windows', 'Server assembly', 'Hardware troubleshooting', 'TCP/IP', 'DNS', 'DHCP', 'Active Directory', 'Audiovisual systems']
    },
    {
      title: 'Development tools',
      note: 'Used in the projects linked on this page',
      skills: ['Git', 'GitHub', 'Next.js', 'Supabase']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-intro">These are tools I have used. I am still learning broader cloud data platforms, so I am not listing services I have not used in a project.</p>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <p className="skill-note">{category.note}</p>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
