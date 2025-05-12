'use client'

import { Button, FieldError, Form, Input, Label, TextField } from 'react-aria-components'

export default function areaControl() {
    return (
        <div>
            <div className="flex">
                <div className="flex items-center justify-center flex-1 bg-black h-screen">
                    <h1 className="text-white text-2xl">Áreas!</h1>
                    <div>
                        <div className="flex">
                            <div className="flex items-center justify-center flex-1 bg-black h-screen">
                                <Form
                                /*onSubmit={async (e) => {
                                            e.preventDefault()
                                            const data = JSON.stringify(Object.fromEntries(new FormData(e.currentTarget)))
                                            const parseData: farmType = JSON.parse(data)
                        
                                            const teste = await farmManagement.createFarm(
                                                {
                                                    id_address: Number(parseData.id_address),
                                                    cnpj: parseData.cnpj,
                                                    corporate_name: parseData.corporate_name,
                                                },
                                                `1`,
                                            )
                                            console.log(teste)
                                        }}*/
                                >
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
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <Button type="submit">Submit</Button>
                                        {/* <Button type="reset">Reset</Button> */}
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
