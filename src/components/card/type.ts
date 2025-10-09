import { StaticImageData } from "next/image";

export interface CardProps {
  image: string | StaticImageData;
  title: string;
  // description: string;
  rating: number;
  category?: string;
  price: number;
}
