import React from "react";
import { css } from "@emotion/core";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { colors } from "../theme";

const PostPreview = ({ post }) => {
  const url = `blog/${post.slug}`;

  return (
    <article
      css={css`
        border-bottom: 1px solid rgba(214, 209, 230, 0.5);
        padding-bottom: 1rem;
      `}
    >
      <Link
        to={url}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100%;
        `}
      >
        {post.image && (
          <Image
            fluid={post.image.sharp.fluid}
            css={css`
              height: 150px;
              margin-bottom: 0.75rem;
              * {
                margin-top: 0;
              }
            `}
            alt={post.image_alt || ""}
          />
        )}
      </Link>
      <h3
        css={css`
          margin-top: -1.25rem;
        `}
      >
        <Link
          css={css`
            color: #333;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          `}
          to={url}
        >
          {post.title}
        </Link>
      </h3>
      <p
        css={css`
          margin-bottom: 0.25rem;
          margin-top: 0.75rem;
          color: ${colors.lightGray};
        `}
      >
        {post.excerpt}
      </p>
      <Link to={url}>Lee este post &rarr;</Link>
    </article>
  );
};

export default PostPreview;
