import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const target = document.querySelector(sectionId)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-image-container">
            <img
              src="/profile.jpg?v=2"
              alt="Arbin Budhathoki"
              className="hero-image"
              width="600"
              height="800"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hero-content">
            <p className="hero-location">Highland Heights, Kentucky</p>
            <h1 className="hero-name">Arbin Budhathoki</h1>
            <p className="hero-role">Computer Science Graduate | IT Infrastructure | Data Engineering</p>
            <p className="hero-subheadline">
              I'm a Computer Science graduate from Northern Kentucky University with hands-on experience in IT infrastructure, technical troubleshooting, hardware support, and software development. I'm building my expertise in SQL, Python, cloud technologies, and data engineering while continuing to develop practical technical projects.
            </p>
            <p className="hero-subheadline">
              I'm passionate about solving technical problems, learning new technologies, and building reliable solutions that connect software, infrastructure, and data.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('#projects') }}>
                View My Projects
              </a>
              <a className="btn btn-secondary" href="/Arbin_Budhathoki_Resume.pdf" download="Arbin_Budhathoki_Resume.pdf">
                Download Resume
              </a>
            </div>
            <div className="hero-links">
              <a href="https://github.com/arbinbudhathoki" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/budhathokiarbin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:budhathokiarbin4@gmail.com">Email Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
