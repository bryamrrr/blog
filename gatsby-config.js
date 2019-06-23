module.exports = {
  siteMetadata: {
    title: "Blog de Bryam Rodriguez",
    description: ""
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
