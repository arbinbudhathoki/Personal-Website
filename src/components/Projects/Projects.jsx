import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Healthcare vitals ETL',
      description: 'A PySpark job for AWS Glue that prepares patient monitoring files for reporting.',
      problem: 'Vital-sign, patient, and device files were stored as separate raw CSV files and were not ready to analyze.',
      contribution: 'I wrote the Glue script that removes duplicate readings, fills missing heart-rate and oxygen values, flags abnormal vitals, joins the three files, and writes cleaned Parquet back to Amazon S3.',
      technologies: ['Python', 'PySpark', 'AWS Glue', 'Amazon S3'],
      image: null,
      imageAlt: '',
      links: [
        {
          label: 'View script on GitHub',
          href: 'https://github.com/arbinbudhathoki/2026-Soccer-WorldCup-/blob/main/healthcare-etl-job.py'
        }
      ]
    },
    {
      title: 'Airbnb pricing dashboard',
      description: 'A Tableau dashboard for exploring how Airbnb price relates to neighborhood and property type.',
      problem: 'Listing data needed to be cleaned before pricing and property-type patterns were easy to see.',
      contribution: 'I cleaned the data in SQL and Excel, then built the public Tableau dashboard. The dashboard shows that price varies by neighborhood and property type, and that entire homes tend to be priced higher than private rooms.',
      technologies: ['SQL', 'Excel', 'Tableau'],
      image: '/projects/airbnb.jpg',
      imageAlt: 'Tableau dashboard of Airbnb listing prices',
      links: [
        {
          label: 'View dashboard',
          href: 'https://public.tableau.com/app/profile/arbin.budhathoki/viz/AirBnBFullProject_17667062010280/Dashboard1?publish=yes'
        },
        {
          label: 'GitHub',
          href: 'https://github.com/arbinbudhathoki/Airbnb-data-analysis-tableau'
        }
      ]
    },
    {
      title: 'World Cup web application',
      description: 'A Next.js site for World Cup history, fixtures, and match predictions.',
      problem: 'Match history, fixtures, and fan predictions were spread across separate pages and sources.',
      contribution: 'I built the application with Next.js and a Supabase-ready prediction and leaderboard layout. A public live demo is not deployed yet.',
      technologies: ['Next.js', 'React', 'Supabase'],
      image: '/projects/world-cup.jpg',
      imageAlt: 'Screenshot of the World Cup web application',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/arbinbudhathoki/2026-Soccer-WorldCup-'
        }
      ]
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-intro">Three projects with a public repository or a live dashboard.</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              {project.image && (
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-description"><strong>Problem. </strong>{project.problem}</p>
              <p className="project-description"><strong>What I did. </strong>{project.contribution}</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
