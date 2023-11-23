import { PageSelected } from "../../components/PageSelected";

const Step8 = () => {
  const info = [
    {
      step: 8,
      pergunta: "Que sintomas físicos você normalmente sente?",
      opcoes: [
        {
          text: "Falta de ar",
          emoji: "",
        },
        {
          text: "Suando mais que o normal",
          emoji: "",
        },
        {
          text: "Ronco",
          emoji: "",
        },
        {
          text: "Problemas para dormir",
          emoji: "",
        },
        {
          text: "Problemas de pele",
          emoji: "",
        },
        {
          text: "Fadiga",
          emoji: "",
        },
        {
          text: "Dores nas costas e nas articulações",
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
          pergunta={item.pergunta}
          opcoes={item.opcoes}
          inicio="30.85%"
          final="35.2%"
        />
      ))}
    </>
  );
};

export default Step8;
