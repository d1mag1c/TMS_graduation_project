import styled from "styled-components";

export const MenuBlock = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border: 2px solid #bbbbbb;
  border-radius: 10px;
  height: 50px;
  width: 150px;
  cursor: pointer;
  margin-left: 20px;
  font-size: 20px;
  color: #bbbbbb;

  & p, & span {
    color: #bbbbbb;
  }
  & span{
    font-size: 30px;
  }
  
  &:hover {
    border-color: white;
    color: white;
    & p, & span {
      color: white;
    }
    
  }

  &:active {
    border-color: #ffe311;
    color: #ffe311;
    & p, & span {
      color: #ffe311;
    }
  }

`