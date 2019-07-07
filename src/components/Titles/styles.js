import styled from "styled-components";
import { colors } from "../../globals";

export const HeaderTitle = styled.h1`
  font-size: 50px;
  font-weight: 100;
  color: #fff;
  margin: 0 0 28px;
  border-top: 1px solid #fb8b45;
  padding: 12px 0 0 0;
  position: relative;
  width: 100%;
  ::before {
    content: " ";
    width: 30%;
    height: 3px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${colors.white};
  }
  ::after {
    content: " ";
    width: 100%;
    height: 1px;
    position: absolute;
    top: 3px;
    left: 0;
    background: ${colors.white};
  }
`;
