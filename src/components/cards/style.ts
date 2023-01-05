import styled from "styled-components";


export const WrapperCard = styled.div`
position: relative;
  margin: 20px;
  transition: 1s;
  &:hover {
    transition: 1s;
    transform: scale(1.02) skewY(3deg);
    cursor: pointer;
    box-shadow: -20px 30px 10px 0 rgba(65, 64, 64, 0.68);
    border-radius: 10px;

  }
`

export const CardBlock = styled.div`
  width: 250px;
  height: 490px;

  overflow: hidden;

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

export const CardRating = styled.div<{ colorChange?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: max-content;
  padding: 0 5px;
  width: 40px;
  height: 20px;
  background: ${({colorChange}) => colorChange ? colorChange : 'grey'};
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
  justify-content: space-between;
height: 190px;
`

export const CardTitle = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
  min-height: 38px;
  font-size: 18px;
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 105px;
`


export const CardYearAndGenres = styled.p`
  & span {
    font-weight: bold;
  }
`

export const CardsCountries = styled.p`
  display: flex;
 
  margin: 5px;
`

export const AwaitCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 320px;
  overflow: hidden;
  
`

export const AwaitImgBlock = styled.div<{ image: string }>`
  width: 100%;
  height: 80%;
  background-image: url(${({image}) => image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;

  & div {
  margin: 0;
  }
`

export const AwaitDescription = styled.div`
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  padding: 10px;
  height: 20%;
  width: 90%;
`

export const FavoriteBlock = styled.div`

    position: absolute;
    bottom: 12px;
    right: 12px;

    `