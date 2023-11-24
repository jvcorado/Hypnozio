import { Button, Input } from "@material-tailwind/react";
import { Header } from "../../components/Header";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState } from "react";

export const Step23 = () => {
  const step = 23;
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { idade, opcao, altura, peso, pesoDesejado } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const queryString = location.search;
  const parametro = queryString.substring(queryString.indexOf("src="));
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/restrict-plus-operands
  const proximaRota = `/step/${
    step + 1
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  }/${idade}/${opcao}/${altura}/${peso}/${pesoDesejado}/?${parametro}`;

  // Função para lidar com a alteração no campo de entrada de email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail: string = e.target.value;
    setEmail(newEmail);
    setIsButtonDisabled(!isValidEmail(newEmail));
  };

  // Função para validar o formato do e-mail usando uma expressão regular
  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(proximaRota);
    // Coloque aqui a lógica de envio do formulário
    console.log("Email enviado:", email);
  };
  return (
    <section className="bg-[#FBFDFF]  h-screen flex flex-col  ">
      <Header inicio="96.2%" final="100%" />
      <div className="container m-auto flex flex-col items-center  overflow-y-auto my-10 gap-7 px-8 md:px-5">
        <div className="w-full md:w-[60%] xl:w-[50%] 2xl:w-[30%]  flex flex-col items-start gap-5">
          <h1 className="md:text-center text-left  text-2xl text-black w-full ">
            Um último passo!
          </h1>
          <p className="text-sm md:text-center text-left">
            Insira seus dados para descobrir se a hipnoterapia direcionada para
            perda de peso pode ajudá-lo a atingir seus objetivos.
          </p>

          <form
            className="w-full  flex flex-col gap-7 items-center"
            onSubmit={handleSubmit}
          >
            <Input
              type="email"
              placeholder="Endereço de email"
              className="m-auto !border-1 !py-6 !border-gray-600 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-base placeholder:text-gray-900 focus:!border-gray-900 focus:!border-t-gray-900"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              crossOrigin={undefined}
              value={email}
              onChange={handleEmailChange}
            />
            <div className="flex gap-3 items-center">
              <svg
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C9.66667 21.4167 7.75 20.0625 6.25 17.9375C4.75 15.8125 4 13.4833 4 10.95V5L12 2L20 5V10.95C20 13.4833 19.25 15.8125 17.75 17.9375C16.25 20.0625 14.3333 21.4167 12 22ZM12 20.45C13.7667 19.8667 15.2292 18.7958 16.3875 17.2375C17.5458 15.6792 18.225 13.9333 18.425 12H12V3.625L5.5 6.05V10.95C5.5 11.15 5.50417 11.3208 5.5125 11.4625C5.52083 11.6042 5.54167 11.7833 5.575 12H12V20.45Z"
                  fill="#404040"
                ></path>
              </svg>
              <p className="text-xs">
                Seus dados pessoais estão seguros conosco. Não enviamos spam nem
                compartilhamos endereços de e-mail com terceiros.
              </p>
            </div>

            <Button
              type="submit"
              id="submitButton"
              disabled={isButtonDisabled}
              size="lg"
              className="w-full font-bold  bg-[#3a5ba9] text-white py-4 rounded-xl flex items-center justify-center hover:bg-[#3a5ba9d5]"
            >
              Continuar
            </Button>
            {/* 
            <Link to={proximaRota} className="font-semibold text-[#3a5ba9]">
              Não, obrigado
            </Link> */}
          </form>
        </div>
      </div>
    </section>
  );
};
