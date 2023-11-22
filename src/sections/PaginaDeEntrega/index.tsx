import Logo from "../../assets/image/logo-hipnozio.svg";
import { FaStar } from "react-icons/fa";
import Aula from "../../assets/aula.mp3";

import Client1 from "../../assets/image/client1.webp";
import Client2 from "../../assets/image/client2.webp";
import Client3 from "../../assets/image/client3.webp";

const info = [
  {
    icon: Client1,
    text: "A hipnoterapia para perda de peso mudou minha vida. O programa me ajudou a controlar meus desejos, superar hábitos alimentares emocionais e perder 10 quilos. Sinto-me mais confiante e fortalecido do que nunca.",
  },
  {
    icon: Client2,
    text: "Eu estava cético, mas o programa de hipnoterapia para perda de peso me ajudou a resolver problemas subjacentes, como estresse e ansiedade, que me faziam comer demais. Perdi mais de 13 quilos e recomendo-o fortemente para qualquer pessoa que esteja lutando contra o peso.",
  },

  {
    icon: Client3,
    text: "A hipnoterapia é uma virada de jogo para mim. O programa me ajudou a resolver os problemas emocionais que estavam contribuindo para o meu ganho de peso. As sessões foram relaxantes e agradáveis, e senti uma diferença significativa na minha atitude em relação à comida",
  },
];

export const PaginaDeEntrega = () => {
  return (
    <>
      <div className="container m-auto px-3 py-10">
        <header className="w-full  mb-12">
          <img src={Logo} alt="Hypnozio" />
        </header>
        <div className="gap-10 flex flex-col items-center justify-center ">
          <div className="text-center 2xl:w-[60%] m-auto flex flex-col gap-5">
            <h1 className="text-3xl md:text-4xl leading-10">
              Parabéns! Aqui está sua primeira sessão de hipnoterapia.
            </h1>
            <p className="text-xl md:text-2xl leading-7">
              Para garantir os melhores resultados, siga as seguintes
              instruções:
            </p>
            <p className="text-lg md:text-xl leading-7">
              Encontre um lugar confortável e tranquilo. Use fones de ouvido.
            </p>
            <p className="text-lg md:text-xl leading-7">
              Ouça esta sessão uma vez por dia, num total de três vezes em uma
              semana.
            </p>
          </div>

          <div className="flex flex-col gap-3 justify-between items-center bg-[#F2F4FF]  px-20 p-5 rounded-lg ">
            <p className="text-2xl text-[#3a5b9]">Mudando a perspectiva</p>
            <audio controls className="custom-audio-controls">
              <source src={Aula} type="audio/mp3" />
            </audio>
          </div>

          <h1 className="text-2xl md:text-3xl leading-7 2xl:w-[50%] text-center">
            Por que os clientes nos amam?
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-start  ">
            {info.map((item, index) => {
              return (
                <div key={index} className="flex flex-col items-center gap-3 ">
                  <img
                    src={item.icon}
                    alt=""
                    className="rounded-ss-[70px] rounded-ee-[70px] "
                  />
                  <ul className="flex gap-2 self-start text-yellow-500">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                  </ul>

                  <p className="text-left text-base">{item.text}</p>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
