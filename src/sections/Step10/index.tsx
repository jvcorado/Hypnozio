import CommonPage from "../../components/Page";

export const Step10 = () => {
  const info = [
    {
      step: 10,
      pergunta: "Com que frequência isso acontece?",
      opcoes: [
        {
          text: "Várias vezes ao dia",
          emoji: "",
        },
        {
          text: "Diário",
          emoji: "",
        },
        {
          text: "Várias vezes por semana",
          emoji: "",
        },
        {
          text: "Semanalmente",
          emoji: "",
        },
        {
          text: "Por mês",
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
