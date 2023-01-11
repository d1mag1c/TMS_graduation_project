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
  @media (max-width: 1150px) {
    justify-content: center;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  padding: 10px;
  height: max-content;
  min-width: max-content;
  @media (max-width: 1150px) {
    order: 1
  }
`

export const FooterLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;

  & li {
    margin: 10px;
    font-size: 20px;
    display: flex;
    &:hover {
      cursor: pointer;
      color: ${({theme}) => theme.colorHover};
    }
  }

  @media (max-width: 1150px) {
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

  @media (max-width: 1150px) {
    margin: 0 20px;
    order: 2
  }
`

export const LinkSocial = styled.a`
  margin: 0 15px;
  width: max-content;
  display: flex;
`