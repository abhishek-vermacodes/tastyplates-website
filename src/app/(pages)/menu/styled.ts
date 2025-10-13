import { SIZE_PERCENT, SPACING } from "@/theme";
import styled from "styled-components";

export const MenuSectionWrapper = styled.div`
  display: flex;
  width: ${SIZE_PERCENT.P100};
  /* height: 100vh; */
  padding: 120px 0;
  justify-content: center;
  align-items: center;
  background-color: #eff3eb;
  /* background-color: #ffffffff; */
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
padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 20px;
`;



