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

`