'use client'

import {useState} from 'react'
import {FarmManagement, farmType} from '../classes/FarmManagements'
import {useRouter} from 'next/navigation'
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from 'react-aria-components'

const farmManagement = new FarmManagement()
const list = await farmManagement.listAllFarmsByFarmer('1')

if (list) {
    list.map((value) => {
        console.log(value.id_farm, value.corporate_name)
    })
}

export default function FarmCreation() {
    const [idFarmer, setIdFarmer] = useState<string>('')
    const [idAddress, setIdAddress] = useState<string>('')
    const [cnpj, setCnpj] = useState<string>('')
    const [corporateName, setCorporateName] = useState<string>('')
    const router = useRouter()

    return (
        <div className="flex flex-col items justify-center h-screen">
            <h1>CRIAR</h1>
            <form
                className="flex flex-col items-center justify-center h-screen"
                onSubmit={async (e) => {
                    e.preventDefault()
                    const teste = await farmManagement.createFarm(
                        {
                            id_address: Number(idAddress),
                            cnpj: cnpj,
                            corporate_name: corporateName,
                        },
                        `${idFarmer}`,
                    )
                    console.log(teste)
                }}>
                <h1>ID FARMER</h1>
                <input
                    className="border-black"
                    type="text"
                    name="setIdFamer"
                    onChange={(e) => {
                        setIdFarmer(e.target.value)
                    }}
                />

                <h1>ID ADDRESS</h1>
                <input
                    className="border-black"
                    type="text"
                    onChange={(e) => {
                        setIdAddress(e.target.value)
                    }}
                />

                <h1>CNPJ</h1>
                <input
                    className="border-black"
                    type="text"
                    onChange={(e) => {
                        setCnpj(e.target.value)
                    }}
                />

                <h1>CORPORATE NAME</h1>
                <input
                    className="border-black"
                    type="text"
                    onChange={(e) => {
                        setCorporateName(e.target.value)
                    }}
                />

                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    type="submit">
                    CRIAR FAZENDA
                </button>
            </form>

            <h1>ATUALIZAR</h1>
            <form
                className="flex flex-col items-center justify-center h-screen"
                onSubmit={async (e) => {
                    e.preventDefault()
                    const teste = await farmManagement.updateFarmByFarmId(
                        {
                            id_address: Number(idAddress),
                            cnpj: cnpj,
                            corporate_name: corporateName,
                        },
                        '1',
                        idFarmer,
                    )
                    console.log(teste)
                }}>
                {/* estou utilizando esse campo como se fosse o idFarm mas passando valor pro idFarmer, somente como forma de agilizar testes */}
                <h1>ID FARM</h1>
                <input
                    className="border-black"
                    type="text"
                    name="setIdFamer"
                    onChange={(e) => {
                        setIdFarmer(e.target.value)
                    }}
                />

                <h1>ID ADDRESS</h1>
                <input
                    className="border-black"
                    type="text"
                    onChange={(e) => {
                        setIdAddress(e.target.value)
                    }}
                />

                <h1>CNPJ</h1>
                <input
                    className="border-black"
                    type="text"
                    onChange={(e) => {
                        setCnpj(e.target.value)
                    }}
                />

                <h1>CORPORATE NAME</h1>
                <input
                    className="border-black"
                    type="text"
                    onChange={(e) => {
                        setCorporateName(e.target.value)
                    }}
                />

                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    type="submit">
                    ATUALIZAR FAZENDA
                </button>
            </form>

            <h1>BUSCAR UMA UNICA FAZENDA</h1>
            <form
                className="flex flex-col items-center justify-center h-screen"
                onSubmit={async (e) => {
                    e.preventDefault()
                    const teste = await farmManagement.findUniqueFarmByFarmId(
                        '1',
                        idFarmer,
                    )
                    if (teste) {
                        console.log(teste?.corporate_name)
                    } else {
                        router.push('/')
                    }
                }}>
                <h1>ID FARMER</h1>
                <input
                    className="border-black"
                    type="text"
                    name="setIdFamer"
                    onChange={(e) => {
                        setIdFarmer(e.target.value)
                    }}
                />
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    type="submit">
                    BUSCAR FAZENDA
                </button>
            </form>

            <h1>DELETAR UMA UNICA FAZENDA</h1>
            <form
                className="flex flex-col items-center justify-center h-screen"
                onSubmit={async (e) => {
                    e.preventDefault()
                    const teste = await farmManagement.deleteFarmByFarmId(
                        '1',
                        idFarmer,
                    )
                    console.log(teste)
                }}>
                <h1>ID FARMER</h1>
                <input
                    className="border-black"
                    type="text"
                    name="setIdFamer"
                    onChange={(e) => {
                        setIdFarmer(e.target.value)
                    }}
                />
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    type="submit">
                    DELETAR FAZENDA
                </button>
            </form>

            <Form
                onSubmit={async (e) => {
                    e.preventDefault()
                    const data = JSON.stringify(
                        Object.fromEntries(new FormData(e.currentTarget)),
                    )
                    console.log(data)
                    const parseData: farmType = JSON.parse(data)
                    console.log(parseData.id_address)

                    const teste = await farmManagement.createFarm(
                        {
                            id_address: Number(parseData.id_address),
                            cnpj: parseData.cnpj,
                            corporate_name: parseData.corporate_name,
                        },
                        `1`,
                    )
                    console.log(teste)
                }}>
                <TextField name="id_address" isRequired>
                    <Label>ID ADDRESS</Label>
                    <Input />
                    <FieldError />
                </TextField>
                <TextField name="cnpj" isRequired>
                    <Label>CNPJ</Label>
                    <Input />
                    <FieldError />
                </TextField>
                <TextField name="corporate_name" isRequired>
                    <Label>CORPORATE NAME</Label>
                    <Input />
                    <FieldError />
                </TextField>
                <div style={{display: 'flex', gap: 8}}>
                    <Button type="submit">Submit</Button>
                    <Button type="reset">Reset</Button>
                </div>
            </Form>
        </div>
    )
}
