import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

const PostContainer = styled.div`
  margin: 4rem auto;
  max-width: 740px;
`;

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <PostContainer>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.description}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </PostContainer>
    </Layout>
  );
};

export default PostTemplate;
