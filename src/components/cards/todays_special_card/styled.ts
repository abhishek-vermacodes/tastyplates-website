import { COLOR } from "@/theme";
import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 230px;
  height: 250px;
  border-radius: 16px;
  padding: 16px;
  position: relative;
  display: flex;
  border: 1px solid #6e9b4365;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: #ffffffc4;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
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
    border: 8px solid #f5f5f5;
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

  .strike {
    font-weight: 500;
    font-size: 18px;
  }
`;

export const CategoryTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  border: 1px solid #d97706ab;
  background-color: #ffedd569;
  color: #d97706;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 16px;
  text-transform: capitalize;
`;
