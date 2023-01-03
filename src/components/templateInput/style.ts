import styled from "styled-components";

export const InputFormBlock = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
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

export const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
`

export const ErrorMessage = styled.span`
  color: red;
  position: absolute;
  bottom: -20px;
  left: 10px;
  z-index: 5;
`
