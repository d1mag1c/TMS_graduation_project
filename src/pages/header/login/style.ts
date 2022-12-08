import styled from "styled-components";

export const LoginBlock = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: max-content;
  height: 50px;
  width: 50px;
  cursor: pointer;
  padding: 0 10px;
  border: 2px solid #bbbbbb;
  border-radius: 10px;
  margin-right: 20px;
  margin-left: auto;
  &:hover{
    border-color: white;
    & div:before, div:after{
      border-color: white;
    }
  }
`

export const IconUser = styled.div`

  height: 20px;
  width: 20px;
  position: relative;

  &:before {
    content: '';
    width: 6px;
    height: 6px;
    border: 2px solid #bbbbbb;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 5px;
  }

  &:after {
    content: '';
    width: 16px;
    height: 5px;
    border: 2px solid #bbbbbb;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`