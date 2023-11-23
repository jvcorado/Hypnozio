import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import Opcao from "../Opcao";

interface CommonPageProps {
  step: number;
  pergunta: string;
  opcoes: {
    text: string;
    emoji: string;
    isWoman?: boolean;
  }[];
  isButtonDisabled?: boolean;
  isWoman?: boolean;
  isHidden?: boolean;
  isTransparent?: boolean;
  isLink?: boolean;
  inicio: string;
  final: string;
}

const CommonPage: React.FC<CommonPageProps> = ({
  step,
  pergunta,
  opcoes,
  inicio,
  final,
}) => {
  const { idade, opcao, altura, peso, pesoDesejado } = useParams();
  // Use altura, peso, pesoDesejado conforme necessário
  console.log("Idade:", idade);
  console.log("Opção:", opcao);
  console.log("Altura:", altura);
  console.log("Peso:", peso);
  console.log("Peso Desejado:", pesoDesejado);

  return (
    <section className="flex flex-col h-full md:h-screen ">
      <Header inicio={inicio} final={final} />
      <div className="container m-auto flex flex-col items-center  overflow-y-auto my-10 gap-7 px-3 md:px-5 ">
        <div className="w-full md:w-[60%] xl:w-[50%] 2xl:w-[30%]  flex flex-col items-start gap-10">
          <h1 className="text-2xl md:text-xl !leading-[30px] text-start text-black w-full">
            {pergunta}
          </h1>
          {/*   <h1 className="text-2xl md:text-xl !leading-[30px] text-start text-black w-full"> */}

          <div className=" w-full flex flex-col items-center justify-center gap-2">
            {opcoes.map((option, optionIndex) => (
              <Opcao
                step={step}
                key={optionIndex}
                text={option.text}
                isWoman={option.isWoman}
                parametros={
                  idade !== undefined && opcao !== undefined
                    ? altura !== undefined &&
                      peso !== undefined &&
                      pesoDesejado !== undefined
                      ? `/${idade}/${opcao}/${altura}/${peso}/${pesoDesejado}`
                      : `/${idade}/${opcao}`
                    : idade !== undefined
                    ? `/${idade || ""}`
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonPage;
