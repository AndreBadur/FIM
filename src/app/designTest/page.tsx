import { Title, Subtitle, Text, Label } from '@/components/Typography'
import TabelaGenerica from '@/components/Table';
export default function designTest() {

    const pessoas = [
        { nome: "João", idade: 28, numero: "11987654321" },
        { nome: "Maria", idade: 34, numero: "11912345678" }
      ];
    
      const empresas = [
        {
          cnpj: "12.345.678/0001-90",
          nome: "Tech S.A.",
          email: "contato@tech.com",
          cidade: "São Paulo",
          numero: "1144556677"
        }
      ];

    return (
        <div className="flex justify-center items-center">
            <div>
                <Title>Teste em titulo</Title>
                <Subtitle>Teste em subtitulo</Subtitle>
                <Text>Teste em texto comum</Text>
                <Label>Teste em labels</Label>

                <h1 className="text-xl font-bold mb-4">Lista de Pessoas</h1>
                <TabelaGenerica tipo="pessoa" dados={pessoas} />

                <h1 className="text-xl font-bold mb-4">Lista de Empresas</h1>
                <TabelaGenerica tipo="empresa" dados={empresas} />
            </div>
        </div>
    )
}
