import React from "react";
import { css } from "@emotion/core";
import Image from "gatsby-image";
import { Link } from "gatsby";

const PostPreview = ({ post }) => (
  <article>
    <h3>
      <Link
        to={post.slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100%;
        `}
      >
        {post.image && (
          <Image
            fluid={post.image.sharp.fluid}
            css={css`
              * {
                margin-top: 0;
              }
            `}
            alt={post.image_alt || ""}
          />
        )}
        {post.title}
      </Link>
    </h3>
    <Link to={post.slug}>{post.title}</Link>
    <p>{post.excerpt}</p>
    <Link to={post.slug}>lee este post &rarr;</Link>
  </article>
);

export default PostPreview;
