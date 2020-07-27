import React from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout";

const mainTagline = css`
  max-width: 600px;
`;

const Pages = () => {
  return (
    <Layout>
      <h2>Hola, soy Bryam Rodriguez.</h2>
      <p css={mainTagline}>
        Soy desarrollador de Software desde 2014, dedicandome sobre todo a
        tecnologías web. Disfruto escribiendo código de calidad, aprendiendo
        constantemente y enseñando.
      </p>
    </Layout>
  );
};

export default Pages;
