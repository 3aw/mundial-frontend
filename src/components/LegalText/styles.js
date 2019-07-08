import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  display: flex;
`;
export const Text = styled.p`
  color: #000;
  font-weight: 300;
  font-size: 13px;
  padding: 10px;
`;

export const Legal = ({ children }) => (
  <Container>
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  </Container>
);
