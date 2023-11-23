import CommonPage from "../../components/Page";

export const Step18 = () => {
  const info = [
    {
      step: 18,
      pergunta:
        "Quão confiante você está em conseguir isso com sua abordagem atual?",

      opcoes: [
        {
          text: "Confiante",
          emoji: "",
        },
        {
          text: "Um pouco confiante",
          emoji: "",
        },
        {
          text: "De jeito nenhum",
          emoji: "",
        },
      ],
    },
  ];

  return (
    <>
      {info.map((item) => (
        <CommonPage
          key={item.step}
          step={item.step}
          pergunta={item.pergunta}
          opcoes={item.opcoes}
          inicio="74.45%"
          final="78.8%"
        />
      ))}
    </>
  );
};
