import styled from "styled-components";

export const BurgerBlock = styled.section<{ theme?: boolean, burgerState?: boolean }>`
  position: fixed;
  background: ${({theme}) => theme.background};
  width: 300px;
  height: 900px;
  top: 80px;
  left: 0;
  transition: 0.8s;
  transform: translateX(${({burgerState}) => burgerState ? '0px' : '-300px'});
  border-right: 2px solid rgb(79, 13, 100);
  z-index: 11;
`

export const BurgerList = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 20px;
  width: 100%;
  font-size: 20px;
`

export const ListLi = styled.li`
  margin: 20px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: white;
  }
`