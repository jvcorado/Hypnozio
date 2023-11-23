import { PageSelected } from "../../components/PageSelected";

export const Step17 = () => {
  const info = [
    {
      step: 17,
      pergunta: "O que você gostaria de fazer se estivesse no peso desejado?",

      opcoes: [
        {
          text: "Aproveite a vida social/relacionamentos",
          emoji: "",
        },
        {
          text: "Durma melhor",
          emoji: "",
        },
        {
          text: "Viaje com confiança",
          emoji: "",
        },
        {
          text: "Pratique meu esporte favorito",
          emoji: "",
        },
        {
          text: "Esteja mais presente no trabalho",
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
          opcoes={item.opcoes}
          inicio="70.1%"
          final="74.45%"
        />
      ))}
    </>
  );
};
