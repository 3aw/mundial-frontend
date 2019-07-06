import React, { Component } from "react";

import {
  Container,
  Wrapper,
  Image,
  InputBox,
  Input,
  Button,
  SearchButton,
  TopBar
} from "./styles";

import LogoImg from "../../assets/images/logo-white.png";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import Menu from "../Menu";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <TopBar>
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
        </TopBar>

        <Menu />
      </Container>
    );
  }
}
