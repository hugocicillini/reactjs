import React from "react"
import Header from "../../components/Header/Header"
import Card from "../../components/Card/Card"

import { Column, Container, Title, TitleHighlight } from "./Styles"
import UserInfo from "../../components/UserInfo/UserInfo"

export default function Feed() {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={89} nome={"Hugo"} imagem={"https://avatars.githubusercontent.com/u/99136263?v=4"} />
                    <UserInfo percentual={67} nome={"Pedro"} imagem={"https://avatars.githubusercontent.com/u/99133091?v=4"} />
                    <UserInfo percentual={47} nome={"Arthur"} imagem={"https://avatars.githubusercontent.com/u/99134?v=4"} />
                    <UserInfo percentual={35} nome={"João"} imagem={"https://avatars.githubusercontent.com/u/99136210?v=4"} />
                    <UserInfo percentual={13} nome={"Mario"} imagem={"https://avatars.githubusercontent.com/u/9913?v=4"} />
                </Column>
            </Container>
        </>
    )
}
