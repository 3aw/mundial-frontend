import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Wrapper, Items, Item, Image, Title, Price } from "./styles";
import { HeaderTitle } from "../Titles/styles";
import { colors } from "../../globals";

export default class Offers extends Component {
  state = {
    offers: {
      items: [
        {
          id: 1,
          image:
            "https://supermercadosmundial.com.br/content/240x240/E05oIAUM4FD4H5OT.png",
          title: "Camarão Cinza 100/120 Pacote 1 kg",
          price: "2.45",
          each: true
        },
        {
          id: 2,
          image: "",
          title: "xx",
          price: "xx",
          each: false
        },
        {
          id: 3,
          image: "",
          title: "xx",
          price: "xx",
          each: false
        }
      ]
    }
  };

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
            {this.state.offers.items.map(offer => (
              <Item>
                <Image src={offer.image} alt="" />
                <Title>{offer.title}</Title>
                <Price value={offer.value} each={offer.each} />
              </Item>
            ))}
          </Wrapper>
        </Items>
      </Container>
    );
  }
}
