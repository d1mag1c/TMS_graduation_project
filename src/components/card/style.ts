import styled from "styled-components";

export const CardBlock = styled.div`
  width: 250px;
  height: 430px;
  margin: 20px;
  border-radius: 10px;
  transition: 1s;


  &:hover {
    transition: 1s;
    //transform: scale(1.1);
    cursor: pointer;
    box-shadow: -10px 20px 10px 0 rgba(65, 64, 64, 0.68);
  }
`

export const CardImg = styled.div<{ image: string }>`
  width: 100%;
  height: 300px;
  background-image: url(${({image}) => image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: space-between;
`

export const CardRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  background: #1d7715;
  border-radius: 5px;
  color: white;
  margin: 15px;
`
export const CardGenre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: max-content;
  padding: 5px;
  background: #606777;
  color: white;
  margin-right: 15px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const CardInfo = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;

`

export const CardTitle = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


export const CardYearAndGenres = styled.p`
  & span {
    font-weight: bold;
  }
`

export const CardsCountries = styled.p`
  margin-top: 10px;
`