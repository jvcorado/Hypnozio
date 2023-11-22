import { PageImagem } from "../../components/PageImage";
import Imagem from "../../assets/image/step3/brain-and-stomach.webp";

const Step3 = () => {
  const info = [
    {
      step: 3,
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
          key={item.step}
          id={item.step}
          text="Hypnozio ajuda a gerenciar seu relacionamento com a comida, “consertando” falhas de comunicação entre o cérebro e o estômago.
        "
          textRodape="Vamos começar aprendendo mais sobre você, para que possamos avaliar se o Hypnozio também pode ajudá-lo."
          img={Imagem}
          isButtonDisabled
          value={item.step}
        />
      ))}
    </>
  );
};

export default Step3;
