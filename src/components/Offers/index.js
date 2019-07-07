import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Wrapper, Items, Item, Image } from "./styles";
import { HeaderTitle } from "../Titles/styles";

export default class Offers extends Component {
  render() {
    var settings = {
      dots: false
    };

    return (
      <Container>
        <Wrapper>
          <HeaderTitle>Confira as ofertas</HeaderTitle>
        </Wrapper>

        <Items>
          <Wrapper>
            <Item>
              <Image
                src="https://supermercadosmundial.com.br/content/240x240/E05oIAUM4FD4H5OT.png"
                alt=""
              />
            </Item>
            <Item>
              <Image
                src="https://supermercadosmundial.com.br/content/240x240/E05oIAUM4FD4H5OT.png"
                alt=""
              />
            </Item>
            <Item>
              <Image
                src="https://supermercadosmundial.com.br/content/240x240/E05oIAUM4FD4H5OT.png"
                alt=""
              />
            </Item>
            <Item>
              <Image
                src="https://supermercadosmundial.com.br/content/240x240/E05oIAUM4FD4H5OT.png"
                alt=""
              />
            </Item>
          </Wrapper>
        </Items>
      </Container>
    );
  }
}
