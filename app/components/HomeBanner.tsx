import Image from "next/image"
import Link from "next/link"
import React from "react"

const HomeBanner = () => {
  return (
    <section className="home-banner | section-padding">
      <div className="container">
        <div className="banner-copy">
          <p className="small-intro">INGREDIENTS FOR SUCCESS</p>
          <h1>Grow your practice with Realtime Business Intelligence</h1>
          <p className="copy-statement">LawAnalytix is a business performance measurement tool that shows the current status and future success of your Law Firm. It shows the leading revenue generators, bill collection percentages, resources utilization among other performance indicators at a click of a button.</p>
          <div className="banner-cta">
            <Link href="">Get started</Link>
            <Link href="">Book a demo</Link>
          </div>
        </div>
        <div className="banner-image">
          <Image src="/law-analytics-banner.webp" alt="law analytics" fill style={{ left: "10%" }} />
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
