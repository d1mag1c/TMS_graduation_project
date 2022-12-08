import styled from "styled-components";

export const IconSearch = styled.span`
  position: absolute;
  width: 35px;
  height: 35px;
  right: 10px;
  top: 8px;

  &:hover {
    cursor: pointer;
    border-color: white;

    &::before, &::after {
      border-color: white;
    }
  }

  &::before {
    content: '';
    border: 2px solid #bbbbbb;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    position: absolute;
    content: '';
    border: 1px solid #bbbbbb;
    background: white;
    bottom: 7px;
    right: 0;
    width: 14px;
    transform: rotate(45deg);
  }
`
