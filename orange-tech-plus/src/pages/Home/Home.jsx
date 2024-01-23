import { useNavigate } from "react-router-dom"

import Header from "../../components/Header/Header"
import Button from "../../components/Button/Button"
import Banner from "../../assets/banner-dio.png"

import { Container, TextContent, Title, TitleHighlight } from "./Styles"

export default function Home() {

    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate("/login")
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente
                            <br />
                        </TitleHighlight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title={"Começar agora"} variant="secondary" onClick={handleClickSignIn}></Button>
                </div>
                <div>
                    <img src={Banner} alt="Imagem Principal" />
                </div>
            </Container>
        </>
    )
}
