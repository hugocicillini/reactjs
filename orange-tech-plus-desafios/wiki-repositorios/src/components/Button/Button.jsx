import { ButtonContainer } from "./Styles";

export default function Button({onClick}) {
    return (
        <ButtonContainer onClick={onClick}>
            Buscar
        </ButtonContainer>
    )
}
