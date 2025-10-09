"use client";

import React from "react";

import { HeroSection } from "./components";
import TodaySpecial from "./components/today-special/TodaySpecial";
import GetApp from "./components/get-app/GetApp";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <TodaySpecial/>
      <GetApp/>
    </>
  );
};
