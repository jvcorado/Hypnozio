import { createBrowserRouter } from "react-router-dom";
import { Home } from "./sections/Home";

import Step2 from "./sections/Step2";
import Step3 from "./sections/Step3";
import { Step4 } from "./sections/Step4";
import { Step5 } from "./sections/Step5";
import Step7 from "./sections/Step7";
import Step8 from "./sections/Step8";
import Step9 from "./sections/Step9";
import { Step10 } from "./sections/Step10";
import { Step11 } from "./sections/Step11";
import { Step12 } from "./sections/Step12";
import { Step13 } from "./sections/Step13";
import { Step14 } from "./sections/Step14";
import { Step15 } from "./sections/Step15";
import { Step16 } from "./sections/Step16";
import { Step17 } from "./sections/Step17";
import { Step18 } from "./sections/Step18";
import { Step19 } from "./sections/Step19";
import { Step20 } from "./sections/Step20";
import { Step21 } from "./sections/Step21";
import { Step22 } from "./sections/Step22";
import { Step23 } from "./sections/Step23";
import { Step24 } from "./sections/Step24";
import { Step25 } from "./sections/Step25";
import { PaginaDeEntrega } from "./sections/PaginaDeEntrega";
import { Step1 } from "./sections/Step1";
import { Step26 } from "./sections/Step26";
import { Step6 } from "./sections/Step6";

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/step/1/*",
    element: <Step1 />,
  },
  {
    path: "/step/2/:idade/*",
    element: <Step2 />,
  },
  {
    path: "/step/3/:idade/*",
    element: <Step3 />,
  },
  {
    path: "/step/4/:idade/*",
    element: <Step4 />,
  },
  {
    path: "/step/5/:idade/*",
    element: <Step5 />,
  },
  {
    path: "/step/6/:idade/*",
    element: <Step6 />,
  },
  {
    path: "/step/7/:idade/:opcao/*",
    element: <Step7 />,
  },
  {
    path: "/step/8/:idade/:opcao/*",
    element: <Step8 />,
  },
  {
    path: "/step/9/:idade/:opcao/*",
    element: <Step9 />,
  },
  {
    path: "/step/10/:idade/:opcao/*",
    element: <Step10 />,
  },
  {
    path: "/step/11/:idade/:opcao/*",
    element: <Step11 />,
  },
  {
    path: "/step/12/:idade/:opcao/*",
    element: <Step12 />,
  },
  {
    path: "/step/13/:idade/:opcao/*",
    element: <Step13 />,
  },
  {
    path: "/step/14/:idade/:opcao/*",
    element: <Step14 />,
  },
  {
    path: "/step/15/:idade/:opcao/*",
    element: <Step15 />,
  },
  {
    path: "/step/16/:idade/:opcao/*",
    element: <Step16 />,
  },
  {
    path: "/step/17/:idade/:opcao/:altura/:peso/:pesoDesejado/*",
    element: <Step17 />,
  },
  {
    path: "/step/18/:idade/:opcao/:altura/:peso/:pesoDesejado/*",
    element: <Step18 />,
  },
  {
    path: "/step/19/:idade/:opcao/:altura/:peso/:pesoDesejado/*",
    element: <Step19 />,
  },
  {
    path: "/step/20/:idade/:opcao/:altura/:peso/:pesoDesejado/*",
    element: <Step20 />,
  },
  {
    path: "/step/21/:idade/:opcao/:altura/:peso/:pesoDesejado/*",
    element: <Step21 />,
  },
  {
    path: "/step/22/:idade/:opcao/:altura/:peso/:pesoDesejado/*",
    element: <Step22 />,
  },
  {
    path: "/step/23/:idade/:opcao/:altura/:peso/:pesoDesejado/*",
    element: <Step23 />,
  },
  {
    path: "/step/24/:idade/:opcao/:altura/:peso/:pesoDesejado/*",
    element: <Step24 />,
  },
  {
    path: "/step/25/:idade/:opcao/:altura/:peso/:pesoDesejado/*",
    element: <Step25 />,
  },
  {
    path: "/step/26/:idade/:opcao/:altura/:peso/:pesoDesejado/*",
    element: <Step26 />,
  },
  {
    path: "/step/27/:idade/:opcao/:altura/:peso/:pesoDesejado/*",
    element: <PaginaDeEntrega />,
  },
]);
