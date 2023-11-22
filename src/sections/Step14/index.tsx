import { PageImagem } from "../../components/PageImage";
import Imagem from "../../assets/image/step14/female-with-headphones.webp";

export const Step14 = () => {
  const info = [
    {
      step: 14,
    },
  ];

  return (
    <>
      {info.map((item) => (
        <PageImagem
          key={item.step}
          id={item.step}
          text="Dietas e planos de exercícios muitas vezes não conseguem produzir resultados de perda de peso devido a problemas mentais subjacentes, como autoimagem negativa, alimentação emocional e medo do fracasso.
        "
          text2="A hipnoterapia pode resolver eficazmente estas questões, mudando a mentalidade do indivíduo, proporcionando a motivação e a clareza mental necessárias para uma perda de peso bem sucedida."
          textRodape=""
          img={Imagem}
          isButtonDisabled
          value={item.step}
        />
      ))}
    </>
  );
};
