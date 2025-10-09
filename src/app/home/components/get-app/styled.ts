import styled from "styled-components";

export const MainWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 60px 80px;
  background-color: #161b1f;
  width: 100%;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }
`;

export const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .logo {
    width: 80px;
    height: auto;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 16px;
    color: #ffffff;
    line-height: 1.6;
    max-width: 450px;

    @media (max-width: 900px) {
      max-width: 100%;
    }
  }

  .buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 10px;

    button {
      background-color: #5d833a;
      color: #fff;
      border: none;
      padding: 12px 20px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #6d9b43;
      }
    }
  }

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  
  align-items: center;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 20px;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;
