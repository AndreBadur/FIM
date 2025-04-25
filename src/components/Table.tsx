import React from "react";

type Pessoa = {
  nome: string;
  idade: number;
  numero: string;
};

type Empresa = {
  cnpj: string;
  nome: string;
  email: string;
  cidade: string;
  numero: string;
};

type TipoTabela = "pessoa" | "empresa";

type Props = {
  tipo: TipoTabela;
  dados: Pessoa[] | Empresa[];
};

const TabelaGenerica: React.FC<Props> = ({ tipo, dados }) => {
    return (
      <table className="w-full border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-100">
            {tipo === "pessoa" && (
              <>
                <th className="p-2 border">Nome</th>
                <th className="p-2 border">Idade</th>
                <th className="p-2 border">Número</th>
              </>
            )}
            {tipo === "empresa" && (
              <>
                <th className="p-2 border">CNPJ</th>
                <th className="p-2 border">Nome</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Cidade</th>
                <th className="p-2 border">Número</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              {tipo === "pessoa" && (
                <>
                  <td className="p-2 border">{item.nome}</td>
                  <td className="p-2 border">{item.idade}</td>
                  <td className="p-2 border">{item.numero}</td>
                </>
              )}
              {tipo === "empresa" && (
                <>
                  <td className="p-2 border">{item.cnpj}</td>
                  <td className="p-2 border">{item.nome}</td>
                  <td className="p-2 border">{item.email}</td>
                  <td className="p-2 border">{item.cidade}</td>
                  <td className="p-2 border">{item.numero}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  

export default TabelaGenerica;
