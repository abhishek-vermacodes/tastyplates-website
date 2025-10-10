import styled from "styled-components";
import { SIZE_PERCENT, SPACING } from "@/theme";

export const SectionWrapper = styled.section`
  position: relative;
  width: ${SIZE_PERCENT.P100};
  height: 100vh;
  overflow: hidden;
  /* background-color: #ebebeb;*/
  background-color: #ffffff;

  .banner-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
    z-index: 1;
  }
`;


export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
  color: white;
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SPACING.P30};
 
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 3 cards per row */
  gap: ${SPACING.P100};
  width: 100%;
  margin-top: ${SPACING.P100};
  /* align-items: center; */
  justify-items: center;
`;
