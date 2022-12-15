import styled from "styled-components";

export const TopFilmsBlock = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px 50px 50px;
  @media (max-width: 1050px) {

    margin: 120px auto;
  }
`

export const WrapperCards = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  border-top: 2px solid rgb(79, 13, 100);
`

export const TitleHead = styled.h1`
  font-size: 50px;
  margin: 0 auto 20px;
`