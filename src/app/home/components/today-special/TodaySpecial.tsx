"use client";
import React from "react";
import FoodImg from "@/assets/images/pizza (2).png";
import Indian from "@/assets/images/plates/indian.png";
import Italian from "@/assets/images/plates/italian.png";
import Thai from "@/assets/images/plates/thai.png";
import {
  SectionWrapper,
  ContentWrapper,
  CardContainer,
} from "./styled";
import { Heading, TodaysSpecialCard } from "@/components";
import leafTopLeft from "@/assets/icons/shape36.png";
import leafBottomRight from "@/assets/icons/shape35.png";

import Image from "next/image";

export const TodaySpecial = () => {
  return (
    <SectionWrapper>

        <Image
              src={leafTopLeft}
              alt="Decor 1"
              width={180}
              height={180}
              style={{
                position: "absolute",
                top: "40px",
                left: "40px",
                zIndex: 0,
                // opacity: 0.3,
              }}
            />
            <Image
              src={leafBottomRight}
              alt="Decor 2"
              width={200}
              height={200}
              style={{
                position: "absolute",
                bottom: "40px",
                right: "40px",
                zIndex: 0,
                // opacity: 0.3,
              }}
            />
      <ContentWrapper>
        <Heading
          heading="MENU SPECIAL"
          subheading="Today's Special Menu"
          textAlign="center"
          desc="Enjoy the authentic taste of continental cuisine, reimagined with a modern, fresh touch."
        />
        <CardContainer>
          <TodaysSpecialCard
            image={Indian}
            title="Indian Veg Thali"
            rating={4.5}
            price={60}
            discount={50}
          />
          <TodaysSpecialCard
            image={Italian}
            title="Pasta Alfredo"
            rating={4.5}
            price={20}
            discount={30}
          />
          <TodaysSpecialCard
            image={FoodImg}
            title="Pizza Ortolana"
            rating={4.5}
            price={28}
            discount={20}
          />
          <TodaysSpecialCard
            image={Thai}
            title="Thai Veg Bowl"
            rating={4.5}
            price={37}
            discount={60}
          />

        </CardContainer>
      </ContentWrapper>
    </SectionWrapper>
  );
};

