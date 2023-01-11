import styled from "styled-components";

export const LogoBlock = styled.div`
  display: flex;
  position: relative;
  width: 165px;
  height: 75px;
  font-family: 'Rubik Moonrocks', cursive;
  font-size: 50px;
  letter-spacing: 3px;
  margin: 0 50px 0 100px;
  color: #bbbbbb;
  min-width: 165px;

  &:hover {
    cursor: pointer;
    color: white;
  }

  &:before {
    content: 'Кино';
    position: absolute;
    top: -7px;
    left: 40px;
  }

  &:after {
    content: 'Магия';
    color: #ffe311;
    position: absolute;
    bottom: -10px;
    left: 0;
  }

  @media (max-width: 1350px) {
    margin: 0 50px 0 40px;
  }
  @media (max-width: 620px) {
    width: 55px;
    height: 40px;
    min-width: 85px;
    font-size: 30px;
    margin-left: 10px;
  }
  @media (max-width:510px) {
    display: none;
  }
`