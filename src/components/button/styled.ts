"use client";
import {COLOR, SIZE_PX,} from "@/theme";
import Link from "next/link";
import styled, { css } from "styled-components";
import { buttonText, text18 } from "../typography";


const BaseButtonStyles = css`
  min-width: ${SIZE_PX.PX_160};
  min-height: ${SIZE_PX.PX_50};
  height: 20px;
  width: fit-content;
  position: relative;
  padding: 14px 30px;
  background: ${COLOR.primary};
  color: ${COLOR.white};
  cursor: pointer;
  overflow: hidden;
  border-radius: 50px;
  border: 2px solid transparent;
  transition: color 0.4s ease;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    background-color: ${COLOR.white};
    z-index: 0;
    border-radius: 50px;
    transition: left 0.4s ease;
  }

  &:hover {
    color: #5d833a;
  }

  &:hover:before {
    left: 0;
  }

  &:disabled {
    background-color: #d1cfcfff;
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media screen and (max-width: 600px) {
    padding: 12px 24px;
  }
`;

export const ButtonWrapper = styled(Link)`
  ${BaseButtonStyles};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none; 
`;

export const OnClickButtonWrapper = styled.button`
  ${BaseButtonStyles};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const ButtonText = styled.span`
  ${buttonText};
  text-align: center;
  z-index: 3;

  @media (max-width: 789.98px) {
   ${text18}
  }
`;
