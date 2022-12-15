import styled from "styled-components";

export const ReviewCardBlock = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  height: max-content;
  
`

export const BackgroundBlock = styled.div<{ coverUrl: string, gradient: string }>`
  background: ${({gradient}) => gradient}, url(${({coverUrl}) => coverUrl}) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 100px 100px 50px 100px;
  flex-direction: column;
  @media (max-width: 1050px){
    padding: 160px 50px 50px 50px;
  }
`

export const WrapperInfo = styled.div`
  display: flex;
  @media (max-width: 950px) {
flex-direction: column;
  }
  
`
export const ImgBlock = styled.div`
  width: 330px;
  height: 460px;
  min-width: 320px;
  margin-right: 80px;
  @media (max-width: 950px) {
    margin: 0 auto;
  }
`

export const ImgReviewCard = styled.img`
  width: 100%;
  height: 100%;
`

export const InfoBlock = styled.div`

`
export const TitleRu = styled.h1`
  display: flex;
  align-items: center;
  font-size: 40px;
  @media (max-width: 950px) {
    margin-top: 20px;
  }

`

export const TitleOriginal = styled.p`
  margin-top: 10px;

  & span {
    margin-left: 15px;
  }
`

export const RatingBlock = styled.ul`
  display: flex;
  width: max-content;
  margin: 20px 0 60px;
  @media (max-width: 950px) {
    
  }

`
export const RatingLi = styled.li<{ colorChange?: string }>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 15px;
  border-radius: 5px;
  height: 100%;

  &:hover {
    cursor: pointer;
  }

  & p:first-of-type {
    padding: 4px 5px 4px 10px;
    border: 1px solid ${({colorChange}) => colorChange};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  & p:last-of-type {
    background: ${({colorChange}) => colorChange};
    padding: 5px 10px;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    color: white;
  }

  &:hover p {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:hover span {
    display: block;
    border: 1px solid ${({colorChange}) => colorChange};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`

export const VoteSpan = styled.span`
  display: none;
  position: absolute;
  top: 28px;
  left: 0;
  padding: 5px 10px;
  width: 100%;
`

export const DescriptionShortBlock = styled.div`


  & span {
    opacity: 0.6;
    margin-right: 10px;
  }
`

export const TextCardReview = styled.li`
  margin-top: 15px;
  display: flex;

  & span {
    width: max-content;
    display: flex;
    white-space: nowrap;
  }
`

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  & h2 {
    margin-bottom: 30px;
  }
`