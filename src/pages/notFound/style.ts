import styled from "styled-components";

export const NotFoundBlock = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  & h1 {
    font-size: 30px;
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background: rgb(79, 13, 100);
    color: white;

    &:hover {
      cursor: pointer;
      background: #390050;
    }
  }
`

