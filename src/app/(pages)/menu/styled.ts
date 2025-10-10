import { SIZE_PERCENT, SPACING } from "@/theme";
import styled from "styled-components";

export const MenuSectionWrapper = styled.div`
  display: flex;
  width: ${SIZE_PERCENT.P100};
  height: 100vh;
  padding: 120px 0;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${SPACING.XXL};
  width: 80%;
`;

export const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const CategoryButton = styled.button<{ active?: string }>`
  background-color: ${({ active }) => (active === "true" ? "#5D833A" : "#fff")};
  border: 1px solid #ccc;
  color: ${({ active }) => (active === "true" ? "#fff" : "#000")};
  font-size: 12px;
  border-radius: 50px;
  padding: 10px 22px;
  font-weight: 600;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5d833a;
    color: #fff;
  }
`;

export const CardGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CardWrapper = styled.div`
  width: 280px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  position: relative;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
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

export const Content = styled.div``;

export const TagsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.4;
`;

export const Price = styled.span`
  color: #e11d07;
  font-weight: 500;
  font-size: 18px;
`;

export const AddToCartButton = styled.button`
  background-color: #5d833a;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #88b557;
  }
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eef6eb;
  color: #397431;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 500;
`;
