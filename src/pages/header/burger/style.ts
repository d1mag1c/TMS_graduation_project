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
  z-index: 15;

  @media (max-width: 1050px) {
    top: 170px;
  }
`

export const BurgerList = styled.ul<{ theme?: string }>`
  display: flex;
  flex-direction: column;


  width: 100%;
  font-size: 20px;

  & li:hover {
    color: ${({theme}) => theme.colorHover};
  }
`

export const ListLi = styled.li`
  margin: 20px 40px;
  width: max-content;

  &:nth-of-type(2) {
    margin-bottom: 5px;
  }

  &:nth-of-type(3), &:nth-of-type(4) {
    font-size: 15px;

    margin: 5px 5px 5px 70px;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;

  }
`

export const LiGoToHome = styled.li<{theme?: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  width: 100%;
  padding: 20px;
  border-bottom: 2px solid rgb(79, 13, 100);
  cursor: pointer;
&:hover{
  background: rgb(79, 13, 100);
  
}
`
