import React, { ChangeEvent, useState } from "react";
import { Header } from "../Header";
import { Input } from "@material-tailwind/react";
import { Link, useParams, useLocation } from "react-router-dom";

interface CommonPageProps {
  step: number;
  pergunta: string;
  inicio: string;
  final: string;
}

export const PageMedidas: React.FC<CommonPageProps> = ({
  step,
  pergunta,
  inicio,
  final,
}) => {
  const [altura, setAltura] = useState<number | string | undefined>();
  const [peso, setPeso] = useState<number | string | undefined>();
  const [pesoDesejado, setPesoDesejado] = useState<
    number | string | undefined
  >();

  const [isValid, setIsValid] = useState(false);

  const { idade, opcao } = useParams();

  const location = useLocation();
  const queryString = location.search;
  const parametro = queryString.substring(queryString.indexOf("src="));

  const handleAlturaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (!isNaN(value)) {
      setAltura(value);
      validateForm();
    } else {
      // Se o usuário não inserir um número, define o estado como vazio.
      setAltura("");
      // Ou você pode definir um estado de erro e exibi-lo no UI, se preferir.
      // setError("Por favor, insira um valor numérico para a altura.");
    }
  };

  const handlePesoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (!isNaN(value)) {
      setPeso(value);
      validateForm();
    } else {
      // Adicione um tratamento para o caso em que o input não é um número.
      // Por exemplo, você pode definir um estado para rastrear um erro e exibi-lo no UI.
      // Neste exemplo, estou apenas logando uma mensagem no console.
      setPeso("");
      console.error("Por favor, insira um valor numérico para a altura.");
      // Se preferir, pode definir um estado de erro e exibi-lo no UI.
    }
  };

  const handlePesoDesejadoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (!isNaN(value)) {
      setPesoDesejado(value);
      validateForm();
    } else {
      setPesoDesejado("");
      console.error("Por favor, insira um valor numérico para a altura.");
      // Se preferir, pode definir um estado de erro e exibi-lo no UI.
    }
  };

  const validateForm = () => {
    const isPesoDesejadoValid =
      pesoDesejado !== undefined && pesoDesejado < peso!;
    setIsValid(isPesoDesejadoValid);
  };

  const handleNext = () => {
    if (isValid) {
      // Navegar para a próxima rota ou realizar outras ações necessárias
    }
  };

  const calcularIMC = () => {
    if (altura !== undefined && pesoDesejado !== undefined) {
      const alturaMetros = Number(altura) / 100;
      const imcDesejado = Number(pesoDesejado) / (alturaMetros * alturaMetros);
      return imcDesejado;
    }
    return null;
  };

  const imcDesejado = calcularIMC();

  return (
    <section className="flex flex-col h-full md:h-screen">
      <Header inicio={inicio} final={final} />
      <div className="container m-auto flex flex-col items-center my-10 px-8 md:px-5">
        <div className="w-full md:w-[60%] xl:w-[50%] 2xl:w-[30%]  flex flex-col items-start gap-10">
          <h1 className="text-2xl md:text-xl !leading-[30px] text-start text-black w-full">
            {pergunta}
          </h1>
          {imcDesejado !== null && imcDesejado < 18.6 && (
            <p className="text-[#410002] p-3  text-sm text-left bg-[#FFDBDE] border rounded-md border-red-400">
              Seu peso alvo é considerado prejudicial à saúde. Seu IMC (índice
              de massa corporal) não deve ser inferior a 18,5. Consulte o seu
              médico antes de iniciar qualquer dieta ou ajustar o peso desejado.
            </p>
          )}
          {pesoDesejado !== undefined && pesoDesejado >= peso! && (
            <p className="text-[#410002] p-3  text-sm text-left bg-[#FFDBDE] border rounded-md border-red-400">
              Nosso programa é voltado para pessoas que desejam perder peso. Por
              favor insira um peso inferior ao seu peso atual
            </p>
          )}
          <div className="w-full flex flex-col gap-7">
            <Input
              size="lg"
              label="Altura"
              crossOrigin={undefined}
              placeholder="cm"
              className="placeholder:text-right placeholder:text-black placeholder:text-base h-[50px]"
              value={altura}
              onChange={handleAlturaChange}
            />
            <Input
              size="lg"
              label="Peso"
              placeholder="kg"
              crossOrigin={undefined}
              className="placeholder:text-right placeholder:text-black placeholder:text-base h-[50px]"
              value={peso}
              onChange={handlePesoChange}
            />
            <Input
              size="lg"
              label="Peso desejado"
              placeholder="kg"
              crossOrigin={undefined}
              className=" placeholder:text-right placeholder:text-black placeholder:text-base h-[50px]"
              value={pesoDesejado}
              onChange={handlePesoDesejadoChange}
            />

            <div className="flex gap-3 items-center">
              <svg
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C9.66667 21.4167 7.75 20.0625 6.25 17.9375C4.75 15.8125 4 13.4833 4 10.95V5L12 2L20 5V10.95C20 13.4833 19.25 15.8125 17.75 17.9375C16.25 20.0625 14.3333 21.4167 12 22ZM12 20.45C13.7667 19.8667 15.2292 18.7958 16.3875 17.2375C17.5458 15.6792 18.225 13.9333 18.425 12H12V3.625L5.5 6.05V10.95C5.5 11.15 5.50417 11.3208 5.5125 11.4625C5.52083 11.6042 5.54167 11.7833 5.575 12H12V20.45Z"
                  fill="#404040"
                ></path>
              </svg>
              <p className="text-xs">
                Seus dados pessoais estão seguros conosco. Não enviamos spam nem
                compartilhamos endereços de e-mail com terceiros.
              </p>
            </div>
          </div>
          {isValid &&
          pesoDesejado !== undefined &&
          pesoDesejado < peso! &&
          imcDesejado !== null &&
          imcDesejado > 18.6 ? (
            <Link
              to={`/step/${
                step + 1
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              }/${idade}/${opcao}/${altura}/${peso}/${pesoDesejado}/?${parametro}`}
              className="font-bold w-full bg-[#3a5ba9] text-white py-4 rounded-xl flex items-center justify-center hover:bg-[#3a5ba9d5]"
              onClick={handleNext}
            >
              Próximo
            </Link>
          ) : (
            <div className="font-bold w-full  text-white bg-gray-400  py-4 rounded-xl flex items-center justify-center cursor-not-allowed">
              Próximo
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
