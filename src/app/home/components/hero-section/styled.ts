import styled from "styled-components";
import {
  
  SIZE_PERCENT,
 
} from "@/theme";

export const Title = styled.h1`
  font-family: var(--font-csbrian);
`;

export const Heading = styled.p``;




export const BannerWrapper = styled.section`
  width: ${SIZE_PERCENT.P100};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .banner-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* .banner-img {
    object-fit: cover;
    width: ${SIZE_PERCENT.P100};
    height: ${SIZE_PERCENT.P100};
    filter: brightness(0.8);
  } */
`;
