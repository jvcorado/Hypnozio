import { PageMedidas } from "../../components/PageMedidas";

export const Step16 = () => {
  const info = [
    {
      step: 16,
      pergunta: "Insira suas medidas",

      opcoes: [
        {
          text: "Fisicamente confortável",
          emoji: "",
        },
        {
          text: "No controle do meu peso",
          emoji: "",
        },
        {
          text: "Mais saudável no meu corpo",
          emoji: "",
        },
        {
          text: "Confiante em mim mesmo",
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
        <PageMedidas
          key={item.step}
          step={item.step}
          pergunta={item.pergunta}
          inicio="65.75%"
          final="70.1%"
        />
      ))}
    </>
  );
};
