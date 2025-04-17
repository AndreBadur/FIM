import { Title, Subtitle, Text, Label } from '@/components/Typography'
export default function designTest() {
    return (
        <div className="flex justify-center items-center">
            <div>
                <Title>Teste em titulo</Title>
                <Subtitle>Teste em subtitulo</Subtitle>
                <Text>Teste em texto comum</Text>
                <Label>Teste em labels</Label>
            </div>
        </div>
    )
}
