import React, { Component } from "react";
import Slider from "react-slick";
import {
  Container,
  Wrapper,
  Items,
  Item,
  Image,
  Title,
  Price,
  Slick,
  Warning
} from "./styles";
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
        },
        {
          id: 4,
          image:
            "https://www.supermercadosmundial.com.br/content/240x240/PPd6g5idgLmt6tkj.png",
          title: "Café pilão",
          value: "5.88",
          each: false
        },
        {
          id: 5,
          image:
            "https://www.supermercadosmundial.com.br/content/240x240/ualnTdUS7BOKC3y8.png",
          title: "Filé de merluza",
          value: "5.00",
          each: false
        },
        {
          id: 6,
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
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4
    };

    return (
      <Container>
        <Wrapper>
          <HeaderTitle color={colors.white}>Confira as ofertas</HeaderTitle>
        </Wrapper>

        <Items>
          <Wrapper>
            <Slick>
              <Slider {...settings}>
                {this.state.offers.items.map(offer => (
                  <Item>
                    <Image src={offer.image} alt="" />
                    <Title>{offer.title}</Title>
                    <Price value={offer.value} each={offer.each} />
                  </Item>
                ))}
              </Slider>
            </Slick>
          </Wrapper>
        </Items>

        <Warning>
          O ministério da saúde adverte: o aleitamento materno evita infecções e
          alergias e é recomendado até os dois anos de idade ou mais. Após os
          seis meses de idade continue amamentando seu filho e ofereça novos
          alimentos. O mundial apoia a campanha do aleitamento materno.
        </Warning>
      </Container>
    );
  }
}
