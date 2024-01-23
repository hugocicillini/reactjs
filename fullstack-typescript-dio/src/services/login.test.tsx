import { login } from "./login"

describe('login', () => {

    const mockEmail = 'hugo@hugo.bank'
    const mockPass = '123'
    it('Deve exibir um alert com boas vindas caso o email e a senha sejam válidos', async() => {
        const response = await login(mockEmail, mockPass)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email ou a senha sejam inválidos', async() => {
        const response = await login('email@invalido.com', '12345')
        expect(response).toBeFalsy()
    })
})