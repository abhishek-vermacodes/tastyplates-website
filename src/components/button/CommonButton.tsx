
"use client";

import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const StyledButton = styled.button`
  --c1: #ffffff; /* background color for text on hover */
  --c2: #5d833a; /* primary color */
  --size-letter: 16px;

  padding: 12px 24px;
  font-size: var(--size-letter);
  background-color: #5d833a92;
  border: calc(var(--size-letter) / 6) solid var(--c2);
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: 300ms cubic-bezier(0.83, 0, 0.17, 1);

  &:hover > span {
    color: var(--c1);
  }

  &:active {
    scale: 0.98;
    filter: brightness(0.9);
  }

  & > span {
    font-weight: 500;
    color: #abec6e;
    position: relative;
    z-index: 1;
    transition: color 700ms cubic-bezier(0.83, 0, 0.17, 1);
  }

  &::before,
  &::after {
    content: "";
    width: 150%;
    aspect-ratio: 1/1;
    scale: 0;
    transition: 600ms cubic-bezier(0.76, 0, 0.24, 1);

    background-color: var(--c2);
    border-radius: 50%;

    position: absolute;
    translate: -50% -50%;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    top: 100%;
    left: 100%;
  }

  &:hover::before,
  &:hover::after {
    scale: 1;
  }
`;

export const CommonButton: React.FC<CommonButtonProps> = ({ children, ...props }) => {
    return <StyledButton {...props}><span>{children}</span></StyledButton>;
};
