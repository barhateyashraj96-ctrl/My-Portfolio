import { useEffect, useState } from 'react'
import { navItems } from '../data/portfolioData'

function Navbar() {
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) {
          setActiveLink(visibleEntry.target.id)
        }
      },
      { threshold: 0.45 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <span className="brand-mark">YB</span>
            Yashraj Barhate
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              {navItems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a className={`nav-link ${activeLink === item.id ? 'active' : ''}`} href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
