import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const About = () => (
  <Layout>
    <h1>About</h1>
    <p>This is my personal website.</p>
    <Link to="/">Go back to Home &rarr;</Link>
  </Layout>
)

export default About
