import styled from "styled-components";

export const FooterBlock = styled.section`
  width: 100%;
  height: 100px;
  margin: auto 0;
  display: flex;
justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-top: 2px solid rgb(79, 13, 100);;
`

export const SocialIcons = styled.div`
display: flex;

`

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & a {
    margin-right: 10px;
    font-size: 20px;
  }
`

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  margin-right: 20px;
`

export const LinkSocial = styled.a`
margin: 0  15px;
    `