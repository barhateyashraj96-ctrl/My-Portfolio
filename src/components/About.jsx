function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-label">About Me</p>
          <h3>Learning, building, and growing as a web developer.</h3>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="info-card">
              <p>
                I am a BCA 1st year student with a strong interest in web development and digital product creation.
                I enjoy understanding how websites work, how design impacts user experience, and how code turns ideas into usable experiences.
              </p>
              <p>
                Right now, I am focusing on frontend fundamentals and the basics of backend development so I can build projects that are both visually strong and functionally sound.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="info-card accent-card">
              <h4>Current Focus</h4>
              <ul className="feature-list list-unstyled">
                <li>HTML and semantic page structure</li>
                <li>CSS styling and responsive layouts</li>
                <li>Bootstrap for quick, clean UI design</li>
                <li>JavaScript for interactivity and logic</li>
                <li>React for building user interfaces</li>
                <li>Node.js and APIs for backend basics</li>
                <li>Git for version control and project workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
