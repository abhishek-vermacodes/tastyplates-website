import React from "react";
import { MainWrapper, ContentSection, ImageSection, Heading, Description, GetAppContainer, GetAppLogoContainer, TextContainer } from "./styled";
import Image from "next/image";
import Logo from "@/assets/images/logos/W-LOGO.png"
import QRLogo from "@/assets/images/QR.webp"


const GetApp = () => {
  return (
    <MainWrapper>
      <GetAppContainer>
        <ContentSection>
          <GetAppLogoContainer>
            <Image src={Logo} alt="Logo" className="logo" />
          </GetAppLogoContainer>
          <TextContainer>
            <Heading>Get the Tasty Plate App now!</Heading>
            <Description>
              For best offers and discounts curated specially for you.
            </Description>
          </TextContainer>
        </ContentSection>
        <ImageSection>
          <Image src={QRLogo} alt="App Preview" />
        </ImageSection>
      </GetAppContainer>
    </MainWrapper>
  );
};

export default GetApp;
