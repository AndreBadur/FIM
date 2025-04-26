'use client'
import Button from '@/components/Button'

const teste = () => {
    console.log('test button: OK!')
}
export default function ComponentTest() {
    return <Button titulo="1" onClick={teste} secundaryButton={true} />
}
