import { Center, Spinner, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { api } from "../api"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    return (
        <>
            {userData === undefined || userData === null ? (
                <Center>
                    <Spinner size='xl' color='white' />
                </Center>
            ) : (
                <>
                    <Text fontSize='3xl' fontWeight='bold'>
                        {`Bem vindo: ${userData?.name}`}
                    </Text>
                    <Text fontSize='xl'>
                        {`Email: ${userData?.email}`}
                    </Text>
                    <a href='/conta/1'>
                        Página Inicial
                    </a>
                </>
            )}
        </>
    );
}

export default ContaInfo
