import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import AboutAndFeatures from "../components/AboutAndFeatures"
import ProgressTracker from "../components/ProgressTracker"
export { Head } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Hero />
    <AboutAndFeatures />
    <ProgressTracker />
  </Layout>
)

export default IndexPage
