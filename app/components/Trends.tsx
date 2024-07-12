import Image from "next/image"
import React from "react"

const Trends = () => {
  return (
    <div className="benefit-display-article">
      <h3>Predict future trends</h3>
      <div className="benefit-detail-body">
        <div className="benefit-large-icon">
          <Image src="./trends-large-icon.svg" width="150" height="153" alt="law analytics" />
        </div>
        <p className="benefit-detail-paragraph">Future trends can be predicted based on the company performance. With current company data and historical performance of the firm, prediction can be made. LawAnalytix accurately predicts what will happen and suggestions the best actions to be taken for maximum outcome. </p>
      </div>
    </div>
  )
}

export default Trends
