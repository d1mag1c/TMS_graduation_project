import styled from "styled-components";

export const SimilarBlock = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px;
  padding: 0 50px;

`

export const SimilarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SimilarTitleBlock = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;

  & h1 {
    font-size: 25px;
    margin-right: 10px;
  }
`

export const SimilarCardsBlock = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`

export const CardImgBlock = styled.div`
  width: 100%;
  height: 100%;
  max-width: 200px;
`

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
`