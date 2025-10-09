"use client";
import React from "react";
import {
  Wrapper,
  HeadingContainer,
  Mainheading,
  Subheading,
  DescText,
  DescWrapper,
} from "./styled";
import LineBreak from "@/assets/icons/seprator.png";
import { TextProps } from "./types";
import Image from "next/image";

export const Heading = ({
  heading,
  subheading,
  desc,
  textAlign = "center",
  descAlign = "center",
  dividerline = true,
}: TextProps) => {
  return (
    <Wrapper $textAlign={textAlign}>
      <HeadingContainer>
        <Mainheading>{heading}</Mainheading>
      </HeadingContainer>

      {subheading && (
        <Subheading $textAlign={textAlign}>{subheading}</Subheading>
      )}

      {dividerline && (
        <Image src={LineBreak} alt="Line Break Divider" className="divider" />
      )}

      {desc && (
        <DescWrapper $textAlign={descAlign}>
          <DescText>{desc}</DescText>
        </DescWrapper>
      )}
    </Wrapper>
  );
};
