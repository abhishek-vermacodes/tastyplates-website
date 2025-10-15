import { COLOR, SIZE_PERCENT, SIZE_PX } from "@/theme";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: ${SIZE_PERCENT.P100};
  position: fixed;
  top: ${SIZE_PX.PX_0};
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #eff3eb; */
  background: #e9ede3;
  z-index: 30;
  overflow-x: hidden;
  padding: 10px 0;

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderSubWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const LogoContainer = styled.div`
  width: 250px;
   display: flex;
   justify-content: center;
    align-items: center;
    
  .logo-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
    color:  #0b1629ff;
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


`;


export const SignInButton = styled.button`
  background-color: #5d833a;
  color: white;
 border: none;
  border-radius: 25px;
  padding: 0.6rem 2rem;
  font-weight: 600;
  cursor: pointer;


  &:hover {
    background-color: #3b5325;
   
  
   
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
  background-color: #5d833a1f;
  border-radius: 30px;
  padding: 8px;
  cursor: pointer;
  border: 1px solid #5d833a28;
`;


export const SearchBarWrapper = styled.div`
  width: 100%;
  background: transparent;

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
  background: #f5f5f5d0;
  max-width: 600px;
  padding: 0.8rem 1rem;
  border: 2px solid #5d833a;
  border-radius: 30px 0 0 30px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #3b3b3bff;
  }

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
