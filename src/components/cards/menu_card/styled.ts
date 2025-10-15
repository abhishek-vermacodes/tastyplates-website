import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 580px;
  padding: 16px;
  display: flex;

  align-items: center;
  border: 1px solid rgba(110, 155, 67, 0.25);

  background: linear-gradient(180deg, #ffffff, #f7f9f6);
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(57, 116, 49, 0.1);
  position: relative;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 30px rgba(57, 116, 49, 0.2);
    background: linear-gradient(180deg, #ffffff, #eff9ed);
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #333333;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #333333;
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