const conta = {
    email: 'hugo@hugo.bank',
    pass: '123',
    name: 'Hugo Cicillini',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1000)
})
