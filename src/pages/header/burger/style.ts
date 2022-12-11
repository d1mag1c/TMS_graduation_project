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

export const BurgerList = styled.ul<{ theme?: string }>`
  display: flex;
  flex-direction: column;

  padding: 20px;
  width: 100%;
  font-size: 20px;

  & li:hover {
    color: ${({theme}) => theme.colorHover};
  }
`

export const ListLi = styled.li`
  margin: 20px;
  width: max-content;

  &:first-of-type{
    margin-bottom: 5px;
  }
  
  &:nth-of-type(2), &:nth-of-type(3) {
    font-size: 15px;

    margin: 5px 5px 5px 50px;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;

  }
`