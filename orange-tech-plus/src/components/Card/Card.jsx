import React from 'react'
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './Styles'
import {FiThumbsUp} from "react-icons/fi"

export default function Card() {
  return (
    <CardContainer>
        <ImageBackground src='https://media.licdn.com/dms/image/D4D16AQESwKrXFHUTRQ/profile-displaybackgroundimage-shrink_350_1400/0/1704990083814?e=1711584000&v=beta&t=ULKWWu9Pm5EqnKTNt3SPix3saORqB9MxNoXaem7MIQI'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/99136263?v=4' />
                <div>
                    <h4>Hugo Cicillini</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para o curso de HTML e CSS</h4>
                <p>Projeto feito para o curso de html e css no bootcamp dio do global avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
