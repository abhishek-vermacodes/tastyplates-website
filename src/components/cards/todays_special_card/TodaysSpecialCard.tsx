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
  IconWrapper,
  DiscountTag,
  RatingRow,
  PriceRow,
} from "./styled";
import { CardProps } from "./type";
import { IoCartOutline } from "react-icons/io5";
import Rating from "@mui/material/Rating";

export const TodaysSpecialCard = ({
  image,
  title,
  rating,
  price,
  discount
}: CardProps) => {
  const originalPrice = (price * 1.3).toFixed(2);
  return (
    <CardWrapper>
      <DiscountTag>Get {discount}% OFF</DiscountTag>
      <ImageContainer>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="card-img"
        />
      </ImageContainer>

      <CardContent>
        <Title>{title}</Title>
        <RatingRow>
          <Rating
            name="read-only"
            value={rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <span className="rating-text">({rating})</span>
        </RatingRow>

        <PriceRow>
          <Price className="final">${price}</Price>
          <Price className="strike">${originalPrice}</Price>
        </PriceRow>

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
