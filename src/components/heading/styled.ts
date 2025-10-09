import {  COLOR,  SIZE_PX, SPACING } from "@/theme";
import styled from "styled-components";

type TextAlign = "left" | "center" | "right";


export const Wrapper = styled.div<{ $textAlign?: TextAlign }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: ${SPACING.P20};
  gap: ${SPACING.P12};
  align-items: ${({ $textAlign = "center" }) =>
    $textAlign === "left" ? "flex-start" : "center"};

  .divider {
    width: ${SIZE_PX.PX_100};
    height: ${SIZE_PX.PX_30};
    margin: 0;
    padding: 0;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACING.P20};

`;

export const Mainheading = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${COLOR.primary};
`;

export const Subheading = styled.h1<{ $textAlign?: TextAlign }>`
  font-family: var(--font-csbrian);
  text-align: ${({ $textAlign = "center" }) => $textAlign};
  font-size: 40px;
`;

export const DescText = styled.p`

`;

export const DescWrapper = styled.div<{ $textAlign?: TextAlign }>`
  text-align: ${({ $textAlign = "center" }) => $textAlign};
`;
