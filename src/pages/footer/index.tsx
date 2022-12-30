import React from 'react';
import {Copyright, FooterBlock, FooterLinks, LinkSocial, SocialIcons} from "./style";
import {createSearchParams, useNavigate} from "react-router-dom";
import {TOP_100, TOP_250} from "../../constants";
import GitHub from '../../components/iconSocial/github';
import Linkedin from '../../components/iconSocial/linkedin';
import Instagram from '../../components/iconSocial/instagram';
import {useThemeSelector} from "../../store";

const Footer = () => {
    const navigate = useNavigate()
    const theme = useThemeSelector(state => state.themeReducer)
    return (
        <FooterBlock>
            <SocialIcons>
                < LinkSocial href='https://github.com/d1mag1c'> <GitHub/> </LinkSocial>
                < LinkSocial href='https://www.linkedin.com/in/d1mag1c/'><Linkedin/></LinkSocial>
                < LinkSocial href=''><Instagram/></LinkSocial>
            </SocialIcons>
            <FooterLinks theme={theme}>
                <li onClick={() => navigate(`top_films/${TOP_100}`)}>Топ 100</li>
                <li onClick={() => navigate(`top_films/${TOP_250}`)}>Топ 250</li>
                <li onClick={() => {
                    navigate({
                        pathname: "films",
                        search: `?${createSearchParams({
                            type: 'TV_SERIES'
                        })}`
                    });
                    window.scroll({top: 0})
                }}>Сериалы</li>
                <li onClick={() => {
                    navigate({
                        pathname: "films",
                        search: `?${createSearchParams({
                            type: 'MINI_SERIES'
                        })}`
                    });
                    window.scroll({top: 0})
                }}>Мини-сериалы</li>
                <li onClick={() => {
                    navigate({
                        pathname: "films",
                        search: `?${createSearchParams({
                            type: 'TV_SHOW'
                        })}`
                    });
                    window.scroll({top: 0})
                }}>ТВ-шоу</li>
            </FooterLinks>
            <Copyright><p>&copy; All rights reversed.</p><p>Дмитрий Зайцев. &#9786;</p></Copyright>
        </FooterBlock>
    );
};

export default Footer;