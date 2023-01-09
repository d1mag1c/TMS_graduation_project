import styled from "styled-components";

export const RegistrationBlock = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px 50px 50px;
  width: 100%;
  @media (max-width: 1050px) {

    margin: 0 auto;
  }
`

export const LinkBlock = styled.div`
  margin: 50px 0 0 50px;
  display: flex;

  & a:first-of-type {
    margin-right: 5px;
  }

  & a:last-of-type {
    margin-left: 5px;
  }

  & a:hover {
    text-decoration: underline;
  }

  @media (max-width: 800px) {

    margin: 20px 0 20px 20px;
  }
`

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto 50px;
  width: 100%;

`

export const FormTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
`

export const FormBlock = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: rgb(79, 13, 100);
  margin: 20px auto 0;
  width: 50%;
  max-width: 500px;
  min-width: 350px;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
`

export const RegButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  min-height: 50px;
  width: 60%;
  min-width: 240px;
  border-radius: 10px;
  background: rgb(79, 13, 100);
  border: 2px solid #bbbbbb;
  color: #bbbbbb;
  margin: 30px 10px 20px;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    background: #bbbbbb;
    color: black;
    cursor: pointer;
  }
`

export const ButtonsChangeFormBlock = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;
  max-width: 500px;
  min-width: 350px;

  & button {
    width: 50%;
    height: 50px;
    font-weight: bold;
    font-size: 16px;
  }
`

export const ButtonSignUp = styled.button<{ formState: boolean }>`
  border-bottom-left-radius: 20px;
  background: ${({formState}) => formState ? '#bbbbbb;' : 'rgb(79, 13, 100)'};
  color: ${({formState}) => formState ? 'black' : '#bbbbbb;'};
  cursor: ${({formState}) => formState ? 'pointer' : 'default'};

  &:hover {
    color: ${({formState}) => formState ? "#ffe311;" : "none"};
  }
`
export const ButtonSignIn = styled.button<{ formState: boolean }>`
  border-bottom-right-radius: 20px;
  background: ${({formState}) => formState ? 'rgb(79, 13, 100)' : '#bbbbbb;'};
  color: ${({formState}) => formState ? '#bbbbbb;' : 'black'};
  cursor: ${({formState}) => formState ? 'default' : 'pointer'};

  &:hover {
    color: ${({formState}) => formState ? "none" : "#ffe311;"};
  }
`

export const MassageError = styled.span`
  color: red;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
`