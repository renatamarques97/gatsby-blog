import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import { Link } from 'gatsby'

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <h3>Latest Posts</h3>
    <hr />
    { data.allMarkdownRemark.edges.map(post => (
      <div key={ post.node.id }>
        <h3>{ post.node.frontmatter.title }</h3>
        <small>Posted by { post.node.frontmatter.author } on { post.node.frontmatter.date }</small>
        <br />
        <small><Link to={ post.node.frontmatter.path }>Read More</Link></small>
        <br />
        <hr />
      </div>
    )) }
    
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`


export default Blog;
