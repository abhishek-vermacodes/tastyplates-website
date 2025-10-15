// "use client";
// import React from "react";
// import Image from "next/image";

// import {
//   CardWrapper,
//   ImageWrapper,
//   Content,
//   Title,
//   Description,
//   PriceSection,
//   Price,
 
//   IconWrapper,
// } from "./styled";
// import { MenuItem } from "./type";
// import { IoCartOutline } from "react-icons/io5";


// interface MenuCardProps {
//   item: MenuItem;
// }

// export default function MenuCard({ item }: MenuCardProps) {
//   return (
//     <CardWrapper>
//       <ImageWrapper>
//         <Image
//           src={item.image}
//           alt={item.title}
//           width={120}
//           height={120}
//           style={{ borderRadius: "12px" }}
//         />
//       </ImageWrapper>

//       <Content>
//         <Title>{item.title}</Title>
//         <Description>{item.description}</Description>
//       </Content>

//       <PriceSection>
//         <Price>${item.price.toFixed(2)}</Price>
//           <IconWrapper>
//                     <IoCartOutline />
//                   </IconWrapper>
//       </PriceSection>
//     </CardWrapper>
//   );
// }

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import {
  CardWrapper,
  ImageWrapper,
  Content,
  Title,
  Description,
  PriceSection,
  Price,
  IconWrapper,
} from "./styled";
import { MenuItem } from "./type";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <Link
      href={`/shop/${item.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <CardWrapper>
        <ImageWrapper>
          <Image
            src={item.image}
            alt={item.title}
            width={120}
            height={120}
            style={{ borderRadius: "12px" }}
          />
        </ImageWrapper>

        <Content>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </Content>

        <PriceSection>
          <Price>${item.price.toFixed(2)}</Price>
          <IconWrapper>
            <IoCartOutline />
          </IconWrapper>
        </PriceSection>
      </CardWrapper>
    </Link>
  );
}
