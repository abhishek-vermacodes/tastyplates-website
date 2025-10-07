import { BORDER, COLOR, SIZE_PERCENT, SIZE_PX } from "@/theme";
import styled, { keyframes } from "styled-components";

export const HeaderWrapper = styled.header`
  width: ${SIZE_PERCENT.P100};
  position: fixed;
  top: ${SIZE_PX.PX_0};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLOR.white};
  border-bottom: ${BORDER.LIGHT_GRAY};
  z-index: 30;
  overflow-x: hidden;

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    justify-content: space-between;
    z-index: 99999;
  }
`;

export const HeaderSubWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 575.98px) {
    width: 100%;
    padding: 0 15px;
  }
  @media (min-width: 576px) and (max-width: 1024.98px) {
    width: 100%;
    padding: 0 20px;
  }
  @media (min-width: 1025px) and (max-width: 1439.98px) {
    width: 90%;
  }
  @media (min-width: 1440px) and (max-width: 1919.98px) {
    width: 85%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  .logo-image {
    padding: 10px;
    width: fit-content;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: ${COLOR.text.primary};
    font-weight: 500;
    font-size: 1rem;
    padding-bottom: 4px;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      color: ${COLOR.primaryDark};
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 0%;
      height: 2px;
      background: linear-gradient(to right, #88b557, #3b5325);
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 900px) {
    display: none;
  }
`;


export const SignInButton = styled.button`
  background-color: #5d833a;
  color: white;
  border: 1px solid #5d833a;
  border-radius: 25px;
  padding: 0.6rem 2rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(93, 131, 58, 0.25);

  &:hover {
    background-color: #3b5325;
   
  
   
  }

 

  @media (max-width: 768px) {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5d833a14;
  border-radius: 30px;
  padding: 8px;
  cursor: pointer;
  border: 1px solid #5d833a21;
`;


export const SearchBarWrapper = styled.div`
  width: 100%;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  position: fixed;
  top: 80px; /* Adjust to your header height */
  left: 0;
  z-index: 25;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    top: 70px;
    padding: 0.8rem 0.5rem;
  }
`;

export const SearchInput = styled.input`
  width: 60%;
  max-width: 600px;
  padding: 0.8rem 1rem;
  border: 2px solid #5d833a;
  border-radius: 30px 0 0 30px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #3b5325;
  }

  @media (max-width: 768px) {
    width: 75%;
  }
`;

export const SearchButton = styled.button`
  background-color: #5d833a;
  border: 2px solid #5d833a;
  border-left: none;
  border-radius: 0 30px 30px 0;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3b5325;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;

  gap: 30px;

  @media (max-width: 900px) {
    gap: 1rem;
  }
`;
