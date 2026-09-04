import { useState } from 'react'
import { profile } from '../data/portfolioData'

function Contact() {
  const [formData, setFormData] = useState({ email: '', name: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ email: '', name: '', message: '' })
  }

  const contactInfo = [
    { icon: '📍', title: 'OUR MAIN OFFICE', details: 'Maharashtra Sailu' },
    { icon: '📞', title: 'PHONE NUMBER', details: '+91 92260 94853' },
    { icon: '📠', title: 'FAX', details: '+91 XXXXX XXXXX' },
    { icon: '✉️', title: 'EMAIL', details: profile.email },
  ]

  const socialLinks = [
    { icon: 'f', url: '#', label: 'Facebook' },
    { icon: '𝕏', url: '#', label: 'Twitter' },
    { icon: '📷', url: '#', label: 'Instagram' },
    { icon: '💼', url: profile.linkedIn, label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Info Cards */}
        <div className="contact-info-grid">
          {contactInfo.map((info) => (
            <div key={info.title} className="contact-info-card">
              <div className="info-icon">{info.icon}</div>
              <h4>{info.title}</h4>
              <p>{info.details}</p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-wrapper">
          <div className="contact-form-container">
            <div className="form-column">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter a valid email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  SUBMIT
                </button>
                {submitted && <p className="success-msg">✓ Message sent!</p>}
              </form>
            </div>

            <div className="content-column">
              <h2 className="get-in-touch-heading">Get in touch</h2>
              <p className="contact-description">
                We can ensure reliability, low cost fares and most important, with safety and comfort in mind.
              </p>
              <p className="contact-description-secondary">
                Reach out to connect, collaborate, or discuss opportunities. I&apos;m always open to learning and working on exciting projects.
              </p>

              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

