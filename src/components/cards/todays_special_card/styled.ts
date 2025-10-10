
import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 230px;
  height: 250px;
  border-radius: 16px;
  padding: 18px;
  position: relative;
  display: flex;
  border: 1px solid #6e9b4365;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: linear-gradient(145deg, #ffffff, #fafafa);
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.12);
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

  .card-img {
    border: 8px solid #fff;
    border-radius: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  ${CardWrapper}:hover & .card-img {
    transform: scale(1.05);
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
  color: #333333;
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
  color: #2e7d32;
`;
export const PriceBefore = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #999;
  text-decoration: line-through;
`;

export const BuyButton = styled.button`
  all: unset;
  font-size: 12px;
  background: linear-gradient(90deg, #5d833a, #88b557);
  color: white;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6d9b43ff;
    transform: scale(1.05);
   
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
  border: 1px solid #d97706ab;
  background-color: #ffedd569;
  color: #d97706;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 16px;
  text-transform: capitalize;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  color: #397431; /* Default icon color */
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    font-size: 1.4rem;
    transition: all 0.3s ease;
  }

  &:hover {
    background: #88b557;
    border-color: transparent;
    color: white;
    transform: scale(1.05);
  }
`;
