import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";

interface PageSelectedProps {
  step: number;
  pergunta: string;
  pergunta2?: string;
  opcoes: {
    text: string;
    emoji: string;
    isWoman?: boolean;
  }[];
  inicio: string;
  final: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PageSelected = ({
  step,
  pergunta,
  pergunta2,
  opcoes,
  inicio,
  final,
}: PageSelectedProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const { altura, opcao, peso, pesoDesejado, idade } = useParams();
  // Use altura, peso, pesoDesejado conforme necessário
  console.log("idade:", idade);
  console.log("Opção:", opcao);
  console.log("Altura:", altura);
  console.log("Peso:", peso);
  console.log("Peso Desejado:", pesoDesejado);

  const navigate = useNavigate();
  const location = useLocation();

  const queryString = location.search;
  const parametro = queryString.substring(queryString.indexOf("src="));

  const handleOptionClick = (optionText: string) => {
    if (selectedOptions.includes(optionText)) {
      setSelectedOptions(
        selectedOptions.filter(
          (selectedOption) => selectedOption !== optionText
        )
      );
    } else {
      setSelectedOptions([...selectedOptions, optionText]);
    }
  };

  const handleContinueClick = () => {
    // Aqui você pode lidar com o clique no botão "Continuar" com base nas opções selecionadas
    if (selectedOptions.length > 0) {
      console.log("Links selecionados:", selectedOptions);

      const parametros =
        idade !== undefined && opcao !== undefined
          ? altura !== undefined &&
            peso !== undefined &&
            pesoDesejado !== undefined
            ? `/${idade}/${opcao}/${altura}/${peso}/${pesoDesejado}`
            : `/${idade}/${opcao}`
          : idade !== undefined
          ? `/${idade || ""}`
          : "";

      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const proximaRota = `/step/${step + 1}${parametros}/?${parametro}`;

      navigate(proximaRota);
      // Redirecione o usuário para a próxima página ou realize qualquer outra ação necessária.
    } else {
      // Informe ao usuário para selecionar pelo menos uma opção antes de prosseguir.
      alert("Por favor, selecione pelo menos uma opção antes de prosseguir.");
    }
  };

  const isLinkDisabled = selectedOptions.length === 0;

  return (
    <section className="flex flex-col 2xl:h-screen items-center justify-center ">
      <Header inicio={inicio} final={final} />
      <ul className=" container m-auto flex flex-col min-h-[870px] overflow-x-auto items-center pt-10 justify-start px-3 md:px-5">
        <div className="w-full md:w-[60%] xl:w-[50%] 2xl:w-[30%]  flex flex-col items-start gap-10">
          <li className="flex flex-col w-full gap-2 " key={step}>
            <div className="flex flex-col gap-3 mb-5 ">
              <label className="text-start text-black w-full ">
                {pergunta}
              </label>
              <label
                className={`text-start text-black w-full ${
                  pergunta2 ? "" : "hidden"
                }`}
              >
                {pergunta2}
              </label>

              <p className="text-sm">Você pode selecionar quantos precisar.</p>
            </div>

            {opcoes.map((opcao) => (
              <label
                key={opcao.text}
                className={`w-[100%]  py-[16px] px-[24px] rounded-lg border  flex items-center justify-between cursor-pointer  ${
                  selectedOptions.includes(opcao.text)
                    ? "border-2 hover:border-[#00000083] bg-[#3a5ba984]"
                    : " text-gray-700 "
                } hover:shadow-2xl hover:text-black transition duration-300 ease-in-out border border-[#8aa8fcab]`}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(opcao.text)}
                  onChange={() => handleOptionClick(opcao.text)}
                  className="hidden "
                />
                <div>{opcao.text}</div>
              </label>
            ))}
          </li>

          <button
            onClick={handleContinueClick}
            className={`w-full py-4 sticky bottom-0 rounded-xl font-bold ${
              isLinkDisabled
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-[#3A5BA9] text-white hover:bg-[#3a5ba9a0] transition duration-300 ease-in-out"
            }`}
            disabled={isLinkDisabled}
          >
            Próximo
          </button>
        </div>
      </ul>
    </section>
  );
};
