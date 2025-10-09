"use client";
import React from "react";
import Image from "next/image";
import {
  CardWrapper,
  ImageContainer,
  CardContent,
  Title,
  Price,
  BuyButton,
  PriceButtonWrapper,
  CategoryTag,
  Rating,
} from "./styled";
import { CardProps } from "./type";
import { IoCartOutline } from "react-icons/io5";

export const TodaysSpecialCard = ({
  image,
  title,
  category,
  rating,
  price,
}: CardProps) => {
  return (
    <CardWrapper>
      <ImageContainer>
        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          className="card-img"
        />
      </ImageContainer>

      <CardContent>
        {category && <CategoryTag>{category}</CategoryTag>}
        <Title>{title}</Title>
        <Rating>{`⭐⭐⭐⭐⭐ (${rating})`}</Rating>
        <PriceButtonWrapper>
          <Price>{`$${price}`}</Price>
          <Price className="strike">
            <strike> {`$${price}`}</strike>
          </Price>
        </PriceButtonWrapper>
        <PriceButtonWrapper>
          <BuyButton>Buy Now</BuyButton>
          <IoCartOutline color="#397431" size={26}/>
        </PriceButtonWrapper>
      </CardContent>
    </CardWrapper>
  );
};
