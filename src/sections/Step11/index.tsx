import { PageSelected } from "../../components/PageSelected";

export const Step11 = () => {
  const info = [
    {
      step: 11,
      pergunta2: "Com quais custos financeiros você teve que lidar?",
      opcoes: [
        {
          text: "Muitas consultas médicas",
          emoji: "",
        },
        {
          text: "Comida/dieta cara",
          emoji: "",
        },
        {
          text: "Faltando trabalho",
          emoji: "",
        },
        {
          text: "Suplementos ineficazes",
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
          pergunta2={item.pergunta2}
          opcoes={item.opcoes}
          inicio="43.9%"
          final="48.25%"
        />
      ))}
    </>
  );
};
