import { StaticImageData } from "next/image";

export interface CardProps {
  image: string | StaticImageData;
  title: string;
  rating: number;
  category?: string;
  price: number;
}
