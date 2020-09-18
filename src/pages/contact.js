import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";

const Container = styled.div`
  margin: 2rem auto;
  max-width: 800px;
`;

const Contact = () => (
  <Layout>
    <Container>
      <h2>Contáctame</h2>
      <p>
        Puedes ponerte en contacto conmigo escribiendo a mi mail
        <a href="mailto:brodriguezaybar@gmail.com">
          brodriguezaybar@gmail.com
        </a>{" "}
        . Estaré feliz de responderte, tan pronto como me sea posible.
      </p>
    </Container>
  </Layout>
);

export default Contact;
