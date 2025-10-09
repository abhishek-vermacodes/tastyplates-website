"use client";

import React from "react";
import Image from "next/image";
import { CardWrapper, ImageContainer, CardTitle, CardDescription } from "./styled";
import { InfoCardProps } from "./types";


export const InfoCard = ({ imageSrc, title, description, alt = "card image" }: InfoCardProps) => {
    return (
        <CardWrapper>
            <ImageContainer>
                <Image src={imageSrc} alt={alt} className="image" />
            </ImageContainer>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardWrapper>
    );
};