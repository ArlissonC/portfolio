import Light from "./Light";
import { BsChevronDoubleDown } from "react-icons/bs";
import ScrollMouse from "@/assets/svgs/scroll-mouse.svg";

const Presentation = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-24 mt-40">
      <div className="relative left-[20%] md:left-[10%] animate-light">
        <Light />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-3xl">
          ARLISSON COSTA
        </h1>
        <p className="text-xl font-semibold text-white">
          Desenvolvedor Front-end
        </p>
      </div>
      <div className="w-6 absolute left-[50%] bottom-[12%] animate-scrollDown">
        <div className="hidden md:block cursor-pointer">
          <ScrollMouse />
        </div>
        <BsChevronDoubleDown className="md:hidden text-brand text-3xl" />
      </div>
    </section>
  );
};

export default Presentation;
