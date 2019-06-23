import React from "react";
import { Global, css } from "@emotion/core";
import Helmet from "react-helmet";
import Header from "./Header";
import useSiteMetadata from "../hooks/use-sitemetadata";

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
    color: #555;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, "Open Sans", sans-serif;
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

    + * {
      margin-top: 0.5rem;
    }
  }

  strong {
    color: #222;
  }

  li {
    margin-top: 0.25rem;
  }
`;

const mainStyles = css`
  margin: 4rem auto;
  max-width: 90vw;
  width: 800px;
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
    </>
  );
};

export default Layout;
