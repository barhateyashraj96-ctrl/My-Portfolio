import { useMemo, useState } from 'react'
import { projectFilters, projects } from '../data/portfolioData'

function Projects() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((project) => project.category === filter)
  }, [filter])

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-label">Projects</p>
          <h3>Beginner to intermediate projects I&apos;ve built or am building.</h3>
        </div>

        <div className="project-filter d-flex flex-wrap justify-content-center gap-2 mb-4">
          {projectFilters.map((option) => (
            <button
              key={option}
              type="button"
              className={`filter-btn ${filter === option ? 'active' : ''}`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.title} className="col-lg-6">
              <article className="project-card h-100">
                <div className="project-head">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h4>{project.title}</h4>
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                </div>
                <p>{project.description}</p>

                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item} className="stack-item">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-learn">
                  <strong>What I learned:</strong>
                  <span>{project.learn}</span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
