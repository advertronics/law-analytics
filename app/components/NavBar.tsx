import Image from "next/image"
import Link from "next/link"
import React from "react"

const NavBar = () => {
  return (
    <header className="law-header">
      <div className="container">
        <div className="logo">
          <Image src="/law-analytics-logo.svg" alt="law analytics" width="81" height="65" priority />
        </div>
        <div className="navigations">
          <nav className="nav-links">
            <ul>
              <Link href="" className="active-nav">
                <li>Home</li>
              </Link>
              <Link href="">
                <li>About us</li>
              </Link>
              <Link href="">
                <li>Pricing</li>
              </Link>
              <Link href="">
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
          <div className="get-started">
            <Link href="">Get started</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
