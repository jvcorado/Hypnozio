import { PageSelected } from "../../components/PageSelected";

const Step9 = () => {
  const info = [
    {
      step: 9,
      pergunta: "Como esses sintomas afetam sua vida?",
      opcoes: [
        {
          text: "Fisicamente desconfortável",
          emoji: "",
        },
        {
          text: "Nervoso para socializar",
          emoji: "",
        },
        {
          text: "Preocupando-se com viagens",
          emoji: "",
        },
        {
          text: "Luta com o trabalho",
          emoji: "",
        },
        {
          text: "Autoestima negativa",
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
          pergunta2={item.pergunta}
          opcoes={item.opcoes}
          inicio="35.2%"
          final="39.55%"
        />
      ))}
    </>
  );
};

export default Step9;
