import CommonPage from "../../components/Page";

export const Step4 = () => {
  const info = [
    {
      step: 4,
      pergunta:
        "Um número crescente de nutricionistas recomenda o Hypnozio. Você foi recomendado por um nutricionista?",
      opcoes: [
        {
          text: "Sim",
          emoji: "",
        },
        {
          text: "Não",
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
          isButtonDisabled={true}
          inicio="13.05%"
          final="17.04%"
        />
      ))}
    </>
  );
};
