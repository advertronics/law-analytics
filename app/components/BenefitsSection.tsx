"use client"

import Image from "next/image"
import React, { useState } from "react"
import ManualReporting from "./ManualReporting"
import Centralized from "./Centralized"
import Trends from "./Trends"

const BenefitsSection = () => {
  const [clickedButtons, setClickedButtons] = useState({
    manual: true,
    central: false,
    trends: false
  })

  const [count, setCount] = useState(0)
  const handleClickedButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    let clickedId = event.currentTarget.id
    setClickedButtons(prev => {
      let key: keyof typeof prev
      for (key in prev) {
        prev[key] = false
        if (key == clickedId) {
          prev[key] = true
        }
      }

      return prev
    })
    setCount(prev => prev + 1)
  }

  return (
    <>
      <section className="benefits | section-padding">
        <div className="container">
          <div className="how-it-works">
            <div className="system-illustration">
              <div>
                <Image src="/system-illustration.svg" alt="law analytics" fill />
              </div>
            </div>
            <div className="system-explanation">
              <h2 className="explanation-heading">Derive meaningful Business Insights from All your data sources</h2>
              <p className="explanation-paragraph">LawAnalytix pulls realtime data from your organization practice management software including WakiliCMS, EliteLaw, Clio, Rocket Matter, PracticePanther, Bill4Time, meruscase and presents it in an easy-to-understand format that will help you see the true picture of your law firm and make fast fact-based decisions </p>
              <div className="summary-statement">AUTOMATED DATA ANALYSIS</div>
            </div>
          </div>
          <div className="actual-benefits">
            <div className="actual-benefits-intro">
              <h2>Benefits of LawAnalytix</h2>
              <p className="benefits-intro-paragraph">Experience tangible financial and operations Benefits of using LawAnalytix</p>
            </div>
            <div className="actual-benefits-body">
              <div className="tabs-navigation">
                <button id="manual" onClick={handleClickedButton} className={`${clickedButtons.manual && "active-benefit"}`}>
                  <Image src="/manual-icon.svg" alt="law analytics" width="40" height="40" />
                  Eliminate manual reporting
                </button>
                <button id="central" onClick={handleClickedButton} className={`${clickedButtons.central && "active-benefit"}`}>
                  <Image src="/central-icon.svg" alt="law analytics" width="40" height="40" />
                  Centralized information
                </button>
                <button id="trends" onClick={handleClickedButton} className={`${clickedButtons.trends && "active-benefit"}`}>
                  <Image src="/trends-icon.svg" alt="law analytics" width="40" height="40" />
                  Predict future trends
                </button>
              </div>
              {clickedButtons.manual && <ManualReporting />}
              {clickedButtons.central && <Centralized />}
              {clickedButtons.trends && <Trends />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BenefitsSection
