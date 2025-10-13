"use client";

import React from "react";

import GetApp from "./components/get-app/GetApp";
import {AboutUsSection, Contact, EasyToOrder, HeroSection, TodaySpecial } from "./components";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <EasyToOrder />             
      <AboutUsSection />
      <TodaySpecial/>
      <GetApp />
      <Contact />
    </>
  );
};
