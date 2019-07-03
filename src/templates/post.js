import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const PostTemplate = () => {
  return (
    <Layout>
      <h1>Test</h1>
      <div dangerouslySetInnerHTML={{ __html: "" }} />
    </Layout>
  );
};

export default PostTemplate;
