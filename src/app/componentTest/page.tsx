'use client'
import React, { useState } from 'react'
import { Button, Form } from 'react-aria-components'
import TextInput from '@/components/form/TextInput'
import { ColorArea, ColorThumb } from 'react-aria-components'

type nameAndPassword = {
    name: string
    password: string
}

function Example() {
    const [submitted, setSubmitted] = useState<FormDataEntryValue>('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data: FormDataEntryValue = Object.fromEntries(new FormData(e.currentTarget))
        const dataJson = JSON.stringify(data)
        const parseData: nameAndPassword = JSON.parse(dataJson)
        setSubmitted(parseData.password)
    }

    return (
        <div>
            <ColorArea>
                <ColorThumb />
            </ColorArea>
            <Form onSubmit={onSubmit}>
                <TextInput name="name" label="Nome" />
                <TextInput name="password" label="Senha" password={true} />

                <Button type="submit">Submit</Button>
                {submitted && (
                    <div>
                        You submitted: <code>{submitted.toString()}</code>
                    </div>
                )}
            </Form>
        </div>
    )
}
export default function ComponentTest() {
    return <Example />
}
