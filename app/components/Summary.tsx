import React from "react"

const Summary = () => {
  return (
    <section className="summary | section-padding">
      <h2>Integrates with</h2>
      <div className="container">
        <div className="company-logos">
          <img src="./wakili-logo.svg" alt="law analytics" />
          <img src="./elite-law-logo.svg" alt="law analytics" />
          <img src="./rocket-matter-logo.svg" alt="law analytics" />
          <img src="./bill-4-time-logo.svg" alt="law analytics" />
          <img src="./clio-logo.svg" alt="law analytics" />
          <img src="./merus-case-logo.svg" alt="law analytics" />
          <img src="./practice-panther-logo.svg" alt="law analytics" />
        </div>
        <div className="get-started-cta">
          <div className="get-started-statement">
            <h3>Get started today</h3>
            <p>Start getting profitable insights from your data without a hustle</p>
          </div>
          <div className="get-started-btns">
            <a href="">Get started</a>
            <a href="">Book a demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Summary
