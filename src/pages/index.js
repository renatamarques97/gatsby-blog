import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <h3>Blog Renata</h3>
    <p>Welcome to my blog, I developed this website using Gatsby and GraphQL</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
