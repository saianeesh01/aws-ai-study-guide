// src/components/seo.js
import * as React from "react"

export function Head({ title, description = "" }) {
  const siteTitle = "AWS AI Study Guide"
  const siteDescription = description || "Interactive learning for AWS AI"
  const siteUrl = "https://saianeesh01.github.io/aws-ai-study-guide"
  const author = "Aneesh Mussim"

  return (
    <>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
    </>
  )
}
