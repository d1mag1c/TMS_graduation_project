import styled from "styled-components";

export const FooterBlock = styled.section`
  width: 100%;
  height: max-content;
  margin: auto 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  border-top: 2px solid rgb(79, 13, 100);

`

export const SocialIcons = styled.div`
  display: flex;
  padding: 10px;
  height: max-content;
  @media (max-width: 950px) {
    order: 2
  }
`

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  padding: 20px;

  & a {
    margin-right: 10px;
    font-size: 20px;
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  margin-right: 20px;
  padding: 10px;
  height: max-content;
`

export const LinkSocial = styled.a`
  margin: 0 15px;
  @media (max-width: 950px) {

    width: 25px;
  }
`