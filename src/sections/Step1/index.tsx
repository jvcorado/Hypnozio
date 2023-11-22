/* import CommonPage from "../../components/Page";
import { useState } from "react";

export const Step1 = () => {
  const info = [
    {
      step: 1,
      pergunta: "Qual é a sua idade?",
      opcoes: [
        {
          text: "18-21",
          emoji: "",
        },
        {
          text: "21-30",
          emoji: "",
        },
        {
          text: "31-40",
          emoji: "",
        },
        {
          text: "41-50",
          emoji: "",
        },
        {
          text: "51-60",
          emoji: "",
        },
        {
          text: "61-70",
          emoji: "",
        },
        {
          text: "Mais de 70",
          emoji: "",
        },
      ],
    },
  ];

  return (
    <>
      {info.map((item) => (
        <CommonPage
          key={item.step}
          step={item.step}
          pergunta={item.pergunta}
          opcoes={item.opcoes}
          isLink={true}
        />
      ))}
    </>
  );
};
 */

/* import { Header } from "../../components/Header"; */
import { Link, useLocation } from "react-router-dom";

export const Step1 = () => {
  const location = useLocation();

  // Extrai o valor do parâmetro 'src' da URL atual
  const queryString = location.search;
  const parametro = queryString.substring(queryString.indexOf("src="));

  return (
    <section className="flex flex-col h-full md:h-screen ">
      {/*  <Header
        isButtonDisabled={isButtonDisabled}
        value={isWoman ? step * 4.76190476 : step * 3.84615385}
        id={step}
        isWoman={isWoman}
        isHidden={isHidden}
        isTransparent={isTransparent}
        isLink={isLink}
      /> */}
      <div className="container m-auto flex flex-col items-center  overflow-y-auto my-10 gap-7 px-3 md:px-5 ">
        <div className="w-full md:w-[60%] xl:w-[50%] 2xl:w-[30%]  flex flex-col items-start gap-10">
          <h1 className="text-2xl md:text-xl !leading-[30px] text-start text-black w-full">
            Qual é sua idade?
          </h1>

          <div className=" w-full flex flex-col items-center justify-center gap-2">
            <Link
              to={`/step/2/21/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">18-21</p>
              </div>
            </Link>
            <Link
              to={`/step/2/30/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">22-30</p>
              </div>
            </Link>
            <Link
              to={`/step/2/40/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">31-40</p>
              </div>
            </Link>
            <Link
              to={`/step/2/50/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">41-50</p>
              </div>
            </Link>
            <Link
              to={`/step/2/60/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">51-60</p>
              </div>
            </Link>
            <Link
              to={`/step/2/70/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">61-70</p>
              </div>
            </Link>
            <Link
              to={`/step/2/71/?${parametro}`}
              className="w-full bg-[#ffffff] py-[16px] px-[24px] rounded-lg border  border-[#8aa8fcab] flex items-center justify-between hover:shadow-2xl hover:border-[#00000083]"
            >
              <div className="flex items-center gap-5">
                <p className="text-base leading-5">Mais de 71</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
