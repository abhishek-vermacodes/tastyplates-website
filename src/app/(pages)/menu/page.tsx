"use client";
import React, { useState } from "react";
import Image from "next/image";

import leafTopLeft from "@/assets/icons/tomato.png";
import leafBottomRight from "@/assets/icons/shape35.png";

import {
  MenuSectionWrapper,
  MenuWrapper,
  CategoryButtons,
  CategoryButton,
  CardGrid,
} from "./styled";
import { Heading } from "@/components";
import { MenuItem } from "./type";
import MenuCard from "@/components/cards/menu_card/MenuCard"; // ✅ import new MenuCard

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
  {
    id: 5,
    title: "BBQ Pizza TinTin",
    image: "/pizza.png",
    description:
      "Classic Italian pizza with olives, red onions, and mozzarella",
    category: "Pizza",
    price: 20,
    tags: ["Vegan"],
    rating: 4.7,
  },
  {
    id: 6,
    title: "BBQ Pizza TinTin",
    image: "/pizza.png",
    description:
      "Classic Italian pizza with olives, red onions, and mozzarella",
    category: "Pizza",
    price: 20,
    tags: ["Vegan"],
    rating: 4.7,
  },
  {
    id: 7,
    title: "BBQ Pizza TinTin",
    image: "/pizza.png",
    description:
      "Classic Italian pizza with olives, red onions, and mozzarella",
    category: "Pizza",
    price: 20,
    tags: ["Vegan"],
    rating: 4.7,
  },
  {
    id: 8,
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

function CategoryButtonGroup({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}) {
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

function Page() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu =
    activeCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <MenuSectionWrapper>
      {/* Background Decorative Images */}
      <Image
        src={leafTopLeft}
        alt="Decor 1"
        width={200}
        height={200}
        style={{
          position: "absolute",
          top: "80px",
          left: "40px",
          zIndex: 0,
          // opacity: 0.3,
        }}
      />
      <Image
        src={leafBottomRight}
        alt="Decor 2"
        width={200}
        height={200}
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          zIndex: 0,
          // opacity: 0.3,
        }}
      />

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
            <MenuCard key={item.id} item={item}  />
          ))}
        </CardGrid>
      </MenuWrapper>
    </MenuSectionWrapper>
  );
}

export default Page;
