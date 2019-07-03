module.exports = {
  siteMetadata: {
    title: "Bryam Rodriguez | Software developer",
    description:
      "Soy desarrollador de Software con más de 5 años de experiencia trabajando con lenguajes como JavaScript, principalmente en el lado del frontend. Ingeniero de sistemas de profesión, lifelong learner, amante de la tecnología y ávido lector."
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts"
      }
    }
  ]
};
