import Image from "next/image"
import React from "react"

const Centralized = () => {
  return (
    <div className="benefit-display-article">
      <h3>Centralized information</h3>
      <div className="benefit-detail-body">
        <div className="benefit-large-icon">
          <Image src="./central-large-icon.svg" width="150" height="164" alt="law analytics" />
        </div>
        <p className="benefit-detail-paragraph">LawAnalytix gives you all the analysis of the collected data in a single dashboard. No more forgotten records. LawAnalytics uses high performing APIs to pull information from all your sources in realtime, builds a true image of your organisation and presents in a single dashboard. You can customize the dashboard to report only on the indicators that are of interest to your firm. </p>
      </div>
    </div>
  )
}

export default Centralized
