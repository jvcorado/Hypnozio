import CommonPage from "../../components/Page";

export const Step5 = () => {
  const info = [
    {
      step: 5,
      pergunta:
        "Há quanto tempo você luta com problemas nutricionais, como excesso de peso ou compulsão alimentar?",
      opcoes: [
        {
          text: "0 - 6 meses",
          emoji: "",
        },
        {
          text: "6 - 12 meses",
          emoji: "",
        },
        {
          text: "1 - 5 meses",
          emoji: "",
        },
        {
          text: "5+ anos",
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
          isLink={true}
        />
      ))}
    </>
  );
};
