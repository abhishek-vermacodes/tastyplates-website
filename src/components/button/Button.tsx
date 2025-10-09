import { ButtonText, ButtonWrapper, OnClickButtonWrapper } from "./styled";

interface ButtonProps {
  buttonText?: string;
  route?: string;
  onClick?: () => void | Promise<void>;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  buttonText,
  route,
  onClick,
  children,
  type = "button",
}: ButtonProps) => {
  const content = <ButtonText>{children || buttonText}</ButtonText>;

  return route ? (
    <ButtonWrapper href={`/${route}`} passHref>
      {content}
    </ButtonWrapper>
  ) : (
    <OnClickButtonWrapper onClick={onClick} type={type}>
      {content}
    </OnClickButtonWrapper>
  );
};
