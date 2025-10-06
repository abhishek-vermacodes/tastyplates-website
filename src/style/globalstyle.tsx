"use client";
import { createGlobalStyle } from "styled-components";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const csBrian = localFont({
  src: [
    {
      path: "../assets/fonts/CSBrian/CSBrian-Regular_demo-BF669f14fec3fc2.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-csbrian",
  display: "swap",
});

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-poppins: ${poppins.style.fontFamily};
    --font-csbrian: ${csBrian.style.fontFamily};
  }

  html {
    scroll-behavior: smooth;
  }

  body, #__next {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: var(--font-poppins), sans-serif;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-family: var(--font-csbrian), var(--font-poppins), sans-serif;
  }

  p, input, button, textarea {
    margin: 0;
    padding: 0;
    font-family: var(--font-poppins), sans-serif;
  }

  ::placeholder {
    font-family: var(--font-poppins), sans-serif;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill {
    background-color: transparent;
    -webkit-box-shadow: 0 0 0 1000px white inset;
    -webkit-text-fill-color: #333;
  }

  ::-webkit-scrollbar {
    width: 10px; 
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3); 
    border: 2px solid white; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5); 
  }
`;

export { poppins, csBrian };
