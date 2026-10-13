import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLinkClick = (event, targetId) => {
    event.preventDefault()
    closeMenu()
    const target = document.querySelector(targetId)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const links = [
    ['Home', '#hero'],
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Experience', '#experience'],
    ['Education', '#education'],
    ['Contact', '#contact']
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Primary">
      <div className="container">
        <a className="nav-brand" href="#hero" onClick={(event) => handleLinkClick(event, '#hero')}>Arbin Budhathoki</a>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {links.map(([label, target]) => (
            <li key={target}>
              <a href={target} onClick={(event) => handleLinkClick(event, target)}>{label}</a>
            </li>
          ))}
          <li className="nav-resume-item">
            <a className="nav-resume" href="/Arbin_Budhathoki_Resume.pdf" download="Arbin_Budhathoki_Resume.pdf">
              Download Resume
            </a>
          </li>
        </ul>
        <button
          className="nav-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
