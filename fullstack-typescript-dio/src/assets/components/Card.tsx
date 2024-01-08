import { ChakraProvider, Input, Box, Center, Button } from '@chakra-ui/react'
interface Card {
    text: string
}

import { login } from '../services/login'

export default function Card({ text }: Card) {
    return (
        <ChakraProvider>
            <Box backgroundColor={"#ffffff"} borderRadius={"25px"} padding={"15px"}>
                <Center>
                    <h1>{text}</h1>
                </Center>
                <Input placeholder="Email" />
                <Input placeholder="Password" type="password" />
                <Center>
                    <Button colorScheme="teal" size={"sm"} width={"100vw"} marginTop={"5px"}>Button</Button>
                </Center>
            </Box>
            <button onClick={login}></button>
        </ChakraProvider>
    )
}
