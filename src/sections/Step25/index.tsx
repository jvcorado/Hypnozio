import { useParams } from "react-router-dom";
import Logo from "../../assets/image/logo-hipnozio.svg";
import Graph from "../../assets/image/graph.png";
import GraphGreen from "../../assets/image/graph-green.svg";
import Approved from "../../assets/image/approved.svg";
import Hourglass from "../../assets/image/hourglass-red.svg";
import Compulsao from "../../assets/image/binge_eating.svg";
import Digestao from "../../assets/image/poor_digestion.svg";
import Dieta from "../../assets/image/chronic_dieting.svg";
import Comer from "../../assets/image/emotional_eating.svg";
import Vontade from "../../assets/image/will_power.svg";
import Peso from "../../assets/image/peso.svg";
import Iphone from "../../assets/image/translated.jpg";
import { BotaoPlanos } from "../../components/BotaoPlanos";
import { IoMdCheckmark } from "react-icons/io";

const info = [
  {
    icon: Comer,
    title: "Comer emocional",
    text: "A hipnoterapia pode interromper a alimentação emocional, descobrindo por que isso acontece e ensinando melhores maneiras de lidar com a situação.",
  },
  {
    icon: Compulsao,
    title: "Compulsão alimentar",
    text: "A hipnoterapia combate os gatilhos emocionais e promove hábitos alimentares mais saudáveis ​​para superar a compulsão alimentar.",
  },
  {
    icon: Digestao,
    title: "Má digestão",
    text: "A hipnoterapia melhora a má digestão, reduzindo o estresse, promovendo o relaxamento e abordando os fatores emocionais subjacentes.",
  },
  {
    icon: Vontade,
    title: "Força de vontade",
    text: "A hipnoterapia aumenta a força de vontade para perder peso, promovendo hábitos positivos, reduzindo desejos e abordando barreiras psicológicas.",
  },
  {
    icon: Dieta,
    title: "Dieta crônica",
    text: "A hipnoterapia pode quebrar o ciclo da dieta crônica, abordando causas emocionais e psicológicas, promovendo uma relação saudável com a comida e o corpo.",
  },
];

export const Step25 = () => {
  const { idade, altura, peso, pesoDesejado } = useParams();
  // Use altura, peso, pesoDesejado conforme necessário
  console.log("Idade:", idade);
  console.log("Altura:", altura);
  console.log("Peso:", peso);
  console.log("Peso Desejado:", pesoDesejado);

  const Idade = idade ? parseInt(idade, 10) : 0;

  const IdadeMetabolica = Idade + 5;

  const alturaMetros = altura ? parseInt(altura) / 100 : 0;
  const imcDesejado = pesoDesejado
    ? parseInt(pesoDesejado) / (alturaMetros * alturaMetros)
    : 0;

  // Ensure peso and pesoDesejado are defined before performing arithmetic operations
  if (peso !== undefined && pesoDesejado !== undefined) {
    const diferencaDePeso = parseFloat(peso) - parseFloat(pesoDesejado);

    return (
      <>
        <div className="container m-auto px-8 md:px-0 py-5">
          <header className="w-full  mb-12">
            <img src={Logo} alt="Hypnozio" className="w-[130px]" />
          </header>
          <div className="gap-10 flex flex-col items-center justify-center ">
            <div className="text-center 2xl:w-[60%] m-auto flex flex-col gap-5">
              <h1 className="text-3xl md:text-4xl leading-10">
                É provável que Hypnosia funcione para você!
              </h1>

              <p className="text-lg md:text-2xl leading-7">
                89% das pessoas semelhantes a você atingiram o peso desejado
                após terminarem o programa.
              </p>
              <p className="text-lg md:text-2xl  leading-7">
                Você perderá{" "}
                <span className="text-red-500 font-bold">
                  {diferencaDePeso}kg
                </span>{" "}
                até janeiro de 2024
              </p>
            </div>
            <div className="hidden 2xl:block relative h-[400px] border rounded-lg shadow-xl w-[50%] m-auto mt-10 p-10">
              {/* Hoje */}

              <div className=" relative top-[-170px]">
                <div className="shadow-xl bg-red-100 relative top-[200px] left-4 w-[100px] py-1 rounded-lg flex flex-col  items-center justify-center">
                  <p className="font-semibold">Hoje</p>
                  <p className="text-red-800 font-bold">{peso}kg</p>
                </div>
                <div className="relative top-[205px] left-[50px] w-[30px] h-[30px] rounded-full bg-white border-[5px] border-red-300"></div>
                {/* Futuro */}
                <div className="shadow-xl bg-[#DAE2FF] relative top-[250px] left-[430px] w-[150px] py-1 rounded-lg flex flex-col  items-center justify-center">
                  <p className="font-semibold text-center">Com Hipnosia</p>
                  <p className="text-[#3A5BA9] font-bold">{pesoDesejado}kg</p>
                </div>
                <div className="relative top-[255px] left-[490px] w-[30px] h-[30px] rounded-full bg-white border-[5px] border-[#BDDCFF]"></div>
                {/* Grafico */}
                <img src={Graph} alt="grafíco" />
                <div className="flex justify-between py-3 px-10">
                  <p>Hoje</p>
                  <p>Janeiro de 2024</p>
                </div>
              </div>
            </div>

            {/* SM -GRAFICO */}
            <div className="block sm:hidden relative h-[300px] border rounded-lg shadow-xl w-full m-auto mt-10 py-5 px-5">
              {/* Hoje */}

              <div className=" relative top-[-8rem]">
                <div className="shadow-xl bg-red-100 relative top-[9rem] left-4 w-[5rem] py-1 rounded-lg flex flex-col  items-center justify-center">
                  <p className="text-xs font-semibold">Hoje</p>
                  <p className="text-red-800 font-bold">{peso}kg</p>
                </div>
                <div className="relative top-[9.3rem] left-[2.5rem] w-[1.5rem] h-[1.5rem] rounded-full bg-white border-[5px] border-red-300"></div>
                {/* Futuro */}

                <div className="shadow-xl bg-[#DAE2FF] relative top-[9rem] left-[14rem] w-[8rem] py-1 rounded-lg flex flex-col  items-center justify-center">
                  <p className="font-semibold text-center text-xs">
                    Com Hipnózio
                  </p>
                  <p className="text-[#3A5BA9] font-bold">{pesoDesejado}kg</p>
                </div>
                <div className="relative top-[9.6rem] left-[17rem] w-[1.5rem] h-[1.5rem] rounded-full bg-white border-[5px] border-[#BDDCFF]"></div>
                {/* Grafico */}
                <img src={Graph} alt="grafíco" />
                <div className="flex justify-between py-3 px-1">
                  <p>Hoje</p>
                  <p>Janeiro de 2024</p>
                </div>
              </div>
            </div>

            {/* MD - GRAFICO */}
            <div className="hidden md:block lg:hidden relative h-[400px] border rounded-lg shadow-xl w-full m-auto mt-10 p-10">
              {/* Hoje */}

              <div className=" relative top-[-11rem]">
                <div className="shadow-xl bg-red-100 relative top-[12rem] left-4 w-[6.25rem] py-1 rounded-lg flex flex-col  items-center justify-center">
                  <p className="font-semibold">Hoje</p>
                  <p className="text-red-800 font-bold">{peso}kg</p>
                </div>
                <div className="relative top-[13rem] left-[3.125rem] w-[1.875rem] h-[1.875rem] rounded-full bg-white border-[5px] border-red-300"></div>
                {/* Futuro */}
                <div className="shadow-xl bg-[#DAE2FF] relative top-[15.25rem] left-[28rem] w-[9.375rem] py-1 rounded-lg flex flex-col  items-center justify-center">
                  <p className="font-semibold text-center">Com Hipnózio</p>
                  <p className="text-[#3A5BA9] font-bold">{pesoDesejado}kg</p>
                </div>
                <div className="relative top-[16.5rem] left-[32rem] w-[1.875rem] h-[1.875rem] rounded-full bg-white border-[5px] border-[#BDDCFF]"></div>
                {/* Grafico */}
                <img src={Graph} alt="grafíco" />
                <div className="flex justify-between py-3 px-10">
                  <p>Hoje</p>
                  <p>Janeiro de 2024</p>
                </div>
              </div>
            </div>

            {/* LG - GRAFICO */}
            <div className="hidden lg:block xl:hidden relative h-[500px] border rounded-lg shadow-xl w-full m-auto mt-10 p-10">
              {/* Hoje */}

              <div className=" relative top-[-11rem]">
                <div className="shadow-xl bg-red-100 relative top-[14rem] left-4 w-[6.25rem] py-1 rounded-lg flex flex-col  items-center justify-center">
                  <p className="font-semibold">Hoje</p>
                  <p className="text-red-800 font-bold">{peso}kg</p>
                </div>
                <div className="relative top-[15.3rem] left-[3.125rem] w-[1.875rem] h-[1.875rem] rounded-full bg-white border-[5px] border-red-300"></div>
                {/* Futuro */}
                <div className="shadow-xl bg-[#DAE2FF] relative top-[20rem] left-[39rem] w-[9.375rem] py-1 rounded-lg flex flex-col  items-center justify-center">
                  <p className="font-semibold text-center">Com Hipnózio</p>
                  <p className="text-[#3A5BA9] font-bold">{pesoDesejado}kg</p>
                </div>
                <div className="relative top-[21.5rem] left-[43rem] w-[1.875rem] h-[1.875rem] rounded-full bg-white border-[5px] border-[#BDDCFF]"></div>
                {/* Grafico */}
                <img src={Graph} alt="grafíco" />
                <div className="flex justify-between py-3 px-10">
                  <p>Hoje</p>
                  <p>Janeiro de 2024</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[60%] 2xl:w-[30%] m-auto ">
              <BotaoPlanos />
            </div>
            <h1 className="text-xl md:text-2xl leading-7 2xl:w-[50%] text-center">
              Permitimos a comunicação entre cérebro e estômago para garantir
              resultados duradouros
            </h1>
            <ul className="grid grid-cols-3 gap-3 justify-between items-center bg-white border p-5 rounded-lg shadow-xl">
              <div className="flex flex-col gap-3 items-center justify-center">
                <img src={Hourglass} alt="" className="w-[50px]" />
                <p className="text-xs text-center md:text-base">
                  Apenas 20 minutos por dia
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center">
                <img src={GraphGreen} alt="" className="w-[50px]" />
                <p className="text-xs text-center md:text-base">
                  Primeiros resultados após uma semana
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center">
                <img src={Approved} alt="" className="w-[50px]" />
                <p className="text-xs text-center md:text-base">
                  Criado por especialistas
                </p>
              </div>
            </ul>

            {/* Melhorias */}
            <h1 className="text-xl md:text-2xl leading-7 2xl:w-[50%] text-center">
              Você verá <strong className="text-[#57C5A1]">melhorias</strong>{" "}
              nessas áreas após concluir nosso curso de hipnoterapia.
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center  ">
              {info.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-3 bg-white items-center justify-center border h-[280px] 2xl:h-[230px] px-5 py-5 rounded-lg shadow-xl"
                  >
                    <img src={item.icon} alt="" className="w-[70px]" />
                    <h1 className="font-bold text-lg">{item.title}</h1>
                    <p className="text-center text-base">{item.text}</p>
                  </div>
                );
              })}
            </ul>
            <div className="w-full md:w-[60%] 2xl:w-[30%] m-auto ">
              <BotaoPlanos />
            </div>
            <h1 className="text-2xl leading-7 2xl:w-[50%] text-center">
              Seu resumo pessoal
            </h1>
            <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 justify-between items-center ">
              <div className="flex flex-col gap-3 text-center h-full bg-white items-center justify-center border  px-5 py-5 rounded-lg shadow-xl">
                <strong className="text-xl leading-6">
                  Sua idade metabólica
                </strong>
                <div className="flex gap-7 items-center justify-center">
                  <svg
                    width="145"
                    height="145"
                    viewBox="0 0 145 145"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1115_55280)">
                      <path
                        d="M72.5 0C32.4577 0 0 32.4577 0 72.5C0 112.542 32.4577 145 72.5 145C112.542 145 145 112.542 145 72.5C145 32.4577 112.542 0 72.5 0ZM72.5 136.635C37.1367 136.635 8.36538 107.863 8.36538 72.5C8.36538 37.1367 37.1367 8.36538 72.5 8.36538C107.863 8.36538 136.635 37.1367 136.635 72.5C136.635 107.863 107.863 136.635 72.5 136.635Z"
                        fill="#FF4958"
                      ></path>
                      <path
                        d="M75.2879 12.074H69.7109V29.3513H75.2879V12.074Z"
                        fill="#FF4958"
                      ></path>
                      <path
                        d="M69.7121 132.926H75.2891V115.649H69.7121V132.926Z"
                        fill="#FF4958"
                      ></path>
                      <path
                        d="M132.92 75.2885V69.7115H115.643V75.2885H132.92Z"
                        fill="#FF4958"
                      ></path>
                      <path
                        d="M12.0684 69.7115V75.2885H29.3457V69.7115H12.0684Z"
                        fill="#FF4958"
                      ></path>
                      <path
                        d="M99.9655 47.309C98.443 45.7865 95.9668 45.7865 94.4443 47.309L76.5647 65.1887C75.3601 64.5194 73.977 64.1346 72.4991 64.1346C71.0213 64.1346 69.5434 64.5529 68.3109 65.2667L33.8232 30.779C32.3007 29.2565 29.8245 29.2565 28.302 30.779C26.7795 32.3015 26.7795 34.7777 28.302 36.3002L64.1505 72.1487C64.1505 72.2658 64.1338 72.3829 64.1338 72.5C64.1338 77.1177 67.8814 80.8654 72.4991 80.8654C77.1168 80.8654 80.8645 77.1177 80.8645 72.5C80.8645 72.316 80.8478 72.1375 80.8366 71.959L99.9655 52.8302C101.488 51.3077 101.488 48.8315 99.9655 47.309Z"
                        fill="#FF4958"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1115_55280">
                        <rect width="145" height="145" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex gap-3 items-start ">
                    <strong className="text-[90px]  text-[#3a5ba9] leading-6">
                      {IdadeMetabolica}
                    </strong>
                    <span className="text-base font-semibold">anos</span>
                  </div>
                </div>

                <p className="text-base leading-6">
                  Seu corpo está envelhecendo mais rápido do que deveria.
                </p>
              </div>
              <div className="flex flex-col h-full gap-3 text-center bg-white items-center justify-center border px-5 py-5 rounded-lg shadow-xl">
                <strong className="text-xl leading-6">
                  A hipnoterapia é segura para você?
                </strong>
                <div>
                  <svg
                    width="105"
                    height="122"
                    viewBox="0 0 105 122"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1115_55277)">
                      <path
                        d="M44.4746 91.1086L27.0664 73.7257L36.6063 64.1949L43.1609 70.74L67.8205 38.8235L78.5093 47.0518L44.4746 91.1086Z"
                        fill="#006C51"
                        fill-opacity="0.8"
                      ></path>
                      <path
                        d="M52.4976 122L51.7066 121.859C51.1651 121.765 38.3385 119.381 25.5449 108.294C13.8955 98.1943 0 78.6297 0 42.7872V20.3874H4.49684C32.6598 20.3874 49.065 3.50761 49.2298 3.33834L52.4082 0L55.6807 3.24901C55.8456 3.41357 73.3244 20.3921 100.503 20.3921H105V42.7919C105 58.5056 102.344 72.428 97.1129 84.1733C92.8609 93.7134 86.9185 101.829 79.4504 108.303C66.6615 119.386 53.8302 121.77 53.2887 121.868L52.4976 122.009V122ZM8.99839 29.2458V42.7872C8.99839 68.6288 16.4335 88.2827 31.0965 101.204C40.3397 109.352 49.7477 112.15 52.5024 112.836C55.2381 112.159 64.6509 109.357 73.9035 101.204C88.5665 88.2827 96.0016 68.6288 96.0016 42.7872V29.2411C74.2944 27.948 58.9392 17.5992 52.5683 12.4553C46.3575 17.665 31.3696 27.9951 8.99839 29.2505V29.2458Z"
                        fill="#006C51"
                        fill-opacity="0.8"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1115_55277">
                        <rect width="105" height="122" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-base leading-6">
                  Você é um ótimo candidato à hipnoterapia dirigida para
                  controle de peso.
                </p>
              </div>
              <div className="flex flex-col gap-3 text-center bg-white items-center justify-center border h-full px-5 py-5 rounded-lg shadow-xl">
                <strong className="text-xl leading-6">IMC</strong>
                <img src={Peso} alt="" className="w-[105px] h-[122px]" />
                <div>
                  <p className="text-xl font-semibold">
                    IMC {imcDesejado.toFixed(1)}
                  </p>
                  {imcDesejado < 18.5 ? (
                    <p>Você está Abaixo do peso</p>
                  ) : imcDesejado >= 18.5 && imcDesejado < 24.9 ? (
                    <p>Seu peso é saudável</p>
                  ) : imcDesejado >= 25 && imcDesejado < 29.9 ? (
                    <p>Você está com sobrepeso</p>
                  ) : imcDesejado >= 30 && imcDesejado < 34.9 ? (
                    <p>Obesidade Grau 1</p>
                  ) : imcDesejado >= 35 && imcDesejado < 39.9 ? (
                    <p>Obesidade Grau 2</p>
                  ) : (
                    <p>Obesidade Grau 3</p>
                  )}
                </div>
              </div>
            </ul>
            <h1 className="text-xl md:text-2xl leading-7 2xl:w-[50%] text-center">
              Seu plano inclui:
            </h1>

            <div className="flex flex-col lg:flex-row justify-center  items-center w-full ">
              <img
                src={Iphone}
                alt="iphone plan"
                className="w-[200px] mb-10 2xl:mb-0 m-auto"
              />
              <ul className="flex flex-col gap-5  ">
                <li className="bg-[#F0F0FA] px-3 py-5 rounded-md flex items-center  gap-3">
                  <div className="bg-[#27BFB3] w-[20px] h-[20px] rounded-md flex items-center justify-center text-white">
                    {" "}
                    <IoMdCheckmark />
                  </div>
                  <p className="text-base leading-6">
                    Curso de áudio de hipnoterapia criado para mudar sua relação
                    com a comida.
                  </p>
                </li>
                <li className="bg-[#F0F0FA] p-3 rounded-md flex items-center  gap-3">
                  <div className="bg-[#27BFB3] w-[20px] h-[20px] rounded-md flex items-center justify-center text-white">
                    {" "}
                    <IoMdCheckmark />
                  </div>

                  <p className="text-base leading-6">
                    10 sessões principais de hipnoterapia para ajudá-lo a perder
                    o excesso de peso.
                  </p>
                </li>
                <li className="bg-[#F0F0FA] p-3 rounded-md flex items-center  gap-3">
                  <div className="bg-[#27BFB3] w-[20px] h-[20px] rounded-md flex items-center justify-center text-white">
                    {" "}
                    <IoMdCheckmark />
                  </div>
                  <p className="text-base leading-6">
                    Sessões mensais de hipnoterapia para manter o peso.
                  </p>
                </li>
                <li className="bg-[#F0F0FA] p-3 rounded-md flex items-center  gap-3">
                  <div className="bg-[#27BFB3] w-[20px] h-[20px] rounded-md flex items-center justify-center text-white">
                    {" "}
                    <IoMdCheckmark />
                  </div>
                  <p className="text-base leading-6">
                    Conteúdo disponível em qualquer dispositivo.
                  </p>
                </li>
                <li className="bg-[#F0F0FA] p-3 rounded-md flex items-center  gap-3">
                  <div className="bg-[#27BFB3] w-[20px] h-[20px] rounded-md flex items-center justify-center text-white">
                    {" "}
                    <IoMdCheckmark />
                  </div>
                  <p className="text-base leading-6">
                    Suporte ao cliente 24 horas por dia, 7 dias por semana.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-[60%] 2xl:w-[30%] m-auto ">
              <BotaoPlanos />
            </div>
            <div className="bg-white rounded-md shadow-xl border p-7 flex flex-col gap-7 w-full lg:w-[80%] 2xl:w-[50%]">
              <h1 className="text-center text-2xl md:text-3xl leading-7">
                Nossa promessa
              </h1>
              <p className="text-[14px] md:text-base leading-6">
                Prometemos fornecer sessões de hipnoterapia da mais alta
                qualidade, projetadas especificamente para apoiar seus esforços
                de perda de peso. Nossa equipe de hipnoterapeutas experientes
                elaborou cuidadosamente cada sessão para abordar as causas do
                ganho de peso e ajudá-lo a construir hábitos saudáveis para uma
                perda de peso sustentável.
              </p>
              <p className="text-[14px] md:text-base leading-6">
                Estamos confiantes de que você verá resultados com nosso produto
                e estamos aqui para apoiá-lo em cada etapa do processo. Se você
                tiver alguma dúvida ou preocupação, não hesite em entrar em
                contato conosco. Prometemos continuar fornecendo produtos e
                serviços excepcionais para ajudá-lo a atingir seus objetivos de
                perda de peso.
              </p>
              <p>Equipe Hipnosia</p>
            </div>
          </div>
        </div>
      </>
    );
  }
};
