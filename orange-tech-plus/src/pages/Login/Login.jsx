import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { api } from "../../services/Api"

import Header from "../../components/Header/Header"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"

import { Container, Title, Wrapper, Column, TitleLogin, SubtitleLogin, Row, EsqueciText, CriarText } from "./Styles"
import { MdEmail, MdLock } from "react-icons/md"

export default function Login() {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

            if (data.length && data[0].id) {
                navigate('/feed');
                return;
            }

            alert('Usuário ou senha inválido');
        } catch (error) {
            console.error('Error fetching data from API:', error);
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}