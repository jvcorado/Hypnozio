import CommonPage from "../../components/Page";

export const Step20 = () => {
  const info = [
    {
      step: 20,
      pergunta:
        "Quanto tempo você poderia dedicar por dia para gerenciar seus problemas de perda de peso?",

      opcoes: [
        {
          text: "15 minutos",
          emoji: "",
        },
        {
          text: "15-30 minutos",
          emoji: "",
        },
        {
          text: "30-60 minutos",
          emoji: "",
        },
        {
          text: "Mais de 1 hora",
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
