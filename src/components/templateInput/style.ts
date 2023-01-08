import styled from "styled-components";

export const InputFormBlock = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto 0;
  position: relative;
`

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${props => props.error ? 'red' : 'grey'};
  color: black;
`
export const ErrorMessageBlock = styled.div`

  display: flex;
  font-size: 10px;
  margin-top: 5px;
  width: 100%;
height: 25px;
  & span {
    color: red;
  }

`