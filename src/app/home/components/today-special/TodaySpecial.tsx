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

export const TodaySpecial = () => {
  return (
    <SectionWrapper>
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

