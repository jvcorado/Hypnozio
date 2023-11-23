import { PageImagem } from "../../components/PageImage";
import Imagem from "../../assets/image/step7/woman-bellyache.webp";

const Step7 = () => {
  const info = [
    {
      step: 7,
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
          text="Embora as pessoas tenham motivos diferentes para estar acima do peso, uma das principais causas é a falta de comunicação entre o estômago e o cérebro..
        "
          text2="A falta de comunicação entre o estômago e o cérebro é um fator significativo que causa excesso de peso. Compreender esta ligação pode ajudar a informar o estilo de vida e as escolhas alimentares para melhorar a saúde física e mental."
          textRodape="Se você já sentiu frio na barriga quando estava nervoso, então sentiu os efeitos da conexão estômago-cérebro."
          img={Imagem}
          isButtonDisabled
          value={item.step}
          inicio="26.5%"
          final="30.85%"
        />
      ))}
    </>
  );
};

export default Step7;
