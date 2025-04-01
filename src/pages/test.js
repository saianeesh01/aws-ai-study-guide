import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`

export default function Test({ data }) {
  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}
