module.exports = {
  pathPrefix: "/aws-ai-study-guide", // GitHub repo name
  siteMetadata: {
    title: "AWS AI Study Guide",
    description: "Interactive learning for AWS AI",
    author: "Aneesh Mussim",
    siteUrl: "https://saianeesh01.github.io/aws-ai-study-guide",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
