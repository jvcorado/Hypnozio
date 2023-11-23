import { PageImagem } from "../../components/PageImage";
import Imagem from "../../assets/image/step12/graph2.svg";

export const Step12 = () => {
  const info = [
    {
      step: 12,
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
        <PageImagem
          rounded={false}
          key={item.step}
          id={item.step}
          text="A maioria das soluções para perda de peso não visa a causa real do excesso de peso, como a falta de comunicação entre o cérebro e o estômago."
          text2="A hipnoterapia é diferente."
          textRodape="De acordo com estudos clínicos, descobriu-se que a hipnoterapia aborda e resolve essa falha de comunicação."
          img={Imagem}
          isButtonDisabled
          value={item.step}
          inicio="48.35%"
          final="52.7%"
        />
      ))}
    </>
  );
};
