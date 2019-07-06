import React, { Component } from "react";

import { Container } from "./styles";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Carousel />
      </Container>
    );
  }
}
