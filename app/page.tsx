import Image from "next/image"
import styles from "./page.module.css"
import HomeBanner from "./components/HomeBanner"
import BenefitsSection from "./components/BenefitsSection"
import FeaturesSection from "./components/FeaturesSection"
import Summary from "./components/Summary"
import Footer from "./components/Footer"

const Home = () => {
  return (
    <>
      <HomeBanner />
      <BenefitsSection />
      <FeaturesSection />
      <Summary />
      <Footer />
    </>
  )
}

export default Home
