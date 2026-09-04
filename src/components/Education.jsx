import { coursework } from '../data/portfolioData'

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-label">Education</p>
          <h3>BCA 1st year journey and relevant learning.</h3>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <div className="info-card h-100">
              <h4>Bachelor of Computer Applications (BCA)</h4>
              <p>
                <strong>Year:</strong> 1st Year
              </p>
              <p>
                <strong>College:</strong> University Of Mysore &amp; Technology
              </p>
              <p>
                <strong>City:</strong> Maharashtra Sailu
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="info-card h-100 accent-card">
              <h4>Relevant Coursework</h4>
              <ul className="feature-list list-unstyled">
                {coursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
