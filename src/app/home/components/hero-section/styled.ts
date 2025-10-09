import styled from "styled-components";
import { SIZE_PERCENT} from "@/theme";

export const BannerTextContainer = styled.div`
  position: absolute;
  top: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ffffffd3;
  gap: 40px;
`;

export const Heading = styled.h1`
  color: #5D833A;
  font-size: 18px;
  font-weight: 600;
  text-shadow: black 0px 0px 20px;
  `;

export const Subheading = styled.h2`
   font-family: var(--font-poppins);
   font-size: 78px;
   line-height: 1.2;
   font-weight: 700;

   span{
      font-weight: 200;
   }
`;

export const BannerWrapper = styled.section`
  width: ${SIZE_PERCENT.P100};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
    z-index: 0;

  .banner-video {
    width: 100%;
    height: 80%;
    object-fit: cover;
    filter: brightness(0.3);
  }
`;

export const HeroSectionDesc = styled.p`
  max-width: 800px;
  font-size: 18px;
  line-height: 1.5;
  `;



