import styled from "styled-components";

export const MenuBlock = styled.section<{ burgerState: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border: 2px solid #bbbbbb;
  border-radius: 10px;
  height: 50px;
  width: 150px;
  min-width: 150px;
  cursor: pointer;
  margin-left: 20px;
  font-size: 20px;
  color: #bbbbbb;

  ${({burgerState}) => burgerState
          ? '  &:before{\n    content: \'\\2716\';\n    font-size: 30px;\n  }'
          : '&:after{\n  content: \'Меню\';\n}'
  };


  &:hover {
    border-color: white;
    color: white;

    &:before & &:after {
      color: white;
    }
  }

  &:active {
    border-color: #ffe311;
    color: #ffe311;

    &:before, &:after {
      color: #ffe311;
    }
  }

  @media (max-width: 700px) {
    width: 50px;
    min-width: 50px;
    ${({burgerState}) => !burgerState && '&:after{\n content: \'\\2630\';\n font-size: 30px;\n }'
      
}
`