import { PageSelected } from "../../components/PageSelected";

const Step2 = () => {
  const info = [
    {
      step: 2,
      pergunta: "Você tem algum problema de saúde?",
      opcoes: [
        {
          text: "Ansiedade / Estresse",
          emoji: "",
        },
        {
          text: "Depressão",
          emoji: "",
        },
        {
          text: "Fumar",
          emoji: "",
        },
        {
          text: "Dor crônica",
          emoji: "",
        },
        {
          text: "Problemas de sono",
          emoji: "",
        },
        {
          text: "Problemas de pele",
          emoji: "",
        },
        {
          text: "Outro",
          emoji: "",
        },
        {
          text: "Nenhum",
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
          pergunta={item.pergunta}
          opcoes={item.opcoes}
        />
      ))}
    </>
  );
};

export default Step2;
