import React from "react"

import { ButtonContainer } from "./Styles";

export default function Button({ title, variant = "primary", onClick }) {
    return (
        <ButtonContainer variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>
    );
}
