import React, { Component } from "react";

import { Container } from "./styles";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import LegalText from "../../components/LegalText";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Carousel />
        <Footer />
        <LegalText />
      </Container>
    );
  }
}
