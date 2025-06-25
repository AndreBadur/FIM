'use client'
import {useEffect, useState} from 'react'
import {AriaTable} from '@/components/Table'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import {SupplyManagement, supplyType} from '@/classes/SupplyManagement'
import {Button} from 'react-aria-components'

export default function SupplyControl() {
    const [supplyList, setSupplyList] = useState<supplyType[]>([])

    useEffect(() => {
        const fetchSupplies = async () => {
            const supplyManagement = new SupplyManagement()
            const farmId = verifyFarmbyId()
            const supplies =
                await supplyManagement.listAllSuppliesByFarm(farmId)
            setSupplyList(supplies ?? [])
        }

        fetchSupplies()
    }, [])

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-4xl px-4">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-bold">Lista de Insumos</h1>
                    <a href="/supplyCreation">
                        <Button
                            onPress={() =>
                                (window.location.href = '/supplyCreation')
                            }
                            className="w-40 px-1 py-3 rounded-md shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold">
                            Adicionar
                        </Button>
                    </a>
                </div>
                <AriaTable tipo="supply" dados={supplyList} />
            </div>
        </div>
    )
}
