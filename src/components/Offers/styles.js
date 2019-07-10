import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg";
import React from "react";

import { metrics, colors } from "../../globals";

export const Container = styled.div`
  width: 100%;
  // background-color: ${colors.primary};
  background-image: linear-gradient(to bottom, ${colors.primary} 0%,${
  colors.primary
} 70%,${colors.white} 70%,white 70%,white 100%);
  display: flex;
  padding: 60px 0;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 448px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  display: flex;
  padding: 60px 0;
  justify-content: space-around;
  align-items: center;
`;

export const Items = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  height: 460px;
  width: 100%;
  max-width: 260px;
`;

export const Image = styled.img`
  padding: 10px;
`;

export const Title = styled.p`
  width: 100%;
  text-align: center;
  padding: 0px 20px;
  font-size: ${metrics.fonts.small};
  color: ${colors.darkgray};
`;

export const PriceBox = styled.div`
  text-align: center;
  color: ${colors.darkgray};
  text-weight: bold;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;
export const Currency = styled.div`
  padding: 9px 10px 0 0;
`;

export const Value = styled.div`
  font-size: ${metrics.fonts.giant};
  color: ${colors.primary};
  padding: 0 5px;
`;
export const ObsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Cents = styled.div`
  font-size: ${metrics.fonts.regular};
  color: ${colors.primary};
`;
export const Obs = styled.div`
  font-size: ${metrics.fonts.xsmall};
  padding-top: 3px;
`;

export const Price = () => (
  <PriceBox>
    <Currency>R$</Currency>
    <Value>2,</Value>
    <ObsBlock>
      <Cents>45</Cents>
      <Obs>cada</Obs>
    </ObsBlock>
  </PriceBox>
);
