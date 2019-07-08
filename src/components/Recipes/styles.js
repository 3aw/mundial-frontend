import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  height: 200px;
`;
export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;
export const Text = styled.p`
  width: 80%;
  margin: auto;
`;
export const Strong = styled.strong`
  width: 80%;
  margin: auto;
`;
export const Image = styled.img`
  width: ${props => props.size}%;
  margin: auto;
`;
