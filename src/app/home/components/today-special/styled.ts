import styled from "styled-components";
import { SIZE_PERCENT } from "@/theme";

export const SectionWrapper = styled.section`
  width: ${SIZE_PERCENT.P100};
  height: 100vh;
  overflow: hidden;
  background-color: #EEF3EB;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ContentWrapper = styled.div`
  width: 80%;
  z-index: 3;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center ;
  gap: 100px;
 
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  width: 100%;
  justify-items: center;
`;
