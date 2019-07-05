import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{margin: 0; padding: 0; outline: none; box-sizing: border-box;}
  @import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

  html{
    height: 100%;
    font-family: 'Roboto';
    body{
      height: 100%;
      #root{
        height: 100%;
        
      }
    }
  }
`;