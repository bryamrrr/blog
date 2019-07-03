import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const PostPreview = ({ post }) => (
  <article>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <Link to={post.slug}>lee este post &rarr;</Link>
  </article>
);

export default PostPreview;