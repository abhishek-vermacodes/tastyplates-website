// import React from "react";
// import { BannerWrapper} from "./styled";
// import Image from "next/image";
// import heroImg from "@/assets/images/heroimg.svg";
// export const HeroSection = () => {
//   return (
//     <BannerWrapper>
//       <Image
//         className="banner-img"
//         src={heroImg}
//         alt="Banner Image"
//         width={800}
//         height={400}
//         style={{
//           maxHeight: "100vh",
//         }}
//       />
//     </BannerWrapper>
//   );

// };

"use client";

import React from "react";
import { BannerWrapper } from "./styled";

export const HeroSection = () => {
  return (
    <BannerWrapper>
      <video
        className="banner-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/fallback.jpg" // optional
      >
        <source src="/vid3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </BannerWrapper>
  );
};
