"use client";
import React from "react";
import Image from "next/image";
import BgImg from "@/assets/images/todayspecial.jpg";
import FoodImg from "@/assets/images/pizza (2).png";
import {
  SectionWrapper,
  ContentWrapper,
  CardContainer,
} from "./styled";
import {  Heading, TodaysSpecialCard } from "@/components";

const TodaySpecial = () => {
  return (
    <SectionWrapper>
      <Image
        className="banner-img"
        src={BgImg}
        alt="Banner Image"
        fill
        style={{ objectFit: "cover" }}
      />

      <ContentWrapper>
        <Heading
          heading="MENU SPECIAL"
          subheading="Today's Special Menu"
          textAlign="center"
        />

        <CardContainer>
          <TodaysSpecialCard
            image={FoodImg}
            title="Grilled Chicken"
            category="Pizza"
            // description="Juicy grilled chicken served with seasonal vegetables and special sauce."
            rating={4.5}
            price={99.99}
          />
          <TodaysSpecialCard
            image={FoodImg}
            title="Pasta Alfredo"
            category="Pizza"
            // description="Creamy Alfredo pasta with fresh herbs and parmesan cheese."
            rating={4.5}
            price={99.99}
          />
          <TodaysSpecialCard
            image={FoodImg}
            title="Pasta Alfredo"
            category="Pizza"
            // description="Creamy Alfredo pasta with fresh herbs and parmesan cheese."
            rating={4.5}
            price={99.99}
          />
          <TodaysSpecialCard
            image={FoodImg}
            title="Pasta Alfredo"
            category="Pizza"
            // description="Creamy Alfredo pasta with fresh herbs and parmesan cheese."
            rating={4.5}
            price={99.99}
          />
          <TodaysSpecialCard
            image={FoodImg}
            title="Pasta Alfredo"
            category="Pizza"
            // description="Creamy Alfredo pasta with fresh herbs and parmesan cheese."
            rating={4.5}
            price={99.99}
          />
          <TodaysSpecialCard
            image={FoodImg}
            title="Pasta Alfredo"
            category="Pizza"
            // description="Creamy Alfredo pasta with fresh herbs and parmesan cheese."
            rating={4.5}
            price={99.99}
          />
        </CardContainer>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default TodaySpecial;
