import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { colors } from "../theme";

const navStyles = css`
  margin: 0;
`;

const NavLink = styled(Link)`
  color: #222;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  margin: 0 0.5rem 0 0;
  padding: 0 0.25rem;
  text-decoration: none;

  &.current-page {
    color: ${colors.blue};
  }

  &:hover {
    color: ${colors.blue};
    background-color: transparent;
  }
`;

const mainHeader = css`
  padding-top: 30px;
`;

const innerContainer = css`
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const title = css`
  font-size: 20px;
  font-weight: normal;
  &:hover {
    background-color: transparent;
  }
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  &:hover {
    background-color: transparent;
    cursor: pointer;
  }
`;

const Header = () => (
  <header css={mainHeader}>
    <div to="/" css={innerContainer}>
      <HomeLink to="/">
        <h2 css={title}>Bryam Rodriguez</h2>
      </HomeLink>
      <nav css={navStyles}>
        <NavLink to="/blog" activeClassName="current-page">
          Blog
        </NavLink>
        <NavLink to="/contact" activeClassName="current-page">
          Contacto
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Header;
