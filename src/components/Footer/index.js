import React from "react";
import {FooterContainer,
    FooterWrap,
    FooterMedia,
    FooterMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterMedia>
          <FooterMediaWrap>
            <SocialLogo to="/">Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="FaceBook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </FooterMediaWrap>
        </FooterMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
