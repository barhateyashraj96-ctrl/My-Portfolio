import { skills } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-label">Skills</p>
          <h3>Technologies I&apos;m learning and using.</h3>
        </div>

        <div className="row g-3">
          {skills.map((skill) => (
            <div key={skill} className="col-sm-6 col-lg-3">
              <div className="skill-card text-center">
                <span>{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
