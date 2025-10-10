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
  IconWrapper,
  PriceBefore,
} from "./styled";
import { CardProps } from "./type";
import { IoCartOutline } from "react-icons/io5";
import Rating from "@mui/material/Rating";

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

        <Rating
          name="read-only"
          value={rating}
          precision={0.5}
          readOnly
          size="small"
        />

        <PriceButtonWrapper>
          <Price>{`$${price}`}</Price>
          <PriceBefore>{`$${price}`}</PriceBefore>
        </PriceButtonWrapper>

        <PriceButtonWrapper>
          <BuyButton>Buy Now</BuyButton>
          <IconWrapper>
            <IoCartOutline />
          </IconWrapper>
        </PriceButtonWrapper>
      </CardContent>
    </CardWrapper>
  );
};
