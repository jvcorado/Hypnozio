import CommonPage from "../../components/Page";

export const Step13 = () => {
  const info = [
    {
      step: 13,
      pergunta:
        "Muitas pessoas não conseguem perder peso. Você sabe por que isso acontece?",
      opcoes: [
        {
          text: "Sim",
          emoji: "",
        },
        {
          text: "De alguma forma",
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
          isLink={true}
        />
      ))}
    </>
  );
};
