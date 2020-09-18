import React from "react";
import { Global, css } from "@emotion/core";
import Helmet from "react-helmet";
import Header from "./header";
import useSiteMetadata from "../hooks/use-sitemetadata";
import { colors } from "../theme";

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  * + * {
    margin-top: 1rem;
  }

  html,
  body {
    margin: 0;
    background-color: rgb(250, 250, 250);
    color: #555;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    line-height: 1.4;
  }

  /* Remove margin for the main div that Gatsby mounts into */
  > div {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #333;
    line-height: 1.1;
    font-family: "Montserrat", sans-serif;

    + * {
      margin-top: 0.5rem;
    }
  }

  h1 {
    font-size: 1.7rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  strong {
    color: #222;
  }

  li {
    margin-top: 0.25rem;
  }

  a {
    color: ${colors.blue};
    padding: 0 0.125rem;
    transition: color linear 100ms;
    &:hover {
      background-color: ${colors.blue};
      border-radius: 0.25rem;
      color: white;
    }
  }
`;

const mainStyles = css`
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global styles={globalStyles} />
      <Helmet>
        <html lang="es" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main css={mainStyles}>{children}</main>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      ></link>
    </>
  );
};

export default Layout;
