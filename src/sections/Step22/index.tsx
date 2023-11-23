import CommonPage from "../../components/Page";

export const Step22 = () => {
  const info = [
    {
      step: 22,
      pergunta: "Qual é o melhor horário do seu dia para ouvir Hypnozio?",

      opcoes: [
        {
          text: "Quando eu acordo pela primeira vez",
          emoji: "",
        },
        {
          text: "Pela manhã",
          emoji: "",
        },
        {
          text: "Na hora do almoço",
          emoji: "",
        },
        {
          text: "À tarde/noite",
          emoji: "",
        },
        {
          text: "Antes de eu adormecer",
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
          inicio="91.85%"
          final="96.2%"
        />
      ))}
    </>
  );
};
