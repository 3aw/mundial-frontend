import styled from "styled-components";
import { colors, metrics } from "../../globals/index";
import React from "react";
import iconFb from "../../assets/images/fb.png";
import iconTwt from "../../assets/images/twt.png";
import iconIg from "../../assets/images/ig.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.darkblue};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  display: flex;
  border: solid 1px red;
`;

//// FOOTER START ///

export const Footer = styled.footer`
  border: solid 1px white;
  width: 100%;
`;
//                //
// navMenuBlocks //
export const NavList = styled.nav`
  border-bottom: solid 1px ${colors.secondary};
  height: auto;
  display: flex;
  padding: 42px 0 65px 15px;
`;
export const ListBlock = styled.div`
  width: ${props => props.width + "%"};
  height: auto;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 160px;
`;
export const ListItem = styled.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: ${metrics.fonts.xlarge};
  font-weight: 300;
  padding-bottom: 15px;
`;

//              //
// socialBlock //
export const BlockSocial = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const SocialTitle = styled.h2`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  font-size: ${metrics.fonts.xlarge};
  white-space: nowrap;
`;
export const SocialItems = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;
export const SocialItem = styled.div`
  width: 55px;
  border: solid 1px white;
  border-radius: 50%;
  margin:20px 0;
  background: url("${props => props.icon}");
  height: 55px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: ${props => props.width + "px"}; 
`;

export const Social = () => (
  <BlockSocial>
    <SocialTitle>Acompanhe nossas redes</SocialTitle>
    <SocialItems>
      <a
        href="https://www.facebook.com/supermercadosmundialoficial/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialItem icon={iconFb} width={8} />
      </a>
      <a
        href="https://twitter.com/Rede_Mundial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialItem icon={iconTwt} width={15} />
      </a>
      <a
        href="https://www.instagram.com/supermercadosmundial/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialItem icon={iconIg} width={15} />
      </a>
    </SocialItems>
  </BlockSocial>
);

// Payment methods //

export const PaymentList = styled.div`
  border: solid 1px red;
  /* border-bottom: solid 1px ${colors.secondary}; */
  height: auto;
  display: flex;
  padding: 50px 0 58px 15px;
`;

export const PaymentText = styled(SocialTitle)`
  margin-bottom: ${props => props.marginb + "px"};
`;
export const PaymentCardList = styled(List)`
  flex-direction: row;
`;
export const PaymentCardListItem = styled(ListItem)``;

export const Card = styled.img`
  width: 44px;
  height: 29px;
`;

export const CardIcon = props => (
  <PaymentCardListItem>
    <Card src={props} />
  </PaymentCardListItem>
);
