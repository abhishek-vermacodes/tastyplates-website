// components/landing/AboutUsSection/styles.ts

import styled from 'styled-components';
import Link from 'next/link';

// Assume you have a theme file with your colors.
// theme.colors.primaryGreen = '#2E7D32';
// theme.colors.darkText = '#333333';
// theme.colors.lightBg = '#F8F9F8';

export const AboutSectionWrapper = styled.section`
  padding: 6rem 2rem;
  background-color: '#F8F9F8';
  overflow: hidden; // Prevents horizontal scroll on small screens
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative; 

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  flex-basis: 55%;
  background: #ffffff;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 2; 
  position: relative; 

  @media (max-width: 992px) {
    flex-basis: 100%;
    margin-bottom: -50px; 
    text-align: center;
  }

  @media (max-width: 576px) {
    padding: 2rem;
  }
`;

export const Headline = styled.h2`
  font-size: 2.4rem;
  color:  '#333';
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (max-width: 576px) {
    font-size: 2.2rem;
  }
`;

export const Subheading = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  color:  '#2E7D32';
  font-style: italic;
  margin-bottom: 1.5rem;
`;

export const BodyText = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
`;

export const CtaButton = styled(Link)`
  display: inline-block;
  background-color: '#2E7D32';
  color: #ffffff;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(46, 125, 50, 0.4);
  }
`;

export const ImageWrapper = styled.div`
  flex-basis: 60%;
  position: relative; // Set to relative for Next/Image fill to work
  min-height: 500px;
  z-index: 1;
  margin-left: -10%; // This creates the overlap
  border-radius: 8px;
  overflow: hidden; // Ensures image corners are rounded

  img {
    border-radius: 8px;
  }

  @media (max-width: 992px) {
    width: 100%;
    margin-left: 0;
    min-height: 400px;
    margin-top: 0;
  }
`;