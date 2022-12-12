import React from 'react';
import {Copyright, FooterBlock, FooterLinks, LinkSocial, SocialIcons} from "./style";
import GitHub from "../../utils/socialIcon/github";
import Instagram from "../../utils/socialIcon/instagram";
import Linkedin from "../../utils/socialIcon/linkedin";
import {Link} from "react-router-dom";
import {TOP_100, TOP_250} from "../../constants";

const Footer = () => {
    return (
        <FooterBlock>
            <SocialIcons>
                < LinkSocial href='https://github.com/d1mag1c'> <GitHub/> </LinkSocial>
                < LinkSocial href='https://www.linkedin.com/in/d1mag1c/'><Linkedin/></LinkSocial>
                < LinkSocial href=''><Instagram/></LinkSocial>
            </SocialIcons>
            <FooterLinks>
                <Link to={`top_films/${TOP_100}`}>Топ 100</Link>
                <Link to={`top_films/${TOP_250}`}>Топ 250</Link>
                <Link to=''></Link>
            </FooterLinks>
            <Copyright><p>&copy; All rights reversed.</p><p>Дмитрий Зайцев. &#9786;</p></Copyright>
        </FooterBlock>
    );
};

export default Footer;