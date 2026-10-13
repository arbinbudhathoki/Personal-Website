import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Server Assembler',
      organization: 'Jabil',
      period: 'May 2026 – Present',
      items: [
        'Assemble enterprise server hardware from engineering work instructions.',
        'Install CPUs, memory, storage drives, power supplies, and other server components.',
        'Run functional tests and check that a system is ready before it leaves the line.',
        'Find hardware faults and replace defective parts.',
        'Follow ESD, quality, and safety procedures in a high-volume manufacturing environment.'
      ]
    },
    {
      title: 'IT Infrastructure and Operations, ESPN Production Crew',
      organization: 'Northern Kentucky University',
      period: 'Aug 2024 – Dec 2025',
      items: [
        'Provided on-site technical support for live sports broadcasts, including cameras, audiovisual systems, and production equipment.',
        'Troubleshot hardware, software, and basic network connectivity during live events.',
        'Helped set up, configure, and tear down broadcast equipment, mobile devices, and Windows systems.',
        'Worked with production staff so technical problems were clear and events could continue.'
      ]
    },
    {
      title: 'Teaching Assistant, Introduction to Linux',
      organization: 'Northern Kentucky University',
      period: 'Aug 2024 – May 2025',
      items: [
        'Led a lab session of 25 students on Linux file permissions and access control.',
        'Helped prepare course material and ran lab and study sessions.',
        'Assisted with grading and tracking student work.'
      ]
    },
    {
      title: 'Student Union Operations Assistant',
      organization: 'Northern Kentucky University',
      period: 'Jun 2023 – Dec 2025',
      items: [
        'Supported Windows workstations, audiovisual systems, printers, and network-connected devices.',
        'Kept support records in TeamDynamix and GoTo Resolve.',
        'Helped faculty, staff, and students with technical issues.'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-content">
          {experiences.map((exp) => (
            <article key={exp.title} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-organization">{exp.organization}</p>
                <p className="experience-period">{exp.period}</p>
              </div>
              <ul className="experience-list">
                {exp.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
