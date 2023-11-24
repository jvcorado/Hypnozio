import { Link, useLocation, useParams } from "react-router-dom";

export const BotaoPlanos = () => {
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

  const proximaRota = `/step/26${parametros}/?${parametro}`;

  const handleButtonClick = () => {
    // Scroll até o topo da página
    window.scrollTo(0, 0);
  };

  return (
    <div className={``}>
      <Link
        to={proximaRota}
        onClick={handleButtonClick}
        className="font-bold w-full bg-[#3a5ba9] text-white py-4 rounded-xl flex items-center justify-center hover:bg-[#3a5ba9d5]"
      >
        Obter meu plano
      </Link>
    </div>
  );
};
