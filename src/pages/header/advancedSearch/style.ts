import styled from "styled-components";

export const AdvancedSearchBlock = styled.section<{ state: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  right: 0;
  background: rgb(79, 13, 100);
  height: 100%;
  width: max-content;
  z-index: 14;
  transition: 1s;
  transform: translateX(${({state}) => state ? '0px' : '100%'});
  background: ${({theme}) => theme.background};
  border-left: 2px solid rgb(79, 13, 100);
  color: ${({theme}) => theme.color};
  
  @media (max-width: 1050px) {
    top: 170px;
  }
  @media (max-width: 420px) {
   width: 100%;
  }
`

export const AdvButtonClose = styled.button`
  background: ${({theme}) => theme.background};
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: start;
  margin: 15px 30px 0;
  
  &:hover {
    color: ${({theme}) => theme.colorHover}

  }
`

export const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

`

export const InputButton = styled.input`
  width: 200px;
  border-radius: 10px;
  height: 50px;
  cursor: pointer;
  margin: 30px 0 0;
  background: rgb(79, 13, 100);
  color: #bbbbbb;
  font-size: 16px;
  border: none;

  &:hover {
    color: white;
    border-color: white;
  }
  @media (max-width: 1050px) {
    height: 40px;
    margin: 15px 0 0;
  }
`

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin: 5px;

  & label {
    font-size: 20px;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & input, & select {
    width: 40%;
    min-width: 120px;
    height: 40px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid rgb(79, 13, 100);
    &:hover{
      cursor: pointer;
    }
    &:focus{
      cursor: auto;
    }
  }
  & select {
    color: black;
    width: 50%;
  }
  &:first-of-type{

    & div, & input {
      width: 91%;
    }
  }
  @media (max-width: 1050px) {
    margin: 5px;
    & input, & select {
      height: 35px;
      padding: 5px;
    }
  }
`