import CommonPage from "../../components/Page";

export const Step19 = () => {
  const info = [
    {
      step: 19,
      pergunta: "Quão importante é conseguir isso para você?",

      opcoes: [
        {
          text: "Muito importante",
          emoji: "",
        },
        {
          text: "Pouco Importante",
          emoji: "",
        },
        {
          text: "Importante",
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
          inicio="78.8%"
          final="83.15%"
        />
      ))}
    </>
  );
};
