import { COLOR } from "@/theme";
import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 210px;
  height: 230px;
  background-color: #dce7d1ff;
  border-radius: 16px;
  padding: 14px;
  position: relative;
  display: flex;
  
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -45px;
  left: 68%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border-radius: 50%;
  z-index: 10;

  .card-img {
    border: 8px solid #0c0f11;
    border-radius: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: start;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
  /* height: 100%; */
`;



export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color:${COLOR.text.primary};
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;

`;

export const Rating = styled.div`
  font-size: 14px;
  color: #333;
`;

export const Price = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #555;
`;

export const BuyButton = styled.button`
  all: unset;
  font-size: 12px;
  background-color: #5d833a;
  color: white;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #6d9b43ff;
  }
`;

export const PriceButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  width: 100%;
`;

export const CategoryTag = styled.div`
  position: absolute;
  top: 10px;
 left: 10px;
 border: 1px solid #ccc;
  background-color: #ffedd569;
  color: #d97706;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 16px;
  text-transform: capitalize;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  /* z-index: 11; */
`;
