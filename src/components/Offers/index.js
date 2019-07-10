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
          value: "2.45",
          each: true
        },
        {
          id: 2,
          image:
            "https://www.supermercadosmundial.com.br/content/240x240/PPd6g5idgLmt6tkj.png",
          title: "Café pilão",
          value: "5.88",
          each: false
        },
        {
          id: 3,
          image:
            "https://www.supermercadosmundial.com.br/content/240x240/ualnTdUS7BOKC3y8.png",
          title: "Filé de merluza",
          value: "5.00",
          each: false
        },
        {
          id: 3,
          image:
            "https://www.supermercadosmundial.com.br/content/240x240/Jhmilr4jFK0Up39g.png",
          title: "Filezinho de frango seara",
          value: "5.00",
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
