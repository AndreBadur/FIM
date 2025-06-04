'use client'

import {AreaManagement, areaType} from '@/classes/AreaManagement'
import {FimComboBox} from '@/components/FimComboBox'
import React from 'react'

const areaManagement = new AreaManagement()
console.log(areaManagement)
const teste = areaManagement.listAllAreasByFarm('22')
console.log(teste)

import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    ListBoxItem,
    Key,
} from 'react-aria-components'

export default function AreaControl() {
    const FarmOptions = [
        {id: 60, name: 'Fazenda azul'},
        {id: 61, name: 'Fazenda verde'},
        {id: 62, name: 'Fazenda amarela'},
    ]

    const AreaOptions = [
        {id: 1, name: 'Área de descanso'},
        {id: 2, name: 'Área de cultivo'},
        {id: 3, name: 'Área de estoque'},
    ]

    const [farmId, setFarmId] = React.useState<Key | null>(null)
    const [typeAreaId, setTypeAreaId] = React.useState<Key | null>(null)

    return (
        <div>
            <div className="flex items-center justify-center flex-1 bg-gray-200 h-screen">
                <Form
                    onSubmit={async (e) => {
                        e.preventDefault()

                        const data = JSON.stringify(
                            Object.fromEntries(new FormData(e.currentTarget)),
                        )

                        console.log(data)

                        const parseData: areaType = JSON.parse(data)

                        return await areaManagement.createArea({
                            description: parseData.description,
                            capacity: parseData.capacity,
                            features: parseData.features,
                            id_farm: Number(farmId),
                            id_type_area: Number(typeAreaId),
                            name: parseData.name,
                            status: true,
                        })
                    }}>
                    <TextField name="name" isRequired>
                        <div className="flex flex-col">
                            <Label>Nome</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>

                    <TextField name="id_farm" isRequired>
                        <FimComboBox
                            label="Fazenda da área"
                            defaultItems={FarmOptions}
                            onSelectionChange={setFarmId}
                            allowsCustomValue>
                            {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
                        </FimComboBox>
                        <FieldError />
                    </TextField>

                    <TextField name="description" isRequired>
                        <div className="flex flex-col">
                            <Label>Descrição</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>
                    <TextField name="capacity" isRequired>
                        <div className="flex flex-col">
                            <Label>Capacidade</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>
                    <TextField name="features" isRequired>
                        <div className="flex flex-col">
                            <Label>Características</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>
                    <TextField name="id_type_area" isRequired>
                        <FimComboBox
                            label="Tipo de área"
                            defaultItems={AreaOptions}
                            onSelectionChange={setTypeAreaId}
                            allowsCustomValue>
                            {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
                        </FimComboBox>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center space-x-4">
                        <div className="flex bg-green-300 rounded justify-center space-x-4 w-3/5 mt-4">
                            <Button type="submit" className="w-full h-full">
                                Salvar
                            </Button>
                            {/* <Button type="reset">Reset</Button> */}
                        </div>
                        <div className="flex bg-red-300 rounded justify-center w-2/5 mt-4">
                            <a href="/areaControl">
                                <Button className="w-full h-full">
                                    Cancelar
                                </Button>
                            </a>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

// import {FarmManagement, farmType} from '@/classes/FarmManagements'
// import {useSearchParams} from 'next/navigation'
// import {Suspense, useEffect, useState} from 'react'

// const farmManagement = new FarmManagement()

// function UpdateWrapper() {
//     const searchParams = useSearchParams()
//     const idFarm = searchParams.get('id')
//     const farmerId = '1'

//     const [farmData, setFormData] = useState({
//         corporate_name: '',
//         cnpj: '',
//     })

//     const [shouldReload, setShouldReload] = useState(false)

//     useEffect(() => {
//         const fetchFarm = async () => {
//             if (!idFarm) return
//             const farm = await farmManagement.findUniqueFarmByFarmId(
//                 farmerId,
//                 idFarm,
//             )
//             if (farm) {
//                 setFormData({
//                     corporate_name: farm.corporate_name ?? '',
//                     cnpj: farm.cnpj ?? '',
//                 })
//             }
//         }
//         fetchFarm()
//     }, [shouldReload, idFarm])

//     if (!idFarm) return <div>Erro: id não fornecido</div>

//     return (
//         <div className="flex flex-row items-center justify-center h-full w-full">
//             <Form
//                 className="w-[320px] rounded-md p-4 shadow-xl"
//                 onSubmit={async (e) => {
//                     e.preventDefault()
//                     const data = JSON.stringify(
//                         Object.fromEntries(new FormData(e.currentTarget)),
//                     )
//                     const parseData: farmType = JSON.parse(data)

//                     await farmManagement.updateFarmByFarmId(
//                         {
//                             id_address: Number(parseData.id_address),
//                             cnpj: parseData.cnpj,
//                             corporate_name: parseData.corporate_name,
//                         },
//                         farmerId,
//                         idFarm,
//                     )
//                     setShouldReload(true)
//                     window.location.href = '/farmsControl'
//                 }}>
//                 <TextField name="corporate_name">
//                     <Label className="block text-sm font-medium text-black-700 mb-1">
//                         CORPORATE NAME
//                     </Label>
//                     <Input
//                         className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                         value={farmData.corporate_name}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...farmData,
//                                 corporate_name: e.target.value,
//                             })
//                         }
//                     />
//                     <FieldError />
//                 </TextField>
//                 <TextField name="cnpj" className="mt-3">
//                     <Label className="block text-sm font-medium text-black-700 mb-1">
//                         CNPJ
//                     </Label>
//                     <Input
//                         className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                         value={farmData.cnpj}
//                         onChange={(e) =>
//                             setFormData({...farmData, cnpj: e.target.value})
//                         }
//                     />
//                     <FieldError />
//                 </TextField>
//                 <div className="flex w-1/2 justify-self-end mt-3 gap-2">
//                     <Button
//                         type="button"
//                         className="w-full h-full px-1 py-1 rounded-md shadow-md border border-red-600 hover:bg-red-700 hover:text-white text-red-600 font-semibold"
//                         onPress={async () => {
//                             await farmManagement.deleteFarmByFarmId(
//                                 farmerId,
//                                 idFarm,
//                             )
//                             window.location.href = '/farmsControl'
//                         }}>
//                         Delete
//                     </Button>
//                     <Button
//                         type="submit"
//                         className="w-full h-full px-1 py-1  rounded-md text-center shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold">
//                         Submit
//                     </Button>
//                 </div>
//             </Form>
//         </div>
//     )
// }

// export default function UpdateTest() {
//     return (
//         <Suspense fallback={<div>Carregando...</div>}>
//             <UpdateWrapper />
//         </Suspense>
//     )
// }

// function UpdateWrapper() {
//     const searchParams = useSearchParams()
//     const idFarm = searchParams.get('id')

//     if (!idFarm) return <div>Erro: id não fornecido</div>

//     return <FarmUpdateForms farmerId="1" farmId={idFarm} />
// }
