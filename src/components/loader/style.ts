import styled from "styled-components";

export const LoaderBlock = styled.section <{themeLoader: string}>`
{
  position: relative;
  width: 140px;
  margin: 250px auto;

  -webkit-perspective: 200px;
  -moz-perspective: 200px;
  -ms-perspective: 200px;
  perspective: 200px;
}
  &:before,
  &:after
  {
    position: absolute;
    width: 40px;
    height: 40px;
    content: '';
    animation: jumping .5s infinite alternate;
    background: rgba(0,0,0,0);
  }
  &:before
  {
    left: 0;
  }
  &:after
  {
    right: 0;
    animation-delay: .15s;
  }

  @keyframes jumping
  {
    0%
    {
      -webkit-transform: scale(1.0) translateY(0px) rotateX(0deg);
      -ms-transform: scale(1.0) translateY(0px) rotateX(0deg);
      -o-transform: scale(1.0) translateY(0px) rotateX(0deg);
      transform: scale(1.0) translateY(0px) rotateX(0deg);
      -webkit-box-shadow: 0 0 0 rgba(0,0,0,0);
      box-shadow: 0 0 0 rgba(0,0,0,0);
    }
    100%
    {
      -webkit-transform: scale(1.2) translateY(-25px) rotateX(45deg);
      -ms-transform: scale(1.2) translateY(-25px) rotateX(45deg);
      -o-transform: scale(1.2) translateY(-25px) rotateX(45deg);
      transform: scale(1.2) translateY(-25px) rotateX(45deg);
      background: rgb(79, 13, 100);
      -webkit-box-shadow: 0 25px 40px rgb(255,255,255);
      box-shadow: 0 25px 40px ${({themeLoader}) => themeLoader};
    }
  }
`

