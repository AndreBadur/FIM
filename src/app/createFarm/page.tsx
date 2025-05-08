import InputText from "@/components/InputText"
import Button from "@/components/Button"
//Os componentes repetidos podem ser substituídos por um ForEach futuramente
export default function Home() {
    return <div className="flex flex-col justify-center items-center">
            <InputText/> 
            <InputText/>
            <InputText/>
            <InputText/>
            <Button titulo={"Botão"}/>
    </div>
}
