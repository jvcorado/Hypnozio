import { Botao } from "../Botao";
import { Header } from "../Header";

interface PageImageProps {
  isButtonDisabled?: boolean;
  rounded?: boolean;
  img: string;
  value: number;
  id: number;
  text: string;
  text2?: string;
  text3?: string;
  textRodape?: string;
}

export const PageImagem = ({
  isButtonDisabled = true,
  rounded = true,
  img,
  value,
  id,
  text,
  text2,
  text3,
  textRodape,
}: PageImageProps) => {
  return (
    <section className={`flex flex-col items-center justify-center `}>
      <Header
        id={id}
        isButtonDisabled={isButtonDisabled}
        value={value}
        key={id}
      ></Header>
      <div
        className={`pt-10 container m-auto  w-full md:w-[60%] xl:w-[50%] 2xl:w-[20%] flex flex-col items-center gap-5 justify-start px-3 md:px-5`}
      >
        <h1 className={`text-left  text-black `}>{text}</h1>
        <h1 className={`text-left  text-black w-full`}>{text2}</h1>
        <img
          src={img}
          alt=""
          className={`w-[100%] ${
            rounded ? "rounded-ss-[70px] rounded-ee-[70px]" : "rounded-none"
          }`}
        />
        <h1 className={`text-lg  md:text-base text-left  text-black `}>
          {text3}
        </h1>
        <h1 className={`text-lg  md:text-base text-left  text-black `}>
          {textRodape}
        </h1>
        <div className=" w-full mb-10 ">
          {" "}
          <Botao step={id} />
        </div>
      </div>
    </section>
  );
};
