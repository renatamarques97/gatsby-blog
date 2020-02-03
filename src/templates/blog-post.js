import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Link to="/blog">Go back</Link>
      <hr />
      <h1>{ post.frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <h4>Posted by { post.frontmatter.author } on { post.frontmatter.date }</h4>
      <hr />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`