import styled from "styled-components";


export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #f1f1f1ff; */
  background: #e9ede3;
`;
export const FooterContainer = styled.footer`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;  
    flex-direction: column;
`;

export const FooterLogoWrapper = styled.div`
   width: 250px;
   display: flex;
   flex-direction: column;
  .logo{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
 `;

export const CopyRightText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #575757ff;
  text-align: end;
  padding-right:8px ;
`;

export const FooterLinksWrapper = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;
`;

export const FooterLinksTitle = styled.h1`
text-transform: capitalize;
font-size: 18px;
font-weight: 600;
  font-family: var(--font-poppins);
`;

export const FooterLinksContainer = styled.ul`
all: unset;
display: flex;
flex-direction: column; 
gap: 10px;

.link {
    font-size: 16px;
    color: #575757ff;
    text-decoration: none;
}

`;

export const FooterLinks = styled.li`
all: unset;
`;

export const FooterBottomContainer = styled.div`
width: 100%;
padding: 40px 0px;
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
border-top: 2px solid #ccc;
`;


export const SocialLinksContainer = styled.div`
display: flex;
gap: 10px;
.social-icon {
    font-size: 20px;
}
`;

export const FooterText = styled.p`
font-size: 18px;
font-weight:500;
color: #333;
`;
