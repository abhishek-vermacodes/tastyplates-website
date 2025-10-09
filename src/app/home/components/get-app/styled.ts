import styled from "styled-components";

export const MainWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161b1f;
  padding-top: 40px;
`;

export const GetAppContainer = styled.div`


   width: 70%;
   display: flex;
   justify-content: space-between;

     
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
 justify-content: center;
  gap: 20px;
  padding: 10px;
`;

export const GetAppLogoContainer = styled.div`
  width: 20%;
  display: flex;
 justify-content: center;
 align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ImageSection = styled.div`
width: 500px;
 display: flex;
 justify-content: center;
 align-items: center;

  img {
    width: 100%;
    height: 100%;
   }
`;

export const TextContainer = styled.div`
 display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Heading = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #ffffff;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #ffffff;
  line-height: 1.6;
`;
