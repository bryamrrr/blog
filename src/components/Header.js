import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { colors } from "../theme";

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  font-weight: bold;

  &.current-page {
    color: ${colors.blue};
  }

  &:hover {
    color: ${colors.blue};
    background-color: transparent;
  }
`;

const mainHeader = css`
  background-color: white;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  &:before {
    content: "";
    top: calc(100% - 1px);
    background-color: ${colors.blue};
    display: block;
    position: absolute;
    right: 0px;
    height: 1px;
    width: 100%;
    z-index: 1;
  }
`;

const Header = () => (
  <header css={mainHeader}>
    <nav>
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/blog" activeClassName="current-page">
        Blog
      </NavLink>
    </nav>
  </header>
);

export default Header;
