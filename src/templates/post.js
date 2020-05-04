import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Image from "gatsby-image";
import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        author
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.description}</p>
      <Image
        fluid={post.frontmatter.image.sharp.fluid}
        css={css`
          margin-bottom: 0.75rem;
          * {
            margin-top: 0;
          }
        `}
        alt={post.image_alt || ""}
      />
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
};

export default PostTemplate;
