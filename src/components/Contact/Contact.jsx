import React, { useState } from 'react'
import './Contact.css'

const EMAIL = 'budhathokiarbin4@gmail.com'

const Contact = () => {
  const [name, setName] = useState('')
  const [question, setQuestion] = useState('')
  const [status, setStatus] = useState('')

  const contactLinks = [
    {
      label: 'Email',
      text: EMAIL,
      href: `mailto:${EMAIL}`
    },
    {
      label: 'LinkedIn',
      text: 'linkedin.com/in/budhathokiarbin',
      href: 'https://www.linkedin.com/in/budhathokiarbin/',
      external: true
    },
    {
      label: 'GitHub',
      text: 'github.com/arbinbudhathoki',
      href: 'https://github.com/arbinbudhathoki',
      external: true
    },
    {
      label: 'Resume',
      text: 'Download resume (PDF)',
      href: '/Arbin_Budhathoki_Resume.pdf',
      download: true
    }
  ]

  const sendQuestion = (event) => {
    event.preventDefault()
    const trimmedQuestion = question.trim()
    if (!trimmedQuestion) {
      return
    }

    const trimmedName = name.trim()
    const subject = encodeURIComponent('Question from your website')
    const body = encodeURIComponent(
      `${trimmedName ? `Name: ${trimmedName}\n\n` : ''}Question:\n${trimmedQuestion}`
    )

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setStatus('Your email app should open with this message addressed to me. If it does not, email budhathokiarbin4@gmail.com directly.')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always interested in connecting with professionals, discussing technical projects, and exploring opportunities in data engineering, software development, and IT infrastructure. If you think my background could be a good fit for your team, feel free to reach out.
          </p>

          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact-link"
                download={link.download ? 'Arbin_Budhathoki_Resume.pdf' : undefined}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                <span className="contact-label">{link.label}</span>
                <span>{link.text}</span>
              </a>
            ))}
          </div>

          <form className="question-box" onSubmit={sendQuestion}>
            <h3>Have a question?</h3>
            <p>Write it here and it will open an email to me with your message ready to send.</p>
            <label htmlFor="question-name">Name</label>
            <input
              id="question-name"
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
            />
            <label htmlFor="question-text">Question</label>
            <textarea
              id="question-text"
              name="question"
              required
              rows="5"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="What would you like to ask?"
            />
            <button type="submit" className="btn btn-primary">Email my question</button>
            {status && <p className="question-status" role="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
