"use client";

import React from "react";

import GetApp from "./components/get-app/GetApp";
import { AboutSection, EasyToOrder, HeroSection, TodaySpecial } from "./components";

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
