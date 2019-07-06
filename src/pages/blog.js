import React from "react";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";
import usePosts from "../hooks/use-posts";

const About = () => {
  const posts = usePosts();
  return (
    <Layout>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default About;
