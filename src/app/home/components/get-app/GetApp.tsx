import React from "react";
import { MainWrapper, ContentSection, ImageSection } from "./styled";
import Image from "next/image";
import Logo from "@/assets/images/logos/W-LOGO.png"
import QRLogo from "@/assets/images/QR.webp"


const GetApp = () => {
  return (
    <MainWrapper>
      {/* Left side — content */}
      <ContentSection>
        <ImageSection>
          <Image src={Logo} alt="Logo" className="logo" />
        </ImageSection>
        <h2>Get Our App</h2>
        <p>
          Order your favorite food quickly and easily with our mobile app.
          Download now to enjoy exclusive offers and a seamless experience!
        </p>
        <div className="buttons">
          <button>Download for iOS</button>
          <button>Download for Android</button>
        </div>
      </ContentSection>

      {/* Right side — image */}
      <ImageSection>
        <Image src={QRLogo} alt="App Preview" />
      </ImageSection>
    </MainWrapper>
  );
};

export default GetApp;
