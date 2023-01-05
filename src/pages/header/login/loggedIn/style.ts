import styled from "styled-components";

export const LogInBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  cursor: pointer;
  border: 2px solid #bbbbbb;
  border-radius: 10px;
  margin-right: 20px;

  & div {
    color: #bbbbbb;
  }

  &:hover {
    border-color: white;

    & div {
      color: white;
    }
  }
`

export const UserInitial = styled.div`
  display: flex;
  align-items: center;
  font-size: 34px;
  height: 100%;
  margin: 0 5px 0 10px;
  font-family: 'Ewert', cursive;

`

export const UserBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 0;
  min-width: max-content;
  font-family: 'Akaya Kanadaka', cursive;
  font-size: 24px;
`
