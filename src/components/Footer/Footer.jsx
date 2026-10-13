import React from 'react'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-name">Arbin Budhathoki</p>
        <p className="footer-role">Computer Science Graduate | IT Infrastructure | Data Engineering</p>
        <div className="footer-links">
          <a href="https://github.com/arbinbudhathoki" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/budhathokiarbin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:budhathokiarbin4@gmail.com">Email</a>
        </div>
        <p>&copy; {year} Arbin Budhathoki. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
