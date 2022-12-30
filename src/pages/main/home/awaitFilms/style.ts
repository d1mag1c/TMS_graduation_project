import styled from "styled-components";

export const AwaitFilmsBlock = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 2px solid rgb(79, 13, 100);
  & h1 {
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  @media (max-width: 1050px) {

    margin: 100px auto 0;
  }
`

export const AwaitWrapperCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`