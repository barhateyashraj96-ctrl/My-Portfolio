import { learningFocus } from '../data/portfolioData'

function LearningJourney() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-label">Learning Journey</p>
          <h3>What I&apos;m focusing on next.</h3>
        </div>

        <div className="journey-list">
          {learningFocus.map((item, index) => (
            <div key={item} className="journey-item">
              <span className="journey-number">0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningJourney
