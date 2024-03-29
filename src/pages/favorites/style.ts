import styled from "styled-components";

export const FavoritesWrapperCard = styled.div`
  margin: 20px auto 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 420px) {

    margin: 20px auto 10px;
  }
`
export const FavoritesBlock = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px 50px 50px;
  width: 100%;
  & h1 {
    display: flex;
    margin: auto auto;
    font-size: 30px;
  }
`