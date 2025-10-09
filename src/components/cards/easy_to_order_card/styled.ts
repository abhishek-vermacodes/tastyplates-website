import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 10px 20px rgba(93, 131, 58, 0.25);
  }

  &:hover .image {
    transform: scale(1.1);
  }
`;

export const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 8px;
  padding: 5px;

  .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  color: #5d833a;
  margin: 10px 0 5px;
  transition: color 0.3s ease;

  ${CardWrapper}:hover & {
    color: #3e5b28;
  }
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  max-width: 240px;
  transition: color 0.3s ease;

  ${CardWrapper}:hover & {
    color: #444;
  }
`;
