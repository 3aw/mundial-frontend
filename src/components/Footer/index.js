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
  PaymentList,
  PaymentText,
  PaymentCardList,
  PaymentCardListItem
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
    ]
  };
  renderImageListOne = () => {
    return (
      <li>
        <img src={sodexo} />
      </li>
    );
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
            <PaymentList>
              <ListBlock width={100}>
                <PaymentText marginb={30}>Formas de Pagamento</PaymentText>
                <PaymentText marginb={10}>
                  Cartoes de Alimentação
                  <PaymentCardList>{this.renderImageListOne()}</PaymentCardList>
                </PaymentText>
              </ListBlock>
            </PaymentList>
          </Footer>
        </Wrapper>
      </Container>
    );
  }
}
