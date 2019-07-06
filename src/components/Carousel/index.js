import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "./styles";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: false
    };

    return (
      <Container>
        <Slider {...settings}>
          <div>
            <img src="https://supermercadosmundial.com.br/content/1920x540/arGFhiXdg7zcSi9p.jpg" />
          </div>
          <div>
            <img src="https://supermercadosmundial.com.br/content/1920x540/hpTBLsFaMP9dtQiL.jpg" />
          </div>
        </Slider>
      </Container>
    );
  }
}
