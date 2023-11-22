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
          text: "Importante",
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
        />
      ))}
    </>
  );
};
