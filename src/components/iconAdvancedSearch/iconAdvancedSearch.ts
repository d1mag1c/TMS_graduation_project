import styled from "styled-components";

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  width: 40px;
  height: 40px;
  right: 70px;
  top: 6px;

  &:hover {
    cursor: pointer;

    span {
      border-color: white;
    }

    span::before, &::after {
      border-color: white;
    }
  }
`

export const BorderIcon1 = styled.span`

  width: 40px;
  height: 0;
  border-top: 2px solid #bbbbbb;
  border-radius: 2px;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    border: 2px solid #bbbbbb;
    border-radius: 50%;
    background: rgb(79, 13, 100);
    top: 3px;
    right: 7px;
  }
`

export const BorderIcon2 = styled.span`

  width: 40px;
  height: 0;
  border-top: 2px solid #bbbbbb;
  border-radius: 2px;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    border: 2px solid #bbbbbb;
    border-radius: 50%;
    background: rgb(79, 13, 100);
    bottom: 3px;
    left: 7px;
  }
`