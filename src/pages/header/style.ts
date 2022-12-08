import styled from "styled-components";

export const HeaderBlock = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px;
  width: 100%;
  height: 80px;
  background: rgb(79, 13, 100);
  z-index: 10;
`

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