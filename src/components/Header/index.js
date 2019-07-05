import React, { Component } from "react";

import {
  Container,
  Wrapper,
  Image,
  InputBox,
  Input,
  Button,
  SearchButton
} from "./styles";

import LogoImg from "../../assets/images/logo-white.png";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Image src={LogoImg} alt="Logo Mundial" />
          <InputBox>
            <Input placeholder={"Procurar no site"} />
            <SearchButton>
              <SearchIcon width={15} height={15} fill={"#FFF"} />
            </SearchButton>
          </InputBox>
          <Button>Veja nosso encarte</Button>
        </Wrapper>
      </Container>
    );
  }
}
