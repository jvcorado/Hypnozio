import { Header } from "../../components/Header";
import { useEffect, useState, useRef } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export const Step24 = () => {
  const [percentual, setPercentual] = useState(0);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const step = 24;
  const queryString = location.search;
  const parametro = queryString.substring(queryString.indexOf("src="));

  const { idade, opcao, altura, peso, pesoDesejado } = useParams();
  // Use altura, peso, pesoDesejado conforme necessário

  console.log("Idade:", idade);
  console.log("Opção:", opcao);
  console.log("Altura:", altura);
  console.log("Peso:", peso);
  console.log("Peso Desejado:", pesoDesejado);

  useEffect(() => {
    const divs = document.querySelectorAll(".item");
    const loading = document.querySelector(".loading");

    const interval = setInterval(() => {
      setPercentual((prevPercentual) => {
        if (prevPercentual < 100 && loading) {
          const paragraph = loading.querySelector("p");
          if (paragraph) {
            paragraph.textContent = `${prevPercentual + 1}%`;
          }

          const index = (prevPercentual + 1) / 33 - 1;
          if (index >= 0 && index < divs.length) {
            const item = divs[index];
            if (item) {
              item.classList.add("ativo");
            }
          }
        }

        if (prevPercentual >= 100) {
          clearInterval(interval);
          const parametros =
            idade !== undefined && opcao !== undefined
              ? altura !== undefined &&
                peso !== undefined &&
                pesoDesejado !== undefined
                ? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  `/${idade}/${opcao}/${altura}/${peso}/${pesoDesejado}`
                : // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  `/${idade}/${opcao}`
              : idade !== undefined
              ? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                `/${idade || ""}`
              : "";

          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          const proximaRota = `/step/${step + 1}${parametros}/?${parametro}`;
          navigate(proximaRota);
        }

        return prevPercentual + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="bg-[#FBFDFF]   md:h-screen flex flex-col ">
      <Header
        id={25}
        isButtonDisabled={true}
        value={25 * 3.84615385}
        key={25}
      ></Header>
      <section className="quadro ultimo !border-0 !shadow-none !flex-col !items-center !gap-5 py-10 p-3 md:px-5 ">
        <div className="conteudo !border-0 !shadow-none !p-0">
          <div className="final !border-0 !shadow-none">
            <h2 className="!text-2xl !font-normal text-center">
              Seu programa está quase pronto!
            </h2>
            <div className="loading" ref={loadingRef}>
              <div className="circuloUm"></div>
              <div className="circuloDois"></div>
              <p>{percentual}%</p>
            </div>
          </div>
        </div>

        {/*      <div className="progresso !w-[30%] !bg-blue-gray-500 md:!w-[50%]  lg:!w-[40%]  xl:!w-[30%] md:!m-auto "> */}
        <div className="progresso  !w-[400px]  !m-auto">
          <div
            className={`item !w-full !border-2  ${
              percentual >= 33 ? "ativo" : ""
            }`}
            ref={(el) => (itemRefs.current[0] = el!)}
          >
            <div className="icone  flex gap-3 items-center">
              <BsFillCheckCircleFill
                style={{ color: "#3a5ba9" }}
              ></BsFillCheckCircleFill>
              <p>Sintomas</p>
            </div>
          </div>
          <div className="item  !w-full !border-2">
            <div className="icone  flex gap-3 items-center">
              <BsFillCheckCircleFill
                style={{ color: "#3a5ba9" }}
              ></BsFillCheckCircleFill>
              <p>Causas raiz</p>
            </div>
          </div>
          <div className="item  !w-full !border-2">
            <div className="icone  flex gap-3 items-center ">
              <BsFillCheckCircleFill
                style={{ color: "#3a5ba9" }}
              ></BsFillCheckCircleFill>
              <p>Metas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
