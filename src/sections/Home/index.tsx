import Image from "../../assets/image/image-home.webp";
import Logo from "../../assets/image/logo-hipnozio.svg";
import { Feedback } from "../../components/Feedback";
import Avatar from "../../assets/image/avatar/avatar-1.webp";
import { Link, useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  //teste
  // Extrai o valor do parâmetro 'src' da URL atual
  const queryString = location.search;
  const parametro = queryString.substring(queryString.indexOf("src="));

  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-yellow-700"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <div className="flex flex-col justify-between  md:h-screen">
      <div className="container m-auto px-8 py-10">
        <div className="mb-10">
          <img src={Logo} alt="Logo Hipnózio " className="w-[150px]" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-2 2xl:gap-10 ">
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-10 2xl:leading-[52px] font-normal">
              Encontre e corrija a causa raiz do{" "}
              <strong className="text-[#FF4958]">excesso de peso</strong> usando
              a auto-hipnose
            </h1>{" "}
            <p className="text-base md:text-sm lg:text-base font-light text-[#1b1b1f]">
              Nosso programa de hipnoterapia foi desenvolvido para ajudá-lo a
              mudar sua relação com a comida, no conforto da sua casa.
            </p>
            <p className="text-base md:text-sm lg:text-base font-light text-[#1b1b1f]">
              Responda algumas perguntas para começar:
            </p>
            <p className="text-base md:text-sm lg:text-base font-light text-[#77777a]">
              Selecione o seu sexo
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 items-center justify-center gap-4">
              <Link
                to={`/step/1/?${parametro}`}
                className="bg-[#FF4958] rounded-md p-5 text-center font-bold text-lg text-white "
              >
                Mulher
              </Link>
              <Link
                to={`/step/1/?${parametro}`}
                className="bg-[#3A5BA9] rounded-md p-5 text-center font-bold text-lg text-white"
              >
                Homem
              </Link>
              <Link
                to={`/step/1/?${parametro}`}
                className="bg-white border  border-black rounded-md p-5 text-center font-bold text-lg text-black"
              >
                Outro
              </Link>
            </div>
            <div>
              <div className="flex flex-row items-center gap-3 md:gap-1 ">
                {" "}
                <p className="text-sm md:text-xs lg:text-base font-semibold">
                  Excelentes avaliações de clientes:
                </p>
                <div className="flex gap-1 2xl:gap-1">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>

              <Feedback
                avatar={Avatar}
                id={1}
                key={1}
                name="Jane W."
                text="Que descoberta. Eu nem sabia que era receptivo à hipnoterapia! Ajudou-me depois de algumas sessões."
              ></Feedback>
            </div>
          </div>
          <div className="flex-1">
            <img src={Image} alt="Mulher com fone de ouvido" />
          </div>
        </div>
      </div>
      {/*    <footer className=" bg-[#303034] text-white py-10">
        <div className="container m-auto px-3   flex flex-col gap-5">
          <p>
            Rebilita UAB, Gedimino str. 45-7,
            <br />
            LT-44239 Kaunas, Lituânia
            <br />
            support@hypnozio.com
          </p>
          <p>
            Isenção de responsabilidade: o site não pode e não contém conselhos
            e/ou opiniões profissionais ou definitivamente precisas sobre
            produtos/serviços. As informações e/ou opiniões sobre
            produtos/serviços são fornecidas apenas para fins educacionais e de
            entretenimento e não substituem o aconselhamento profissional.
            Conseqüentemente, antes de tomar qualquer ação com base em suas
            pontuações, encorajamos você a consultar os profissionais
            apropriados. Não fornecemos nenhum tipo de aconselhamento
            profissional ou definitivamente preciso sobre produtos/serviços. O
            USO DE CONFIANÇA DE QUALQUER INFORMAÇÃO CONTIDA NO SITE É
            EXCLUSIVAMENTE POR SUA CONTA E RISCO.
          </p>
          <hr className="border-white" />
          <ul className="flex flex-col gap-5 md:gap-0 md:flex-row md:items-center justify-between">
            <div className="flex flex-col xl:flex-row xl:gap-5">
              <li>Contatos</li>
              <li>Política de Privacidade</li>
              <li>Termos e Condições</li>
            </div>
            <li>® 2023 Hipnózio. Todos os direitos reservados</li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
};
