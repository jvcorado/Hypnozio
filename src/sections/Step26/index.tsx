import { Button, Radio } from "@material-tailwind/react";
import Aula from "../../assets/aula.mp3";
import { useEffect, useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useLocation, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Checkout from "../../assets/image/safe-checkout.png";

import Client1 from "../../assets/image/client1.webp";
import Client2 from "../../assets/image/client2.webp";
import Client3 from "../../assets/image/client3.webp";
import { FaStar } from "react-icons/fa";
import React from "react";

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

const planos = [
  {
    date: "1 mês",
    valorAntigo: "59.90",
    valor: "49.00",
    popular: "",
    link: "https://pay.hotmart.com/A87115324N?off=3ho0vf95&checkoutMode=10&bid=1699287339028",
    desc: `Prorrogado a cada 7 dias após a oferta introdutória de 7 dias pelo preço total de $ 9, 99`,
  },
  {
    date: "3 meses",
    valorAntigo: "126.90",
    valor: "79.00",
    popular: "Most Popular",
    link: "https://pay.hotmart.com/A87115324N?off=ortcnz4f&checkoutMode=10&bid=1699287134869",
    desc: "Estendido mensalmente após oferta introdutória de 1 mês pelo preço total de $ 28,56",
  },
  {
    date: "6 meses",
    valorAntigo: "199.90",
    valor: "127.00",
    popular: "",
    link: "https://pay.hotmart.com/A87115324N?off=0iehvih8&checkoutMode=10&bid=1699286691112",
    desc: "Prorrogado a cada 3 meses após a oferta introdutória de 3 meses pelo preço total de $ 42,84",
  },
];

const Semana = [
  {
    numero: "1",
    text: "Mudando a perspectiva",
  },
  {
    numero: "2",
    text: "Visualizando novos hábitos",
  },
  {
    numero: "3",
    text: "Reforçando novos hábitos",
  },
  {
    numero: "4",
    text: "Mudando a percepção de junk food, alimentos açucarados e refrigerantes",
  },
  {
    numero: "5",
    text: "Erradicar a compulsão alimentar",
  },
  {
    numero: "6",
    text: "Controlar meu consumo de calorias",
  },
];

export const Step26 = () => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  const [selectedLink, setSelectedLink] = useState<string>(
    "https://pay.hotmart.com/O83035043N?off=gytek6ka&checkoutMode=10"
  );
  const [, setSelectedDesc] = useState<string>(
    "Estendido mensalmente após oferta introdutória de 1 mês pelo preço total de $ 28,56"
  );
  const [, setSelectedPopular] = useState<string>("");

  const location = useLocation();

  const { idade, opcao, altura, peso, pesoDesejado } = useParams();
  // Use altura, peso, pesoDesejado conforme necessário
  console.log("Idade:", idade);
  console.log("Opção:", opcao);
  console.log("Altura:", altura);
  console.log("Peso:", peso);
  console.log("Peso Desejado:", pesoDesejado);

  const Idade = idade ? parseInt(idade, 10) : 0;

  // Extrai o valor do parâmetro 'src' da URL atual
  const queryString = location.search;
  const parametro = queryString.substring(queryString.indexOf("src="));

  const handleRadioClick = (link: string, desc: string, popular: string) => {
    setSelectedLink(link);
    setSelectedDesc(desc);
    setSelectedPopular(popular);
  };

  const handleGetPlanClick = () => {
    if (selectedLink) {
      // Redirecionar o usuário para o link selecionado

      window.location.href = `${selectedLink}/?${parametro}`;
    } else {
      // Informar ao usuário para selecionar um plano
      alert("Por favor, selecione um plano antes de prosseguir.");
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        // O tempo acabou, você pode adicionar uma ação aqui
        clearInterval(timer);
      } else {
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  const handleButtonClickPlanos = () => {
    const targetDiv = document.getElementById("planos"); // Substitua 'suaDivId' pelo ID da sua div
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: React.SetStateAction<number>) =>
    setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="bg-[#FFE9EB] sticky top-0 z-50">
        <p className="text-center flex items-center justify-center gap-3 p-3">
          {" "}
          <strong className="text-xl font-bold text-[#ff4958]">
            75% de desconto
          </strong>
          <div className="flex  items-center justify-center">
            <svg
              className="mr-1"
              width="30"
              height="30"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3V1.5H15V3H9ZM11.25 14.175H12.75V8.425H11.25V14.175ZM12 22.475C10.7667 22.475 9.60417 22.2375 8.5125 21.7625C7.42083 21.2875 6.46667 20.6417 5.65 19.825C4.83333 19.0083 4.1875 18.0542 3.7125 16.9625C3.2375 15.8708 3 14.7083 3 13.475C3 12.2417 3.2375 11.0792 3.7125 9.9875C4.1875 8.89583 4.83333 7.94167 5.65 7.125C6.46667 6.30833 7.42083 5.6625 8.5125 5.1875C9.60417 4.7125 10.7667 4.475 12 4.475C13.1167 4.475 14.1667 4.6625 15.15 5.0375C16.1333 5.4125 17.0083 5.93333 17.775 6.6L19.05 5.325L20.1 6.375L18.825 7.65C19.425 8.31667 19.9375 9.125 20.3625 10.075C20.7875 11.025 21 12.1583 21 13.475C21 14.7083 20.7625 15.8708 20.2875 16.9625C19.8125 18.0542 19.1667 19.0083 18.35 19.825C17.5333 20.6417 16.5792 21.2875 15.4875 21.7625C14.3958 22.2375 13.2333 22.475 12 22.475ZM12 20.975C14.0833 20.975 15.8542 20.2458 17.3125 18.7875C18.7708 17.3292 19.5 15.5583 19.5 13.475C19.5 11.3917 18.7708 9.62083 17.3125 8.1625C15.8542 6.70417 14.0833 5.975 12 5.975C9.91667 5.975 8.14583 6.70417 6.6875 8.1625C5.22917 9.62083 4.5 11.3917 4.5 13.475C4.5 15.5583 5.22917 17.3292 6.6875 18.7875C8.14583 20.2458 9.91667 20.975 12 20.975Z"
                fill="#FF4958"
              ></path>
            </svg>
            <p className="text-[#ff4958] text-xl">
              {" "}
              00:
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </p>
          </div>
        </p>
      </div>
      <section className="bg-[#FBFDFF] flex flex-col px-5 md:p-0 ">
        <div className="container m-auto py-7 w-full sm:w-[80%] md:w-[90%] lg:w-[80%] 2xl:w-[60%] flex flex-col items-center gap-10 ">
          <h1 className="text-4xl text-center font-thin">
            Aqui está o seu programa Hypnozio
          </h1>

          <div className="bg-white shadow-xl rounded-md border sm:w-[80%] md:w-[90%] lg:w-[80%] 2xl:w-[60%]">
            <div className="bg-[#EEF0FF] p-5 flex flex-col gap-5">
              <h1 className="text-[24px] font-extrabold text-center">
                Seu programa de perda de peso
              </h1>
              <p>
                <strong> Faixa etária: </strong>

                {Idade >= 71
                  ? "Mais de 71"
                  : Idade === 30
                  ? Idade - 8
                  : Idade > 30
                  ? Idade - 9
                  : Idade === 21
                  ? Idade - 3
                  : Idade}
                {Idade >= 71 ? "" : ` - ${Idade}`}
              </p>
              <p>
                <strong>Motivo do excesso de peso: </strong>
                {opcao === "1"
                  ? "Comer emocional"
                  : opcao === "2"
                  ? "Compulsão Alimentar"
                  : opcao === "3"
                  ? "Dieta crônica"
                  : opcao === "4"
                  ? "Má digestão"
                  : opcao === "5"
                  ? "Falta de força de vontade"
                  : opcao === "6"
                  ? "Não tenho certeza"
                  : ""}
              </p>
              <p>
                <strong>Meta de peso: </strong>
                {pesoDesejado} kg
              </p>
            </div>
            <div className="p-5 flex flex-col gap-5">
              {Semana.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4"
                  >
                    <p className="h-[40px] w-[40px] rounded-full bg-[#1FA37E] flex items-center justify-center text-white font-bold text-base">
                      {item.numero}
                    </p>
                    <div className="bg-[#FAFAFF] rounded-md w-full p-2">
                      <strong>Semana {item.numero}:</strong>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
              <div className="flex  items-center justify-between gap-4">
                <p className="h-[40px] w-[40px] rounded-full bg-[#E1CB00] flex items-center justify-center text-white font-bold text-xl">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.66406 14.6666C3.38906 14.6666 3.15365 14.5687 2.95781 14.3729C2.76198 14.177 2.66406 13.9416 2.66406 13.6666V6.43329C2.66406 6.15829 2.76198 5.92288 2.95781 5.72704C3.15365 5.53121 3.38906 5.43329 3.66406 5.43329H4.83073V3.83329C4.83073 2.95718 5.13965 2.21038 5.7575 1.59288C6.37534 0.975376 7.12256 0.666626 7.99916 0.666626C8.87576 0.666626 9.6224 0.975376 10.2391 1.59288C10.8557 2.21038 11.1641 2.95718 11.1641 3.83329V5.43329H12.3307C12.6057 5.43329 12.8411 5.53121 13.037 5.72704C13.2328 5.92288 13.3307 6.15829 13.3307 6.43329V13.6666C13.3307 13.9416 13.2328 14.177 13.037 14.3729C12.8411 14.5687 12.6057 14.6666 12.3307 14.6666H3.66406ZM3.66406 13.6666H12.3307V6.43329H3.66406V13.6666ZM8.0002 11.3333C8.35389 11.3333 8.65573 11.2109 8.90573 10.9661C9.15573 10.7213 9.28073 10.427 9.28073 10.0833C9.28073 9.74996 9.1548 9.44718 8.90293 9.17496C8.65106 8.90274 8.34829 8.76663 7.9946 8.76663C7.64091 8.76663 7.33906 8.90274 7.08906 9.17496C6.83906 9.44718 6.71406 9.75274 6.71406 10.0916C6.71406 10.4305 6.84 10.7222 7.09186 10.9666C7.34373 11.2111 7.64651 11.3333 8.0002 11.3333ZM5.83073 5.43329H10.1641V3.83329C10.1641 3.23144 9.95361 2.71987 9.5327 2.29858C9.11177 1.87728 8.60066 1.66663 7.99936 1.66663C7.39805 1.66663 6.88628 1.87728 6.46406 2.29858C6.04184 2.71987 5.83073 3.23144 5.83073 3.83329V5.43329Z"
                      fill="white"
                    ></path>
                  </svg>
                </p>
                <div className="bg-[#FAFAFF] rounded-md w-full p-2">
                  <strong>Programa pós-semana 6:</strong>
                  <p>
                    Desbloqueie seu plano contínuo de gerenciamento de perda de
                    peso
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="planos"
            className="bg-white rounded-md shadow-xl border p-7 flex flex-col gap-7 sm:w-[80%] md:w-[90%] lg:w-[80%] 2xl:w-[60%] "
          >
            <h1 className="text-center text-3xl leading-7">
              Todos os planos incluem
            </h1>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3 items-center ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.44961 17.85L3.84961 12.25L4.92461 11.175L9.44961 15.7L19.0496 6.09998L20.1246 7.17498L9.44961 17.85Z"
                    fill="#3A5BA9"
                  ></path>
                </svg>
                <p className="text-base leading-6">
                  {" "}
                  Acesso total à biblioteca de áudio Hypnozio
                </p>
              </li>
              <li className="flex gap-3 items-center ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.44961 17.85L3.84961 12.25L4.92461 11.175L9.44961 15.7L19.0496 6.09998L20.1246 7.17498L9.44961 17.85Z"
                    fill="#3A5BA9"
                  ></path>
                </svg>
                <p className="text-base leading-6">
                  {" "}
                  Seu programa de hipnoterapia orientado a objetivos
                </p>
              </li>
              <li className="flex gap-3 items-center ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.44961 17.85L3.84961 12.25L4.92461 11.175L9.44961 15.7L19.0496 6.09998L20.1246 7.17498L9.44961 17.85Z"
                    fill="#3A5BA9"
                  ></path>
                </svg>
                <p className="text-base leading-6">
                  {" "}
                  Suporte para controle de peso a longo prazo
                </p>
              </li>
              <li className="flex gap-3 items-center ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.44961 17.85L3.84961 12.25L4.92461 11.175L9.44961 15.7L19.0496 6.09998L20.1246 7.17498L9.44961 17.85Z"
                    fill="#3A5BA9"
                  ></path>
                </svg>
                <p className="text-base leading-6">
                  {" "}
                  Conteúdo disponível em qualquer dispositivo
                </p>
              </li>
              <li className="flex gap-3 items-center ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.44961 17.85L3.84961 12.25L4.92461 11.175L9.44961 15.7L19.0496 6.09998L20.1246 7.17498L9.44961 17.85Z"
                    fill="#3A5BA9"
                  ></path>
                </svg>
                <p className="text-base leading-6">
                  {" "}
                  Suporte ao cliente 24 horas por dia, 7 dias por semana
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 w-full sm:w-[80%] md:w-[90%] lg:w-[80%] 2xl:w-[60%]">
            <h1 className="text-2xl font-extrabold text-center">
              Seu plano perfeito
            </h1>

            {planos.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`bg-[#3a5ba9] border-2 rounded-2xl  ${
                    item.link === selectedLink ? "border-[#27BFB3]" : ""
                  }`}
                  onClick={() =>
                    handleRadioClick(item.link, item.desc, item.popular)
                  }
                >
                  <label htmlFor={`radio-${index}`}>
                    <div className="flex bg-white items-center justify-around cursor-pointer py-4 rounded-[13.4px]">
                      <div className="flex gap-3 items-center">
                        <Radio
                          className=""
                          color="green"
                          type="radio"
                          name={`color-${index}`}
                          id={`radio-${index}`}
                          checked={item.link === selectedLink}
                          crossOrigin={undefined} // Esconde o input de rádio
                        />
                        <div className="flex flex-col gap-1 items-start">
                          <p className="text-sm md:text-lg font-bold">
                            Plano de {item.date}
                          </p>
                          <div className="flex gap-3 items-center">
                            <p className=" text-sm  line-through text-[#FF4958] decoration-[#FF4958]">
                              R${item.valorAntigo}
                            </p>
                            <p className=" text-sm ">R${item.valorAntigo}</p>
                          </div>
                          <p className="text-xs">Faturado a cada dois mêses</p>
                          {item.popular === "Most Popular" && (
                            <p className="text-xs text-white px-4 p-1 bg-[#FF4958] rounded-full font-bold ">
                              Mais popular
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="border-s-2 h-[100px] "></div>
                      <div className="flex gap-3 items-center pe-2 ">
                        <div className="flex flex-col respon gap-1 items-center ">
                          <p className="text-3xl font-bold">R${item.valor}</p>
                          <p>por mês</p>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-col gap-4 md:w-[60%] xl:w-[50%] ">
            <Button
              type="submit"
              id="submitButton"
              size="lg"
              className="font-bold w-full bg-[#3a5ba9] text-white py-6 rounded-xl flex items-center justify-center hover:bg-[#3a5ba9d5]"
              onClick={handleGetPlanClick}
            >
              Obter meu plano
            </Button>
            {/*    <p className="text-sm md:text-base text-center  m-auto">
              {selectedDesc}
            </p> */}
            {/* Renderize a descrição selecionada */}
          </div>
          <p>Cancele a qualquer momento | Sem taxas ocultas</p>
          <img src={Checkout} alt="" className="w-[400px]" />
          <div className="w-full flex flex-col items-center gap-5 ">
            <h1 className="text-2xl font-extrabold text-center">
              Por que os clientes nos amam?
            </h1>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-start  ">
              {info.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 "
                  >
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
          <div className="w-full md:w-[60%] xl:w-[50%] flex flex-col items-center gap-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-extrabold text-center">
                Como funciona?
              </h1>
              <div className="flex items-center bg-[#F0F0FA] rounded-md w-full p-2 gap-4">
                <p className="h-[40px] w-[40px] rounded-full bg-[#1FA37E] flex items-center justify-center text-white font-bold text-base">
                  1
                </p>
                <p>Encontre um lugar tranquilo onde você possa relaxar</p>
              </div>
              <div className="flex items-center bg-[#F0F0FA] rounded-md w-full p-2 gap-4">
                <p className="h-[40px] w-[40px] rounded-full bg-[#1FA37E] flex items-center justify-center text-white font-bold text-base">
                  2
                </p>
                <p>
                  Abra a gravação de hipnoterapia enviada a você por e-mail pelo
                  hipnoterapeuta
                </p>
              </div>
              <div className="flex items-center gap-4 bg-[#F0F0FA] rounded-md w-full p-2">
                <p className="h-[40px] w-[40px] rounded-full bg-[#1FA37E] flex items-center justify-center text-white font-bold text-base">
                  3
                </p>

                <p>Ouça uma sessão de 20 minutos por dia</p>
              </div>
              <div className="flex items-center bg-[#F0F0FA] rounded-md w-full p-2 gap-4">
                <p className="h-[40px] w-[40px] rounded-full bg-[#1FA37E] flex items-center justify-center text-white font-bold text-base">
                  4
                </p>
                <p>Aproveite os primeiros resultados em uma semana</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-between items-center bg-[#F2F4FF]  px-20 p-5 rounded-lg ">
              <p className="text-2xl text-[#3a5b9]">Mudando a perspectiva</p>
              <audio controls className="custom-audio-controls">
                <source src={Aula} type="audio/mp3" />
              </audio>
            </div>
            <Button
              type="submit"
              id="submitButton"
              size="lg"
              className="font-bold w-full bg-[#3a5ba9] text-white py-6 rounded-xl flex items-center justify-center hover:bg-[#3a5ba9d5]"
              onClick={handleButtonClickPlanos}
            >
              Obter meu plano
            </Button>

            <Accordion
              open={open === 1}
              className="bg-white px-3  rounded-2xl border border-b-none "
            >
              <AccordionHeader
                className="text-black flex items-center justify-between"
                onClick={() => handleOpen(1)}
              >
                O que acontece depois de eu fazer o pedido?
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9752 14.475L8.80017 11.3C8.56684 11.0667 8.51267 10.7959 8.63767 10.4875C8.76267 10.1792 8.99184 10.025 9.32517 10.025H15.6752C16.0085 10.025 16.2377 10.1792 16.3627 10.4875C16.4877 10.7959 16.4335 11.0667 16.2002 11.3L13.0252 14.475C12.9418 14.5584 12.8585 14.6167 12.7752 14.65C12.6918 14.6834 12.6002 14.7 12.5002 14.7C12.4002 14.7 12.3085 14.6834 12.2252 14.65C12.1418 14.6167 12.0585 14.5584 11.9752 14.475Z"
                    fill="#1B1B1F"
                  ></path>
                </svg>
              </AccordionHeader>
              <AccordionBody className="text-base">
                Você receberá cada sessão de hipnoterapia por e-mail, com
                instruções claras incluídas. Cada sessão é uma gravação de 20
                minutos que pode ser facilmente acessada em seu telefone, tablet
                ou computador.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 2}
              className="bg-white px-3  rounded-2xl border border-b-none"
            >
              <AccordionHeader
                className="text-black flex items-center justify-between"
                onClick={() => handleOpen(2)}
              >
                Como foi criado o nosso curso de hipnoterapia?
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9752 14.475L8.80017 11.3C8.56684 11.0667 8.51267 10.7959 8.63767 10.4875C8.76267 10.1792 8.99184 10.025 9.32517 10.025H15.6752C16.0085 10.025 16.2377 10.1792 16.3627 10.4875C16.4877 10.7959 16.4335 11.0667 16.2002 11.3L13.0252 14.475C12.9418 14.5584 12.8585 14.6167 12.7752 14.65C12.6918 14.6834 12.6002 14.7 12.5002 14.7C12.4002 14.7 12.3085 14.6834 12.2252 14.65C12.1418 14.6167 12.0585 14.5584 11.9752 14.475Z"
                    fill="#1B1B1F"
                  ></path>
                </svg>
              </AccordionHeader>
              <AccordionBody className="text-base">
                O hipnoterapeuta certificado Edward Miller, com mais de 20 anos
                de experiência na área, criou nosso curso de hipnoterapia. Ele
                ajudou com sucesso milhares de clientes com problemas
                semelhantes.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              className="bg-white px-3  rounded-2xl border border-b-none"
            >
              <AccordionHeader
                className="text-black flex items-center justify-between"
                onClick={() => handleOpen(3)}
              >
                A hipnoterapia é segura para você?
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9752 14.475L8.80017 11.3C8.56684 11.0667 8.51267 10.7959 8.63767 10.4875C8.76267 10.1792 8.99184 10.025 9.32517 10.025H15.6752C16.0085 10.025 16.2377 10.1792 16.3627 10.4875C16.4877 10.7959 16.4335 11.0667 16.2002 11.3L13.0252 14.475C12.9418 14.5584 12.8585 14.6167 12.7752 14.65C12.6918 14.6834 12.6002 14.7 12.5002 14.7C12.4002 14.7 12.3085 14.6834 12.2252 14.65C12.1418 14.6167 12.0585 14.5584 11.9752 14.475Z"
                    fill="#1B1B1F"
                  ></path>
                </svg>
              </AccordionHeader>
              <AccordionBody className="text-base">
                A hipnoterapia é uma forma segura de terapia realizada em um
                ambiente descontraído e confortável. Não envolve nenhum contato
                físico ou uso de medicamentos, sendo uma opção de baixo risco
                para quem busca uma abordagem de cura não invasiva.
              </AccordionBody>
            </Accordion>

            <Card className="mt-6 p-3 rounded-2xl shadow-xl border">
              <CardBody className="rounded-2xl border">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Garantia de devolução de dinheiro
                </Typography>
                <Typography>
                  Estamos confiantes de que nosso plano pode funcionar para você
                  e você obterá resultados em 4 semanas. Oferecemos garantia de
                  devolução de 100% do dinheiro aos usuários que assistiram a
                  pelo menos 4 sessões de hipnoterapia em até 30 dias após a
                  compra e não sentiram nenhuma melhora em sua relação com a
                  comida.
                </Typography>
              </CardBody>
            </Card>

            <div className="bg-white rounded-md shadow-xl border p-7 flex flex-col gap-7 w-full">
              <h1 className="text-center text-3xl leading-7">
                Todos os planos incluem
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-3 items-center ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.44961 17.85L3.84961 12.25L4.92461 11.175L9.44961 15.7L19.0496 6.09998L20.1246 7.17498L9.44961 17.85Z"
                      fill="#3A5BA9"
                    ></path>
                  </svg>
                  <p className="text-base leading-6">
                    {" "}
                    Acesso total à biblioteca de áudio Hypnozio
                  </p>
                </li>
                <li className="flex gap-3 items-center ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.44961 17.85L3.84961 12.25L4.92461 11.175L9.44961 15.7L19.0496 6.09998L20.1246 7.17498L9.44961 17.85Z"
                      fill="#3A5BA9"
                    ></path>
                  </svg>
                  <p className="text-base leading-6">
                    {" "}
                    Seu programa de hipnoterapia orientado a objetivos
                  </p>
                </li>
                <li className="flex gap-3 items-center ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.44961 17.85L3.84961 12.25L4.92461 11.175L9.44961 15.7L19.0496 6.09998L20.1246 7.17498L9.44961 17.85Z"
                      fill="#3A5BA9"
                    ></path>
                  </svg>
                  <p className="text-base leading-6">
                    {" "}
                    Suporte para controle de peso a longo prazo
                  </p>
                </li>
                <li className="flex gap-3 items-center ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.44961 17.85L3.84961 12.25L4.92461 11.175L9.44961 15.7L19.0496 6.09998L20.1246 7.17498L9.44961 17.85Z"
                      fill="#3A5BA9"
                    ></path>
                  </svg>
                  <p className="text-base leading-6">
                    {" "}
                    Conteúdo disponível em qualquer dispositivo
                  </p>
                </li>
                <li className="flex gap-3 items-center ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.44961 17.85L3.84961 12.25L4.92461 11.175L9.44961 15.7L19.0496 6.09998L20.1246 7.17498L9.44961 17.85Z"
                      fill="#3A5BA9"
                    ></path>
                  </svg>
                  <p className="text-base leading-6">
                    {" "}
                    Suporte ao cliente 24 horas por dia, 7 dias por semana
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 md:w-[60%] xl:w-[50%] ">
            <Button
              type="submit"
              id="submitButton"
              size="lg"
              className="font-bold w-full bg-[#3a5ba9] text-white py-6 rounded-xl flex items-center justify-center hover:bg-[#3a5ba9d5]"
              onClick={handleButtonClickPlanos}
            >
              Obter meu plano
            </Button>
            {/*    <p className="text-sm md:text-base text-center  m-auto">
              {selectedDesc}
            </p> */}
            {/* Renderize a descrição selecionada */}
          </div>
          <footer className="text-center flex flex-col gap-3">
            <p>
              Ainda tem dúvidas?{" "}
              <strong className="text-[#3A5BA9]">Obtenha suporte</strong>{" "}
            </p>
            <p>Copyright © 2023 Hypnozio. Todos os direitos reservados</p>
          </footer>
        </div>
      </section>
    </>
  );
};
