import React from 'react';
import Image from 'next/image';
import {
    AboutSectionWrapper,
    ContentContainer,
    TextWrapper,
    Headline,
    Subheading,
    BodyText,
    CtaButton,
    ImageWrapper,
} from './styled';

import aboutUsImage from "@/assets/images/test-img.webp"; 

export const AboutUsSection = () => {
    return (
        <AboutSectionWrapper>
            <ContentContainer>
                <TextWrapper>
                    <Headline>Tasty Plate</Headline>
                    <Subheading>Where Italian tradition embraces the richness of the earth.</Subheading>
                    <BodyText>
                        At [Your Ristorante Name], we believe that the soul of Italian cuisine
                        lies in the purity of its ingredients. Our journey began with a simple
                        passion: to celebrate the vibrant, sun-kissed flavours of Italy
                        through a completely vegetarian lens. We honor age-old recipes, but
                        with a conscious choice for a greener plate, ensuring every dish is a
                        testament to our commitment to freshness and quality.
                    </BodyText>
                    <CtaButton href="/menu">Explore Our Menu</CtaButton>
                </TextWrapper>

                <ImageWrapper>
                    <Image
                        src={aboutUsImage}
                        alt="Hands making fresh vegetarian pasta"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                    />
                </ImageWrapper>
            </ContentContainer>
        </AboutSectionWrapper>
    );
};

