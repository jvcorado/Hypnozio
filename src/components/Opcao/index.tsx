// Importe as bibliotecas necessárias
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Defina as propriedades aceitas pelo componente Opcao
interface OpcaoProps {
  text: string;
  step: number;
  isWoman?: boolean;
  parametros?: string;
}

// Componente funcional Opcao
const Opcao: React.FC<OpcaoProps> = ({ step, text }) => {
  // Obtenha os parâmetros da URL usando useLocation
  const location = useLocation();
  const queryString = location.search;
  const parametro = queryString.substring(queryString.indexOf("src="));

  // Define as variáveis idade, opcao, altura, peso, pesoDesejado (substitua-as com os valores reais)
  const { idade, opcao, altura, peso, pesoDesejado } = useParams();

  // Construa a string de parâmetros com base nas variáveis definidas
  const parametros =
    idade !== undefined && opcao !== undefined
      ? altura !== undefined && peso !== undefined && pesoDesejado !== undefined
        ? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `/${idade}/${opcao}/${altura}/${peso}/${pesoDesejado}`
        : // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `/${idade}/${opcao}`
      : idade !== undefined
      ? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `/${idade || ""}`
      : "";

  // Construa a próxima rota incluindo parâmetros e a queryString
  const proximaRota = `/step/${step + 1}${parametros}/?${parametro}`;

  // Renderize o componente com um Link para a próxima rota
  return (
    <Link
      to={proximaRota}
      className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
    >
      <div className="flex items-center gap-8">
        <p className="text-base leading-5">{text}</p>
      </div>
    </Link>
  );
};

// Exporte o componente Opcao
export default Opcao;
