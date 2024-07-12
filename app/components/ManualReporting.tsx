import Image from "next/image"
import React from "react"

const ManualReporting = () => {
  return (
    <div className="benefit-display-article">
      <h3>Eliminate manual reporting</h3>
      <div className="benefit-detail-body">
        <div className="benefit-large-icon">
          <Image src="./manual-large-icon.svg" width="150" height="133" alt="law analytics" />
        </div>
        <p className="benefit-detail-paragraph">There is no longer need for manually downloading reports from your various data sources and then feeding them into another data analysis tool to get the true picture of business performance. LawAnalytix automatically gathers all data and does the analysis of the key indicators you wish to see. Getting valuable insight without making data reporting a full time job </p>
      </div>
    </div>
  )
}

export default ManualReporting
