import { ButtonContainer } from "./Styles";
import { IButtonProps } from "./Types";

const Button = ({ title, onClick, disabled}: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={disabled} >{title}</ButtonContainer>;
};

export default Button;