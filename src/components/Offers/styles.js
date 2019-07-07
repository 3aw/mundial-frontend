import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg";

import { colors } from "../../globals";

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
`;

export const Image = styled.img`
  padding: 10px;
`;
