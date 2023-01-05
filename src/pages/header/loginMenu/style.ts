import styled from "styled-components";

export const LoginMenuBlock = styled.div`
  position: fixed;
  top: 100px;
  right: 100px;
  width: max-content;
  border: 2px solid rgb(79, 13, 100);
  border-radius: 10px;
  z-index: 14;
  background: ${({theme}) => theme.background};

  & ul li:not(:first-of-type):hover {
    cursor: pointer;
    color: ${({theme}) => theme.colorHover};
  }

  & ul li:hover p {
    color: ${({theme}) => theme.colorHover};

  }
  & ul li:hover svg{
    fill: ${({theme}) => theme.colorHover};
  }
`

export const LoginMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
`

export const LoginMenuLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 2px solid rgb(79, 13, 100);

  &:first-of-type {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  &:nth-of-type(3n - 2) {
    background: rgb(79, 13, 100);
    color: #bbbbbb;
  }

  & p {
    margin-left: 10px;
  }

`