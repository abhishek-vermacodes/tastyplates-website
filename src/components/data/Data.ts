import { MenuItem } from "@/components/cards/menu_card/type";
export const menuData: MenuItem[] = [
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
