import { useNavigate } from "react-router-dom"

import Logo from "../../assets/logo-dio.png"
import Button from "../Button/Button"

import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from './Styles'

export default function Header({ autenticado }) {
    const navigate = useNavigate()

    const handleClickHome = () => {
        navigate("/")
    }

    const handleClickLogin = () => {
        navigate("/login")
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} alt={"Logo Dio"} />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}

                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/99136263?v=4' />
                    ) : (
                        <>
                            <Button onClick={handleClickHome} title={"Home"}></Button>
                            <Button onClick={handleClickLogin} title={"Entrar"}></Button>
                            <Button onClick={handleClickLogin} title={"Cadastrar"}></Button>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}
