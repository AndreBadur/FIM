'use client'

import {
    ListAddress,
    CreateAddressForms,
    ListAddressAlterations,
} from '@/components/forms/Address'

export default function AddressControl() {
    return (
        <div className="flex flex-col">
            <div className="flex w-full h-full">
                <div className="w-2/3 flex-col border rounded-md m-2 p-4">
                    <h1 className="font-bold p-2 text-center text-xl">
                        Tabela de endereços
                    </h1>
                    <ListAddress />
                </div>
                <div className="flex-col w-1/3 ">
                    <div className="flex flex-col justify-center items-center border rounded-md m-2 p-4">
                        <h1 className="font-bold p-2 text-center text-xl">
                            Formulario de criação de endereços
                        </h1>
                        <CreateAddressForms />
                    </div>
                </div>
            </div>
            <div className="flex-col grow border rounded-md m-2 p-4 ">
                <h1 className="font-bold p-2 text-center text-xl">
                    Registro de alterações de endereços
                </h1>
                <ListAddressAlterations />
            </div>
        </div>
    )
}
