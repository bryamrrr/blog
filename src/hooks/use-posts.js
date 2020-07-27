import { graphql, useStaticQuery } from "gatsby";

// image {
//   sharp: childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid_withWebp
//     }
//   }
// }
const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            author
            description
            slug
            title
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    description: post.frontmatter.description,
    author: post.frontmatter.author,
    image: post.frontmatter.image,
  }));
};

export default usePosts;
