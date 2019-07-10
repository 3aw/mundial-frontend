import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Wrapper, Items, Item, Image, Title, Price } from "./styles";
import { HeaderTitle } from "../Titles/styles";
import { colors } from "../../globals";

export default class Offers extends Component {
  render() {
    var settings = {
      dots: false
    };

    return (
      <Container>
        <Wrapper>
          <HeaderTitle color={colors.white}>Confira as ofertas</HeaderTitle>
        </Wrapper>

        <Items>
          <Wrapper>
            <Item>
              <Image
                src="https://supermercadosmundial.com.br/content/240x240/E05oIAUM4FD4H5OT.png"
                alt=""
              />
              <Title>Camarão Cinza 100/120 Pacote 1 kg</Title>
              <Price value={2.45} each />
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
