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
          <BuyButton>Buy Now</BuyButton>
        </PriceButtonWrapper>
      </CardContent>
    </CardWrapper>
  );
};
