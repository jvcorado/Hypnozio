/* import { Link } from "react-router-dom";
import { Progress } from "@material-tailwind/react"; */
import Logo from "../../assets/image/logo-hipnozio.svg";
/* import { IoIosArrowBack } from "react-icons/io"; */

interface Stap {
  id: number;
  value?: number;
  isButtonDisabled?: boolean;
  isWoman?: boolean;
  isHidden?: boolean;
  isTransparent?: boolean;
  isLink?: boolean;
  /*   link?: string; */
  // Adicione isHidden como uma propriedade
}

export const Header = ({
  /*   id, */
  /*  value, */
  /*   isButtonDisabled,
  isWoman, */
  /*  isHidden, */
  isTransparent,
}: /*   isLink, */
/*   link, */
Stap) => {
  return (
    <header
      className={`flex flex-col gap-5 py-5 px-3 md:px-5 w-full sticky top-0 z-50 ${
        isTransparent ? "bg-transparent" : "bg-white"
      }`}
    >
      {/*    <div className="flex justify-between">
        {isButtonDisabled ? (
          <Link
            to={
              isLink
                ? `/`
                : isWoman
                ? `/woman/step/${id - 1}`
                : `/step/${id - 1}`
            }
            className={isButtonDisabled ? "d-none" : "d-block"}
          >
            <IoIosArrowBack size={25} />
          </Link>
        ) : (
          <div className="d-none text-white">.</div>
        )}

        {isHidden ? (
          <p className="font-bold hidden">
            {isWoman ? `${id}/21` : `${id}/26`}
          </p>
        ) : (
          <p className="font-bold">{isWoman ? `${id}/21` : `${id}/26`}</p>
        )}
      </div> */}
      <div className="flex gap-3 items-center">
        {" "}
        <img src={Logo} alt="Logo" />{" "}
        {/*  <Progress
          size="sm"
          value={value}
          className={isHidden ? "hidden" : ""}
        /> */}
        <div className="progresso">
          <div className="atual">
            <div className="bolinha"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
