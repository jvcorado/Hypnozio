import { PageImagem } from "../../components/PageImage";
import Imagem from "../../assets/image/edward-miller.png";

export const Step21 = () => {
  const info = [
    {
      step: 21,
    },
  ];

  return (
    <>
      {info.map((item) => (
        <PageImagem
          key={item.step}
          id={item.step}
          text="Hypnosia pode ajudá-lo a controlar seus problemas de peso em apenas 15 minutos por dia. Você receberá um programa de hipnoterapia personalizado criado por Edward Miller com o objetivo de melhorar sua relação com a alimentação e atingir o peso desejado."
          textRodape="Você só precisa relaxar e ouvir suas sessões de hipnoterapia no conforto da sua casa"
          text3="O melhor é que você não precisa realizar nenhuma ação, como iniciar uma dieta, fazer exercícios ou abrir mão de alimentos que você gosta. "
          img={Imagem}
          isButtonDisabled
          value={item.step}
          inicio="87.5%"
          final="91.85%"
        />
      ))}
    </>
  );
};
