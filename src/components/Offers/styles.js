import styled from "styled-components";
import arrow from "../../assets/images/orangearrow.svg";
import React from "react";

import { metrics, colors } from "../../globals";

export const Container = styled.div`
  width: 100%;
  // background-color: ${colors.primary};
  background-image: linear-gradient(to bottom, ${colors.primary} 0%,${
  colors.primary
} 490px,${colors.white} 490px,white 490px,white 100%);
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
  padding: 20px 0;
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

export const Price = props => {
  const value = props.value.split(".");
  return (
    <PriceBox>
      <Currency>R$</Currency>
      <Value>{value[0]},</Value>
      <ObsBlock>
        <Cents>{value[1] ? value[1] : "00"}</Cents>
        <Obs>{props.each ? "cada" : ""}</Obs>
      </ObsBlock>
    </PriceBox>
  );
};

export const Slick = styled.div`
  width: 100%;
  color: #333;
  margin-bottom: -5px;
  

  /* Slider */
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    max-height: 520px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;

    display: block;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
  /* End slider */

  h3 {
    background: blue;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }
  .variable-width .slick-slide p {
    background: blue;
    height: 100px;
    color: #fff;
    line-height: 100px;
    text-align: center;
  }
  .center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    transform: scale(1.08);
  }
  .center h3 {
    opacity: 0.8;
    transition: all 300ms ease;
  }
  .content {
    margin: auto;
    width: 90%;
  }
  .slick-slide .image {
    padding: 10px;
  }
  .slick-slide img {
    display: block;
    margin: auto;
    object-fit: contain;
    width: 100%;
  }
  .slick-slide img.slick-loading {
    border: 0;
  }
  .slick-slider {
  }
  .slick-dots {
    margin-left: 0;
    position: absolute;
    bottom: 0;
    display: flex !important;
    justify-content: center;
    width: 100%;
    li{
      button{
        font-size: 0 !important;
        border: none;
        width: 12px;
        height: 12px;
        border-radius: 10px;
        background-color: ${colors.gray};
        margin: 0 3px;
      }
      &.slick-active{
        button{
          background-color: ${colors.darkblue};
        }
      }
    }
  }
  .slick-thumb {
    bottom: -45px;
  }
  .slick-thumb li {
    width: 60px;
    height: 45px;
  }
  .slick-thumb li img {
    filter: grayscale(100%);
  }
  .slick-thumb li.slick-active img {
    filter: grayscale(0%);
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 24px;
    }
    .center {
      margin-left: -40px;
      margin-right: -40px;
    }
    .center .slick-center h3 {
      color: #e67e22;
      opacity: 1;
      transform: scale(1);
    }
    .center h3 {
      opacity: 0.8;
      transform: scale(0.95);
      transition: all 300ms ease;
    }
  }
  .slick-vertical .slick-slide {
    height: 180px;
  }

  .slick-arrow {
    position: absolute;
    background: transparent;
    top: calc(50% - 25px);
    z-index: 1;
    border: 2px solid ${colors.white};
    font-size: 0;
    width: 40px;
    height: 40px;
    // background-color: white;
    background-color: white;
    background-image: url('${arrow}');
    background-size: 70%;
    background-position: 50%;
    background-repeat: no-repeat;
    border-radius: 25px;
    padding: 10px;
    opacity: 1;
    cursor: pointer;
    transition: opacity .5s;
  }
  .slick-arrow:hover {
    opacity: .5;
    transition: opacity .5s;
  }
  .slick-prev {
    left: -100px;
    transform: scaleX(-1);
  }
  .slick-next {
    right: -100px;
  }
`;
