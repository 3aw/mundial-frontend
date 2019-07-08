import React, { Component } from "react";
import { Container, Wrapper, Text, Strong, Image } from "./styles";

export default class Recipes extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Text>
            Nova <Strong>Receita</Strong>
          </Text>
          <Image
            src="https://www.supermercadosmundial.com.br/content/750x450/wc0E173yUWjX7mof.png"
            alt=""
            size={100}
          />
        </Wrapper>
      </Container>
    );
  }
}
