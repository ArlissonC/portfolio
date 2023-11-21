import Light from "./Light";
import { BsChevronDoubleDown } from "react-icons/bs";

const Presentation = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-24 mt-40">
      <div className="relative left-[20%] md:left-[10%] animate-light">
        <Light />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-8xl font-extrabold text-white drop-shadow-3xl uppercase">
          Arlisson Costa
        </h1>
        <div className="sub-text font-semibold">
          <h1>
            Console
            <span style={{ color: "white" }}>
              .<span style={{ color: "#50FA7B" }}>WriteLine</span>
            </span>
            <span>{`(`}</span>
            <span className="text-yellow-300">{'"'}</span>
          </h1>
          <span className="text-yellow-300">Desenvolvedor Full-stack</span>
          <span className="text-yellow-300">{'"'}</span>
          <span>{`)`}</span>
          <span className="text-white">;</span>
        </div>
      </div>

      <div className="w-6 absolute left-[50%] bottom-[12%] animate-scrollDown">
        <div className="hidden md:block cursor-pointer">
          {/* <ScrollMouse /> */}
        </div>
        <BsChevronDoubleDown className="md:hidden text-brand text-3xl" />
      </div>
    </section>
  );
};

export default Presentation;
