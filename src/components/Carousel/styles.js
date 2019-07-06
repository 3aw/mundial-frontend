import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg";

import { colors } from "../../globals";

export const Container = styled.div`
  width: 100%;
  color: #333;

  /* Slider */
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

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
    width: 50px;
    height: 50px;
    background-image: url('${arrow}');
    background-size: 70%;
    background-position: 50%;
    background-repeat: no-repeat;
    border-radius: 25px;
    padding: 10px;
    opacity: 0.5;
    cursor: pointer;
    transition: opacity .5s;
  }
  .slick-arrow:hover {
    opacity: 1;
    transition: opacity .5s;
  }
  .slick-prev {
    left: 50px;
    transform: scaleX(-1);
  }
  .slick-next {
    right: 50px;
  }
`;
