import Light from "./Light";
import ScrollMouse from "@/assets/svgs/scroll-mouse.svg";

const Presentation = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-24 mt-40">
      <div className="relative left-32 animate-light">
        <Light />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-3xl">
          ARLISSON COSTA
        </h1>
        <p className="text-xl font-semibold text-white">
          Desenvolvedor Front-end
        </p>
      </div>
      <div className="w-6 absolute left-[50%] bottom-[12%] animate-scrollDown">
        <ScrollMouse />
      </div>
    </section>
  );
};

export default Presentation;
