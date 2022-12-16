import styled from "styled-components";

export const SimilarCardsBlock = styled.div<{ theme: string }>`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;

  .slick-slider {
    overflow: hidden;
    position: relative;

    .slick-arrow {
      position: absolute;
      width: 10%;
      height: 100%;
      background: ${({theme}) => theme.background};
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s;
      opacity: 0;

      &:hover svg {
        fill: ${({theme}) => theme.colorHover};
      }

      & svg {
        width: 50%;
        height: 50%;
      }
    }

    .slick-next {
      top: 0;
      right: 0;
    }

    &:hover .slick-arrow {

      transition: 0.5s;
      opacity: 0.9;
    }

    &:hover .slick-disabled {
      opacity: 0;
      display: none;
      transition: 0.5s;
    }
  }

  .slick-track {
    display: flex;

  }

  .slick-slide {
    margin: 10px 5px;

    div {
      width: 100%;
      height: 100%;

    }
  }
`

export const CardBlock = styled.div`

  width: 100%;
  height: 100%;
  transition: 0.5s;
  
  &:hover {
    cursor: pointer;
    scale: 1.05;
    transition: 0.5s;
  }
`

export const CardImgBlock = styled.div`
  width: 100%;
  height: 100%;
  max-width: 250px;
`

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
`

