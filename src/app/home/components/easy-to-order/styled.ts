import styled from 'styled-components';
import BgImage from "@/assets/images/easy-to-order-bg.png"; 

export const EasyToOrderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-image: url(${BgImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #161815ff;
  background-color:'red'
  `;

export const EasyToOrderCardWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
    gap: 60px;
`;


