"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import logo from '@/assets/images/TLogo.png';
import {
  HeaderWrapper,
  HeaderSubWrapper,
  LogoContainer,
  NavList,
  NavItem,
  ButtonContainer,
  SignInButton,
  IconContainer,
  IconWrapper,
  SearchBarWrapper,
  SearchInput,
  SearchButton,
  RightSection,
} from "./styled";

export const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleToggleSearch = () => {
    setShowSearch((prev) => !prev);
  };
  return (
    <>
      <HeaderWrapper>
        <HeaderSubWrapper>
          <LogoContainer>
            <Image src={logo} alt="Kriotek Logo" className="logo-image" />
          </LogoContainer>

          <nav>
            <NavList>
              <NavItem>
                <Link href="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link href="/menu">Menu</Link>
              </NavItem>
              <NavItem>
                <Link href="/shop">Shop</Link>
              </NavItem>
              <NavItem>
                <Link href="/about">About</Link>
              </NavItem>
              <NavItem>
                <Link href="/contact">Contact</Link>
              </NavItem>
            </NavList>
          </nav>

          <RightSection>
            <IconContainer>
              <Icon
                icon={
                  <IoCartOutline
                    style={{ fontSize: "24px", color: "#3b5325" }}
                  />
                }
              />
              <Icon
                icon={
                  <IoMdHeartEmpty
                    style={{ fontSize: "24px", color: "#3b5325" }}
                  />
                }
              />
              <Icon
                icon={
                  showSearch ? (
                    <IoMdClose
                      style={{
                        fontSize: "24px",
                        color: "#3b5325",
                        cursor: "pointer",
                      }}
                      onClick={handleToggleSearch}
                    />
                  ) : (
                    <GoSearch
                      style={{
                        fontSize: "24px",
                        color: "#3b5325",
                        cursor: "pointer",
                      }}
                      onClick={handleToggleSearch}
                    />
                  )
                }
              />
            </IconContainer>

            <ButtonContainer>
              <SignInButton>Sign In</SignInButton>
            </ButtonContainer>
          </RightSection>
        </HeaderSubWrapper>
      </HeaderWrapper>
      {showSearch && (
        <SearchBarWrapper>
          <SearchInput
            type="text"
            placeholder="Search for dishes, restaurants..."
          />
          <SearchButton>
            <GoSearch style={{ fontSize: "25px", color: "#fff" }} />
          </SearchButton>
        </SearchBarWrapper>
      )}
    </>
  );
};

export const Icon = ({ icon }: { icon: ReactNode }) => {
  return <IconWrapper>{icon}</IconWrapper>;
};
