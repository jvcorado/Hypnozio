/* import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "../../components/Header"; */
import { PageSelected } from "../../components/PageSelected";

export const Step15 = () => {
  const info = [
    {
      step: 15,
      pergunta:
        "Ótimo - agora sabemos um pouco sobre sua experiência atual com a alimentação e como ela impacta sua vida.",
      pergunta2:
        "Imagine-se daqui a 6 semanas, como você gostaria de se sentir?",
      opcoes: [
        {
          text: "Fisicamente confortável",
          emoji: "",
        },
        {
          text: "No controle do meu peso",
          emoji: "",
        },
        {
          text: "Mais saudável no meu corpo",
          emoji: "",
        },
        {
          text: "Confiante em mim mesmo",
          emoji: "",
        },
        {
          text: "Não tenho certeza",
          emoji: "",
        },
      ],
    },
  ];

  return (
    <>
      {info.map((item) => (
        <PageSelected
          key={item.step}
          step={item.step}
          pergunta={item.pergunta}
          pergunta2={item.pergunta2}
          opcoes={item.opcoes}
        />
      ))}
    </>
  );
};
