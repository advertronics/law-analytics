import React from "react"

const Footer = () => {
  return (
    <footer className="section-padding">
      <div className="container">
        <div className="upper-footer">
          <div className="footer-card">
            <div className="subscribe">
              <h4>Subscribe to technology for lawyers news</h4>
              <form action="">
                <input type="email" placeholder="Your email" />
                <button type="button">
                  <img src="./paper-plane.svg" alt="law analytics" />
                  Subscribe
                </button>
              </form>
            </div>
            <div className="socials">
              <h4>Follow us</h4>
              <div className="social-icons">
                <div>
                  <a href="https://www.facebook.com/EnfiniteLTD" target="_blank">
                    <img src="./facebook.svg" alt="law analytics" />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/EnfiniteLegal" target="_blank">
                    <img src="./twitter.svg" alt="law analytics" />
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/enfinite_legaltech/" target="_blank">
                    <img src="./instagram.svg" alt="law analytics" />
                  </a>
                </div>
                <div>
                  <a href="https://www.youtube.com/@enfinitesolutions" target="_blank">
                    <img src="./youtube.svg" alt="law analytics" />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/company/enfinite-solutions-limited/" target="_blank">
                    <img src="./linkedin.svg" alt="law analytics" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-card">
            <div className="heading">
              <h4>ENFINITE SOLUTIONS LTD</h4>
            </div>
            <div className="card-content">
              <div>
                <img src="./envelope.svg" alt="law analytics" />
                <p>info@enfinitesolutions.com</p>
              </div>
              <div>
                <img src="./phone.svg" alt="law analytics" />
                <p>+254 (0) 20 - 2603710</p>
              </div>
              <div>
                <img src="./mobile.svg" alt="law analytics" />
                <p>+254 (0) - 700 343 971</p>
              </div>
              <div className="special-para">
                <img src="./law-analytics1.svg" alt="law analytics" />
                <p>
                  P.O. Box 21405 - 00100 <br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
          <div className="footer-card">
            <div className="heading">
              <h4>OTHER PRODUCTS</h4>
            </div>
            <div className="card-content">
              <a href="https://wakilicms.com/" target="_blank">
                WakiliCMS
              </a>
              <a href="https://www.elitelawke.com/" target="_blank">
                EliteLaw
              </a>

              <a href="https://elitesuiteke.com/elitelegal.php" target="_blank">
                EliteLegal
              </a>
              <a href="https://elitesuiteke.com/elitecontract.php" target="_blank">
                EliteContract
              </a>
              <a href="https://elitesuiteke.com/elitegrc.php" target="_blank">
                EliteGRC
              </a>
            </div>
          </div>
          <div className="footer-card">
            <div className="heading">
              <h4>SEE REVIEWS ON</h4>
            </div>
            <div className="card-content">
              <a href="https://www.getapp.com/legal-law-software/a/wakilicms/" target="_blank">
                <div className="review-logo">
                  <img src="./law-analytics2.svg" alt="law analytics" />
                </div>
              </a>
              <a href="https://www.capterra.com/p/185061/WakiliCMS/" target="_blank">
                <div className="review-logo">
                  <img src="./law-analytics3.svg" alt="law analytics" />
                </div>
              </a>
              <a href="https://www.trustpilot.com/review/wakilicms.com" target="_blank">
                <div className="review-logo">
                  <img src="./law-analytics4.svg" alt="law analytics" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <div className="container">
            <p>&copy;PRODUCT OF ENFINITE SOLUTIONS LTD</p>
            <a href="https://elitesuiteke.com/privacy-policy.php" target="_blank">
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
