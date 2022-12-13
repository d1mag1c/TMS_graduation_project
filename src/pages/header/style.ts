import styled, {createGlobalStyle} from "styled-components";

export const HeaderBlock = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px;
  width: 100%;
  height: 80px;
  background: rgb(79, 13, 100);
  z-index: 10;
  @media (max-width: 1050px) {
    flex-wrap: wrap;
    height: 170px;
  }
`

export const BackgroundBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9;
  background: rgba(84, 84, 84, 0.45);

`
export const OverflowBodyStyle  = createGlobalStyle`
    body{
      overflow-y: hidden;
    }
    `

export const WrapperLoginStyle = styled.div`
    display: flex;
  @media (max-width: 1050px) {

    margin-left: auto;
  }
    `