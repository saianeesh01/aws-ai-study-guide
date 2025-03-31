import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export function Head({ title, description }) {
  const { site } = useStaticQuery(graphql`
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
  `)

  const meta = site.siteMetadata
  const metaDescription = description || meta.description
  const defaultTitle = meta.title

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.siteUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={meta.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  )
}
