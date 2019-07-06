import React, { Component } from "react";

import { Container, Item } from "./styles";

export default class Menu extends Component {
  state = {
    menu: [
      { title: "O Mundial" },
      { title: "Ofertas" },
      { title: "Lojas" },
      { title: "Ofertas" },
      { title: "Produtos Especiais" },
      { title: "Dicas e Receitas" },
      { title: "SAC" },
      { title: "Nóticias" },
      { title: "Newsletter" },
      { title: "Sala de Imprensa" },
      { title: "Eventos" }
    ]
  };
  render() {
    return (
      <Container>
        {this.state.menu.map(item => (
          <Item>{item.title}</Item>
        ))}
      </Container>
    );
  }
}
