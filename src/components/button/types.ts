export interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset"; 
  disabled?: boolean;                 
  onClick?: () => void;  
  href?: string;  
  condition : boolean;            
}
