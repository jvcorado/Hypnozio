/* import { Link, useLocation, useParams } from "react-router-dom";

interface BotaoProps {
  step: number;
}

export const Botao = ({ step }: BotaoProps) => {
  const location = useLocation();
  const { idade, opcao, altura, peso, pesoDesejado } = useParams();

  

  const parametros =
    idade !== undefined && opcao !== undefined
      ? altura !== undefined && peso !== undefined && pesoDesejado !== undefined
        ? `/${idade}/${opcao}/${altura}/${peso}/${pesoDesejado}`
        : `/${idade}/${opcao}`
      : idade !== undefined
      ? `/${idade || ""}`
      : "";

  const proximaRota = `/step/${step + 1}${parametros}`;

  return (
    <div className={``}>
      <Link
        to={proximaRota}
        className="font-bold w-full bg-[#3a5ba9] text-white py-4 rounded-xl flex items-center justify-center hover:bg-[#3a5ba9d5]"
      >
        Próximo
      </Link>
    </div>
  );
}; */

import { Link, useLocation, useParams } from "react-router-dom";

interface BotaoProps {
  step: number;
}

export const Botao = ({ step }: BotaoProps) => {
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

  return (
    <div className={``}>
      <Link
        to={proximaRota}
        className="font-bold w-full bg-[#3a5ba9] text-white py-4 rounded-xl flex items-center justify-center hover:bg-[#3a5ba9d5]"
      >
        Próximo
      </Link>
    </div>
  );
};
