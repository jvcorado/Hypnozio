import { useState } from "react";
import Logo from "../../assets/image/logo-hipnozio.svg";

interface Step {
  inicio: string;
  final: string;
}

export const Header = ({ inicio, final }: Step) => {
  const [bolinhaInicio, setBolinhaInicio] = useState(inicio);

  const handleBolinhaInicioChange = () => {
    setBolinhaInicio((prevValue) => {
      const novoValor = parseFloat(prevValue) + 5;
      return `${novoValor}%`;
    });
  };

  const estilo: React.CSSProperties & { [key: string]: string } = {
    "--bolinha-inicio": bolinhaInicio,
    "--bolinha-final": final,
  };

  return (
    <header
      className={`bg-[#fbfdff] flex flex-col gap-5 py-5 px-3 md:px-5 w-full sticky top-0 z-50`}
    >
      <style>
        {`
          @keyframes mexerBolinha {
            0% {
              width: var(--bolinha-inicio);
            }
            100% {
              width: var(--bolinha-final);
            }
          }
        `}
      </style>
      <div className="flex gap-3 items-center">
        <img src={Logo} alt="Logo" />
        <div className="progresso">
          <div className="atual" style={estilo}>
            <div className="bolinha" onClick={handleBolinhaInicioChange}></div>
          </div>
        </div>
      </div>
    </header>
  );
};
