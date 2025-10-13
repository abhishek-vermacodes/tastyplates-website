import styled from "styled-components";
import { COLOR } from "@/theme";

export const CardWrapper = styled.div`
  position: relative;
  width: 300px;
  min-height: 350px;
  background: linear-gradient(180deg, #ffffff, #f7f9f6);
  border: 1px solid rgba(110, 155, 67, 0.25);
  border-radius: 20px;
  padding: 20px  ;
  display: flex;
  flex-direction: column;
  justify-content:flex-end;
  box-shadow: 0 6px 20px rgba(57, 116, 49, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 30px rgba(57, 116, 49, 0.2);
    background: linear-gradient(180deg, #ffffff, #eff9ed);
  }
`;

export const DiscountTag = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: linear-gradient(90deg, #f59e0b, #fbbf24);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 6px rgba(245, 158, 11, 0.4);
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  width: 200px;
  height: 200px;
  z-index: 5;
  border: 2px dashed #6e9b43;
  padding: 8px;
  border-radius: 50%;
  overflow: hidden;

  .card-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #fff;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 4px;
  padding-top: 20px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: ${COLOR.text.primary};
  line-height: 1.3;
  text-align: left;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .rating-text {
    font-size: 0.9rem;
    color: #666;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

export const Price = styled.span`
  &.strike {
    font-size: 16px;
    color: #999;
    text-decoration: line-through;
  }

  &.final {
    font-size: 20px;
    font-weight: 600;
    color: #3d6e2f;
  }
`;

export const BuyButton = styled.button`
  all: unset;
  background: linear-gradient(90deg, #5d833a, #6e9b43);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 10px 18px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(57, 116, 49, 0.3);
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background: linear-gradient(90deg, #6e9b43, #7fb956);
    box-shadow: 0 5px 12px rgba(57, 116, 49, 0.35);
  }
`;

export const PriceButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid #ffffffff;
  color: white;
  background-color: #5D833A;
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
    transform: scale(1.02);
  }
`;
