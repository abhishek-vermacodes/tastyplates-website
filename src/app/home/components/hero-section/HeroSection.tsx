"use client";

import React from "react";
import { BannerTextContainer, BannerWrapper, Heading, HeroSectionDesc, Subheading } from "./styled";
import BannerLogo from "@/assets/images/bnl.png"
import Image from "next/image";
import { CommonButton } from "@/components";

export const HeroSection = () => {
  return (
    <>
    <BannerWrapper>
      <video
        className="banner-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/fallback.jpg"
      >
        <source src="/vid3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <BannerTextContainer>
        <div>
          <div style={{ position: "relative", width: "120px", height: "120px", margin: "0 auto", }}>
            <Image src={BannerLogo} alt="Description" layout="fill" objectFit="contain" style={{ width: "100%", height: "100%" }} />
          </div>
          <Heading>you taste and health is our priority</Heading>
        </div>
        <Subheading>The Best<span> Veg Cuisine</span><br /><span> Anytime,</span> Anywhere.</Subheading>
        <HeroSectionDesc>“Pure veg goodness in every bite! From classic favorites to continental delights, freshly made and delivered hot with live tracking to your home.”</HeroSectionDesc>
        <CommonButton onClick={() => alert("Clicked!")}>Learn More</CommonButton>

      </BannerTextContainer>
    </BannerWrapper>
    </>
  );
};


