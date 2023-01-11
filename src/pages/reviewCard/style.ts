import styled from "styled-components";

export const ReviewCardBlock = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  height: max-content;

`

export const BackgroundBlock = styled.div<{ coverUrl: string }>`
  background: ${({theme}) => theme.gradient}, url(${({coverUrl}) => coverUrl}) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 100px 100px 50px 100px;
  flex-direction: column;
  @media (max-width: 1050px) {
    padding: 60px 50px 50px 50px;
  }
  @media (max-width: 680px) {
    background: ${({theme}) => theme.background}
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
  height: max-content;
  min-width: 320px;
  margin: 0 80px 0 0;
  font-size: 0;

  @media (max-width: 950px) {
    margin: 0 auto;
  }
  @media (max-width: 500px) {
    min-width: 270px;
    width: 270px;
  }
`

export const ImgReviewCard = styled.img`
  width: 100%;
  height: 70%;

`

export const FavoriteAndLinkBlock = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border: 2px solid rgb(79, 13, 100);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  & div:hover {
    cursor: pointer;
  }
`
export const FavoriteBlock = styled.div<{ state?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-right: 2px solid rgb(79, 13, 100);
  font-size: 14px;
  background: ${({state}) => state ? 'rgb(79, 13, 100)' : 'none'};
  position: relative;

  &:hover p {
    color: ${({state, theme}) => state ? 'white' : `${theme.colorHover}`}
  }

  &:hover svg {
    fill: ${({state, theme}) => state ? 'white' : `${theme.colorHover}`}
  }

  & p {
    margin-right: 10px;
    color: ${({state, theme}) => state ? 'white' : `${theme.color}`};
  }

  & svg {
    fill: ${({state, theme}) => state ? 'white' : `${theme.color}`};
  }

`

export const LinkBlock = styled.div<{ state: boolean }>`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  position: relative;
  background: ${({state}) => state ? 'rgb(79, 13, 100)' : 'none'};

  & p {

    color: ${({state, theme}) => state ? 'white' : `${theme.color}`};
  }

  &:hover p {
    color: ${({theme}) => theme.colorHover};
  }
}
`

export const CopyMessage = styled.span`
  position: absolute;
  width: 90%;
  height: 25px;
  padding: 5px;
  bottom: -30px;
  right: 10px;
  background: rgb(79, 13, 100);
  border-radius: 10px;
  color: white;
  display: flex;
  transition: 1s;
  justify-content: center;
  align-items: center;
  font-size: 12px;
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

  @media (max-width: 500px) {
    flex-wrap: wrap;
    width: 100%;
    & li {
      margin: 10px 10px 40px;
    }
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