import { StaticImageData } from "next/image";

type InfoCardProps = {
    imageSrc: StaticImageData | string;
    title: string;
    description: string;
    alt?: string;
};

export type { InfoCardProps };