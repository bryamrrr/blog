import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";
import usePosts from "../hooks/use-posts";
import profile from "../../images/profile.png";
import { colors } from "../theme";

const TopBanner = styled.div`
  background-color: ${colors.headerBlue};
  color: white;
  padding: 2.5rem 0 1rem;
  > div {
    display: flex;
    max-width: 860px;
    margin: 0 auto;
  }
`;

const Avatar = styled.figure`
  margin: 0;
  width: 200px;
  img {
    width: 100%;
  }
`;

const TaglineWrapper = styled.div`
  padding-left: 30px;
  max-width: 650px;
`;

const tagline = css`
  font-size: 1.2rem;
  max-width: 575px;
  margin-bottom: 4rem;
`;

const name = css`
  color: white;
  font-size: 1.3rem;
`;

const postsContainerStyles = css`
  background-color: white;
  border-radius: 5px;
  margin: -1rem auto 0;
  padding: 30px;
  max-width: 860px;
  width: 100%;
`;

const Pages = () => {
  const posts = usePosts();
  return (
    <Layout>
      <TopBanner>
        <div>
          <TaglineWrapper>
            <h2 css={name}>Hola, soy Bryam Rodriguez.</h2>
            <p css={tagline}>
              Soy desarrollador de Software desde 2014. Disfruto escribiendo
              código de calidad, en especial para la web.
            </p>
          </TaglineWrapper>
          <Avatar>
            <img src={profile} alt="Bryam Rodriguez" />
          </Avatar>
        </div>
      </TopBanner>
      <div css={postsContainerStyles}>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default Pages;
