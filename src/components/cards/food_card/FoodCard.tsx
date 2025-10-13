"use client";
import React from "react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import {
  CardWrapper,
  ImageWrapper,
  Content,
  TagsRow,
  Tag,
  Title,
  Price,
  Description,
  AddToCartButton,
} from "./styled";
import { FoodCardItem } from "./type";

interface FoodCardProps {
  item: FoodCardItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  return (
    <CardWrapper>
      <TagsRow>
        <Tag>
          <FaRegStar size={14} color="#F6B100" style={{ marginRight: 4 }} />
          {item.rating}
        </Tag>
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsRow>

      <ImageWrapper>
        <Image src={item.image} alt={item.title} width={120} height={120} />
      </ImageWrapper>

      <Content>
        <Title>{item.title}</Title>
        <Price>${item.price.toFixed(2)}</Price>
        <Description>{item.description}</Description>
        <AddToCartButton>Add To Cart</AddToCartButton>
      </Content>
    </CardWrapper>
  );
}
