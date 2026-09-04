import { useEffect, useState } from 'react'
import heroImage from '../assets/yash.png'
import { profile, skills, stats } from '../data/portfolioData'

function Hero() {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    const phrases = ['Frontend Developer', 'JavaScript Learner', 'Node.js Explorer', 'Problem Solver']
    let phraseIndex = 0
    let charIndex = 0

    const typeLoop = () => {
      const currentPhrase = phrases[phraseIndex]
      setTypedText(currentPhrase.slice(0, charIndex + 1))
      charIndex += 1

      if (charIndex > currentPhrase.length) {
        charIndex = 0
        phraseIndex = (phraseIndex + 1) % phrases.length
        setTimeout(typeLoop, 900)
        return
      }

      setTimeout(typeLoop, 120)
    }

    typeLoop()
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <p className="eyebrow">{profile.shortTitle}</p>
            <h1>
              Hi, I&apos;m <span>{profile.name}</span>
            </h1>
            <h2 className="hero-subtitle">{profile.title}</h2>
            <div className="typing-line" aria-live="polite">
              <span className="typing-text">{typedText}</span>
              <span className="cursor" aria-hidden="true">|</span>
            </div>
            <p className="hero-copy">
              I&apos;m learning frontend fundamentals and building my base in HTML, CSS, Bootstrap,
              JavaScript, React, Node.js, and Git while creating practical projects that help me grow every week.
            </p>

            <div className="hero-actions d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary btn-lg">
                See My Work
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg">
                Let&apos;s Connect
              </a>
            </div>

            <div className="tech-tags d-flex flex-wrap gap-2">
              {skills.slice(0, 6).map((skill) => (
                <span key={skill} className="tech-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="profile-card">
              <img
                src={heroImage}
                alt={profile.name}
                className="profile-photo"
              />
              <ul className="profile-list list-unstyled">
                <li>
                  <strong>College:</strong> {profile.college}
                </li>
                <li>
                  <strong>City:</strong> {profile.city}
                </li>
                <li>
                  <strong>Focus:</strong> {profile.focus}
                </li>
                <li>
                  <strong>Interests:</strong> {profile.interests}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
