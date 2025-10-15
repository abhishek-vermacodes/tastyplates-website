import { COLOR } from "@/theme";
import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  width: 180px;
  margin-top: 16px;
`;

export const DropdownHeader = styled.div`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const DropdownItem = styled.div`
  padding: 10px 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${COLOR.primary};
    color: #fff;
  }
`;
