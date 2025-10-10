"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

import {
  MenuSectionWrapper,
  MenuWrapper,
  CategoryButtons,
  CategoryButton,
  CardGrid,
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
import { Heading } from "@/components";
import { MenuItem } from "./type";

const menuData: MenuItem[] = [
  {
    id: 1,
    title: "Burger Kingo",
    image: "/pizza.png",
    description: "Gorgonzola, mozzarella, taleggio, red onions, capers, olives",
    category: "Burger",
    price: 25,
    tags: ["Vegetarian"],
    rating: 4.6,
  },
  {
    id: 2,
    title: "French Fries",
    image: "/pizza.png",
    description:
      "Crispy fries topped with herbs, Parmesan cheese, and olive oil",
    category: "Snacks",
    price: 25,
    tags: ["Vegan", "Vegetarian"],
    rating: 4.9,
  },
  {
    id: 3,
    title: "Pizza BBQ TinTin",
    image: "/pizza.png",
    description: "Smoky BBQ sauce with mozzarella, capsicum, and red onions",
    category: "Pizza",
    price: 18,
    tags: ["Vegetarian"],
    rating: 4.8,
  },
  {
    id: 4,
    title: "BBQ Pizza TinTin",
    image: "/pizza.png",
    description:
      "Classic Italian pizza with olives, red onions, and mozzarella",
    category: "Pizza",
    price: 20,
    tags: ["Vegan"],
    rating: 4.7,
  },
];

const categories = ["All", "Burger", "Pizza", "Snacks"];

// Menu card component
function MenuCard(props: { item: MenuItem }) {
  const { item } = props;

  return (
    <CardWrapper>
      <TagsRow>
        <Tag>
          <Star size={14} color="#F6B100" style={{ marginRight: 4 }} />
          {item.rating}
        </Tag>
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsRow>
      <Content>
        <ImageWrapper>
          <Image src={item.image} alt={item.title} width={120} height={120} />
        </ImageWrapper>
      </Content>
      <div style={{  textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" }}>
        <div>
        <Title>{item.title}</Title>
        <Price>${item.price.toFixed(2)}</Price>
        </div>
        <Description>{item.description}</Description>
        <AddToCartButton>Add To Cart</AddToCartButton>
      </div>
    </CardWrapper>
  );
}

// Category button group component
function CategoryButtonGroup(props: {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}) {
  const { categories, activeCategory, setActiveCategory } = props;

  return (
    <CategoryButtons>
      {categories.map((cat) => (
        <CategoryButton
          key={cat}
          active={(cat === activeCategory).toString()} 
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </CategoryButton>
      ))}
    </CategoryButtons>
  );
}

// Main page
function Page() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu =
    activeCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <MenuSectionWrapper>
      <MenuWrapper>
        <Heading
          heading="MENU"
          subheading="Our Menu"
          textAlign="center"
          desc="Explore our diverse menu featuring a variety of delicious vegetarian dishes, crafted to satisfy every palate."
        />

        <CategoryButtonGroup
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <CardGrid>
          {filteredMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </CardGrid>
      </MenuWrapper>
    </MenuSectionWrapper>
  );
}

export default Page;
