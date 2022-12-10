import styled from "styled-components";

export const ButtonLoaderBlock = styled.span`
{
  position: absolute;
  width: 25px;
  height: 25px;
  right: 20px;
  
  
  -webkit-animation: arrow-circle infinite .75s linear;
  -moz-animation: arrow-circle infinite .75s linear;
  -o-animation: arrow-circle infinite .75s linear;
  animation: arrow-circle infinite .75s linear;

  border: 2px solid #fff;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 100%;


  &:before,
  &:after {
    position: absolute;
    top: 19px;
    left: -3px;

    content: '';
    -webkit-transform: rotate(-30deg);
    -ms-transform: rotate(-30deg);
    -o-transform: rotate(-30deg);
    transform: rotate(-30deg);

    border-top: 5px solid #fff;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }

  [data-loader='arrow-circle']:after {
    top: 0;
    left: 17px;

    -webkit-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    -o-transform: rotate(150deg);
    transform: rotate(150deg);
  }

  @-webkit-keyframes arrow-circle {
    0% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
  }

  @-moz-keyframes arrow-circle {
    0% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
  }

  @-o-keyframes arrow-circle {
    0% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
  }

  @keyframes arrow-circle {
    0% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
  }
}
`