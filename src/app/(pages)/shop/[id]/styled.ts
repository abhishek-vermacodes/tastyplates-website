import { COLOR, SIZE_PERCENT, SPACING } from "@/theme";
import styled from "styled-components";
import BgImage from "@/assets/images/easy-to-order-bg.png";

export const ProductSectionWrapper = styled.div`
  display: flex;
  width: ${SIZE_PERCENT.P100};
  position: relative;
  padding: 70px 0;
  justify-content: center;
  align-items: center;
  
  background-color: #ffffffff;
  flex-direction: column;
  gap: 50px;
`;


export const ShopWrapper = styled.div`
  display: flex;
 
flex-direction: column;
  width: 60%;

  gap: 50px;
`;

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  margin-bottom: 40px;

  a {
    color: #5d833a;
    text-decoration: none;
    font-weight: 500;
  }

  span {
    color: #be0d0dff;
  }
`;


export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  padding: 40px 20px;
  width: 100%;
 
`;

export const Details = styled.div`
width: 100%;
padding: 10px;
  display: flex;
  flex-direction: column;
  align-self: start;
  gap: 17px;
 


`;

export const Price = styled.h3`
  color: #5d833a;
 
  font-size: 25px;
  font-weight: 700;
`;

export const Current = styled.span`
  color: #222;
  font-weight: 600;
`;

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 90px 0;
  flex-direction: column;
  background-image: url(${BgImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ProductDetailContainer = styled.div`
  display: flex;

  gap: 80px;
  align-items: center;
  justify-content: center;
  
  
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 500;
  color: #333333;
`;


export const Description = styled.p`
  font-size: 18px;
  color: #555;
`;

export const Categories = styled.p`
  font-size: 18px;
  color: #555;
`;

export const Line = styled.div`
height: 1px;
width: 100%;
background-color: #e0e0e0;
`;


export const AddToCartButton = styled.button`
  padding: 9px 20px;
  border: none;
  border-radius: 6px;
  background-color: #5d833a;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLOR.primaryLight};
    transform: scale(1.05);
  }
`;



export const QuantityInput = styled.input.attrs({ type: "number", min: 1 })`
  width: 80px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 16px;

  &:focus {
    border-color: #000;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductInfoWrapper = styled.div`
 display: flex;
 flex-direction: column;


 gap: 20px;

`;

export const TabHeader = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #ddd;
 
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 3px solid
    ${({ $active }) => ($active ? "##5D833A" : "transparent")};
  color: ${({$active }) => ($active ? "##5D833A" : "#777")};
  transition: all 0.3s ease;

  &:hover {
    color: #5d833a;
  }
`;

export const TabContent = styled.div`
  font-size: 15px;
 
  color: #444;

  ul {
    padding-left: 20px;
    list-style-type: disc;
  }

  strong {
    color: #000;
  }
`;

export const Subtitle = styled.h3`
  font-size: 18px;

  color: #333333;
`;

export const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
 
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ReviewCard = styled.div`
  background: #fafafa;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
`;

export const ReviewerName = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #222;
`;


export const ReviewComment = styled.p`

  font-size: 15px;
  color: #555;
  line-height: 1.6;
`;

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);



  input,
  textarea {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: #000;
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }
`;

export const RatingSelector = styled.div`
  display: flex;
  gap: 6px;
`;

export const Star = styled.span<{ selected: boolean }>`
  font-size: 24px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? "#f5b301" : "#ccc")};
  transition: color 0.2s ease;

  &:hover {
    color: #f5b301;
  }
`;

export const SubmitButton = styled.button`
  background-color: #5d833a;
  font-size: 15px;
  width: 180px;
  color: #fff;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLOR.primaryLight};
    transform: scale(1.05);
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 32px;
  width: 100%;
`;


