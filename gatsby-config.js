module.exports = {
  siteMetadata: {
    title: "AWS AI Study Guide",
    siteUrl: "https://saianeesh01.github.io/aws-ai-study-guide",
  },
  plugins: [
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
};
