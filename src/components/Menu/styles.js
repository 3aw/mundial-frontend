import styled from "styled-components";
import { colors, metrics } from "../../globals";

export const Container = styled.nav`
  background-color: ${colors.secondary};
  // padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  color: ${colors.white};
  font-size: ${metrics.fonts.small};
  padding: 15px 22px;
  border-left: 1px solid ${colors.darkblue};
  cursor: pointer;
  &:first-child {
    border-left: none;
  }
  :hover {
    background-color: ${colors.darkblue};
  }
`;
