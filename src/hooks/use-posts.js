import { graphql, useStaticQuery } from "gatsby";

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
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    description: post.frontmatter.description,
    author: post.frontmatter.author,
    image: post.frontmatter.image
  }));
};

export default usePosts;
