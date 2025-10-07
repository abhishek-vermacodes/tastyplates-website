"use client"

import React from 'react'
import { CopyRightText, FooterBottomContainer, FooterContainer, FooterLinks, FooterLinksContainer, FooterLinksTitle, FooterLinksWrapper, FooterLogoWrapper, FooterText, FooterWrapper, SocialLinksContainer } from './styled'
import Image from 'next/image'
import Logo from "@/assets/images/TastyPlateLogo.png"
import GooglePlay from "@/assets/images/GooglePlay.png"
import AppStore from "@/assets/images/AppStore.png"
import { PiInstagramLogo } from "react-icons/pi";
import { FaLinkedin, FaMeta, FaSquareTwitter } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: "40px 80px" }}>

          <FooterLogoWrapper>
            <div>
              <Image src={Logo} alt="Logo" className='logo' />
            </div>
            <CopyRightText>@ 2025 TastyPlate Limited</CopyRightText>
          </FooterLogoWrapper>

          <FooterLinksWrapper>
            <FooterLinksContainer>
              <FooterLinksTitle>company</FooterLinksTitle>
              <FooterLinks><a className='link' href="#">About us</a></FooterLinks>
              <FooterLinks><a className='link' href="#">Contact us</a></FooterLinks>

              <FooterLinksTitle>social links</FooterLinksTitle>
              <SocialLinksContainer>
                <FooterLinks><a className='link' href="#"><PiInstagramLogo className='social-icon' /></a></FooterLinks>
                <FooterLinks><a className='link' href="#"><FaMeta className='social-icon' /></a></FooterLinks>
                <FooterLinks><a className='link' href="#"><FaLinkedin className='social-icon' /></a></FooterLinks>
                <FooterLinks><a className='link' href="#"><FaSquareTwitter className='social-icon' /></a></FooterLinks>
              </SocialLinksContainer>
            </FooterLinksContainer>

            <FooterLinksContainer>
              <FooterLinksTitle>get help</FooterLinksTitle>

              <FooterLinks><a className='link' href="#">Help& support</a></FooterLinks>
              <FooterLinks><a className='link' href="#">Delivery policies</a></FooterLinks>

              <FooterLinks><a className='link' href="#"> Disclaimers</a></FooterLinks>
              <FooterLinks><a className='link' href="#">Available in </a></FooterLinks>
            </FooterLinksContainer>
            <FooterLinksContainer>
              <FooterLinksTitle>explore</FooterLinksTitle>
              <FooterLinks><a className='link' href="#">offers</a></FooterLinks>
              <FooterLinks><a className='link' href="#"> bulk orders</a></FooterLinks>
            </FooterLinksContainer>
          </FooterLinksWrapper>
        </div>

        <FooterBottomContainer>
          <FooterText>For better experience, download the Tasty Plate app now</FooterText>
          <div style={{ display: 'flex', gap: '10px' }}>
          <Image src={GooglePlay} alt="Google Play" />
          <Image src={AppStore} alt="App Store"  />
          </div>
        </FooterBottomContainer>

      </FooterContainer>
    </FooterWrapper>
  )
}
