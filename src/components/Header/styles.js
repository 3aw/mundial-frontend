import React from "react";
import styled from "styled-components";

import { colors } from "../../globals";

export const Container = styled.header`
  width: 100%;
  background-color: ${colors.primary};
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img``;

export const InputBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Input = styled.input`
  width: 380px;
  font-size: 14px;
  padding: 10px;
`;

export const Button = styled.button`
  width: 215px;
  height: 40px;
  background-color: ${colors.secondary};
  border: none;
  height: 46px;
  font-size: 15px;
  color: ${colors.white};
`;

export const SearchButton = styled.div`
  width: 60px;
  height: 51px;
  background-color: ${colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
