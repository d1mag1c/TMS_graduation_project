import styled from "styled-components";

export const LoaderBlock = styled.section`
{
  position: relative;
  width: 80px;
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
    width: 30px;
    height: 30px;
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
  @-webkit-keyframes jumping
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

      background: rgb(255,255,255);
      -webkit-box-shadow: 0 25px 40px rgb(255,255,255);
      box-shadow: 0 25px 40px rgb(255,255,255);
    }
  }
  @-moz-keyframes jumping
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

      background: rgb(255,255,255);
      -webkit-box-shadow: 0 25px 40px rgb(255,255,255);
      box-shadow: 0 25px 40px rgb(255,255,255);
    }
  }
  @-o-keyframes jumping
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

      background: rgb(255,255,255);
      -webkit-box-shadow: 0 25px 40px rgb(255,255,255);
      box-shadow: 0 25px 40px rgb(255,255,255);
    }
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
      background: rgb(255,255,255);
      -webkit-box-shadow: 0 25px 40px rgb(255,255,255);
      box-shadow: 0 25px 40px rgb(255,255,255);
    }
  }
  
  
//  
//  
//margin: 150px auto;
//  position: relative;
//
//  width: 25px;
//  height: 25px;
//
//  -webkit-animation: 1.2s ball-fade infinite cubic-bezier(.78, .14, .15, .86) .2s;
//  -o-animation: 1.2s ball-fade infinite cubic-bezier(.78, .14, .15, .86) .2s;
//  animation: 1.2s ball-fade infinite cubic-bezier(.78, .14, .15, .86) .2s;
//
//  border-radius: 100%;
//  background-color: rgba(255, 255, 255, .0);
//  &:before, &:after{
//    position: absolute;
//
//    width: 25px;
//    height: 25px;
//
//    content: '';
//    -webkit-animation: 1.2s ball-fade infinite cubic-bezier(.78, .14, .15, .86);
//    -o-animation: 1.2s ball-fade infinite cubic-bezier(.78, .14, .15, .86);
//    animation: 1.2s ball-fade infinite cubic-bezier(.78, .14, .15, .86);
//
//    border-radius: 100%;
//    background-color: rgba(255, 255, 255, .0);
//  }
//  &:before{
//    left: -50px;
//  }
//  &:after{
//    right: -50px;
//
//    -webkit-animation-delay: .4s;
//    -o-animation-delay: .4s;
//    animation-delay: .4s;
//  }
//
//  @-webkit-keyframes ball-fade
//  {
//    0%
//    {
//      background-color: rgba(255, 255, 255, 1);
//    }
//    100%
//    {
//      background-color: rgba(255, 255, 255, 0);
//    }
//  }
//  @-moz-keyframes ball-fade
//  {
//    0%
//    {
//      background-color: rgba(255, 255, 255, 1);
//    }
//    100%
//    {
//      background-color: rgba(255, 255, 255, 0);
//    }
//  }
//  @-o-keyframes ball-fade
//  {
//    0%
//    {
//      background-color: rgba(255, 255, 255, 1);
//    }
//    100%
//    {
//      background-color: rgba(255, 255, 255, 0);
//    }
//  }
//  @keyframes ball-fade
//  {
//    0%
//    {
//      background-color: rgba(255, 255, 255, 1);
//    }
//    100%
//    {
//      background-color: rgba(255, 255, 255, 0);
//    }
//  }

`

