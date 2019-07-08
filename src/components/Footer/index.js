import React, { Component } from "react";
import {
  Container,
  Wrapper,
  Footer,
  NavList,
  ListBlock,
  Social,
  List,
  ListItem,
  PaymentBlock,
  PaymentText,
  PaymentCardList,
  PaymentCardListItem,
  TextBlock,
  TextBox,
  Text,
  Developer,
  LegalText,
  LegalTextContainer
} from "./styles";
import {
  alelo,
  chequeeletronico,
  elo,
  goodcard,
  mastercard,
  policard,
  redeshop,
  sodexo,
  ticketalimentacao,
  upplan,
  visa,
  visavale,
  vralimentacao
} from "./cards";
import developerIcon from "../../assets/images/3aw.png";

export default class Header extends Component {
  state = {
    blocks: [
      {
        id: 1,
        items: [
          {
            id: 1,
            name: "O Mundial",
            url: "https://www.supermercadosmundial.com.br/sobre"
          },
          {
            id: 2,
            name: "Ofertas",
            url: "https://www.supermercadosmundial.com.br/ofertas"
          },
          {
            id: 3,
            name: "Dicas e Receitas",
            url: "https://www.supermercadosmundial.com.br/dicas-e-receitas"
          },
          {
            id: 4,
            name: "Sala de Imprensa",
            url: "https://www.supermercadosmundial.com.br/sala-de-imprensa"
          }
        ]
      },

      {
        id: 2,
        items: [
          {
            id: 1,
            name: "Nossa Marca",
            url: ""
          },
          {
            id: 2,
            name: "SAC",
            url: "https://www.supermercadosmundial.com.br/sac"
          },
          {
            id: 2,
            name: "Trabalhe Conosco",
            url:
              "http://186.229.29.132:8080/RM//Rhu-BancoTalentos/#/RM/Rhu-BancoTalentos/home"
          }
        ]
      },
      {
        id: 3,
        items: [
          {
            id: 1,
            name: "Notícias",
            url: "https://www.supermercadosmundial.com.br/noticias"
          },
          {
            id: 2,
            name: "Newsletter",
            url: "https://www.supermercadosmundial.com.br/newsletter"
          },
          {
            id: 2,
            name: "Trabalhe Conosco",
            url: "https://www.supermercadosmundial.com.br/encarte"
          }
        ]
      }
    ],
    foodStamps: [
      { key: 1, img: sodexo },
      { key: 2, img: alelo },
      { key: 3, img: visavale },
      { key: 4, img: ticketalimentacao },
      { key: 5, img: upplan },
      { key: 6, img: goodcard },
      { key: 7, img: policard },
      { key: 8, img: vralimentacao }
    ],
    debitCards: [
      { key: 1, img: elo },
      { key: 2, img: mastercard },
      { key: 3, img: redeshop },
      { key: 4, img: chequeeletronico },
      { key: 5, img: visa }
    ]
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <Footer>
            <NavList>
              {this.state.blocks.map(navItem => (
                <ListBlock width={23}>
                  <List>
                    {navItem.items.map(item => (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ListItem>{item.name}</ListItem>
                      </a>
                    ))}
                  </List>
                </ListBlock>
              ))}
              <ListBlock width={31}>
                <Social />
              </ListBlock>
            </NavList>
            <PaymentBlock>
              <ListBlock>
                <PaymentText marginb={30}>Formas de Pagamento</PaymentText>
                <PaymentText marginb={10}>
                  Cartoes de Alimentação
                  <PaymentCardList>
                    {this.state.foodStamps.map(image => (
                      <PaymentCardListItem key={image.key}>
                        <img src={image.img} />
                      </PaymentCardListItem>
                    ))}
                  </PaymentCardList>
                </PaymentText>
              </ListBlock>
              <ListBlock align={"flex-end"} width={50}>
                <PaymentText marginb={10}>
                  Cartoes de Débito
                  <PaymentCardList>
                    {this.state.debitCards.map(image => (
                      <PaymentCardListItem key={image.key}>
                        <img src={image.img} />
                      </PaymentCardListItem>
                    ))}
                  </PaymentCardList>
                </PaymentText>
              </ListBlock>
            </PaymentBlock>
            <TextBlock>
              <TextBox width={60}>
                <Text fontSize={"13px"}>
                  Supermercados Mundial LTDA © 2019 - Todos os Direitos
                  Reservados
                </Text>
                <Text fontSize={"13px"}>
                  Todas as marcas e nomes de produtos mencionados são marcas
                  registradas de seus respectivos proprietários.
                </Text>
                <Text fontSize={"13px"}>
                  Todas as ofertas mencionadas no site são as mesmas do encarte,
                  exceto as ofertas da TV.
                </Text>
              </TextBox>
              <TextBox width={23}>
                <Text fontSize={"13px"}>
                  Desenvolvido por:
                  <Developer href={"http://www.3aw.com.br/"} target="_blank">
                    <img src={developerIcon} />
                  </Developer>
                </Text>
              </TextBox>
            </TextBlock>
          </Footer>
        </Wrapper>
      </Container>
    );
  }
}
