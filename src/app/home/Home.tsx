"use client";

import React from "react";

import TodaySpecial from "./components/today-special/TodaySpecial";
import GetApp from "./components/get-app/GetApp";
import { AboutSection, EasyToOrder, HeroSection } from "./components";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <EasyToOrder />             
      <TodaySpecial/>
      <GetApp/>
      {/* <AboutSection /> */}
    </>
  );
};
