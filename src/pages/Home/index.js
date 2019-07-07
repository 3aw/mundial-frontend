import React, { Component } from "react";

import { Container } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer"

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Footer/>
      </Container>
    );
  }
}
