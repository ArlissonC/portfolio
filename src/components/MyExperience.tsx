import { FaReact } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";

const MyExperience = () => {
  return (
    <section className="mb-44 flex items-center flex-col" id="myExperience">
      <h1 className="section-title">Minha Experiência</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="p-4 border-white border-2 max-w-xl">
          <div className="flex gap-4 items-center">
            <FaReact className="text-5xl text-white" />
            <p className="text-white text-lg lg:text-2xl font-semibold">
              <span className="underline-behind">Dev Front-end </span> <br />
              React, Next.js
            </p>
          </div>
          <div className="descriptionExperience relative mt-6">
            <div className="h3">
              <p className="text-white ml-10 text-sm lg:text-base">
                Com mais de 2 anos de experiência sólida em desenvolvimento
                Front-end, concentro minha especialização em tecnologias como
                React & Next.js. Ao longo da minha trajetória, destaco minha
                contribuição substancial para a refatoração e sustentação de
                plataformas, utilizando metodologias ágeis para garantir
                eficiência no processo.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 border-white border-2 border-t-0 lg:border-t-2 lg:border-l-0 max-w-xl">
          <div className="flex gap-4 items-center">
            <DiDotnet className="text-5xl text-white" />
            <p className="text-white text-lg lg:text-2xl font-semibold">
              <span className="underline-behind">Dev Back-end</span> <br /> .NET
              Core, Node.js
            </p>
          </div>
          <div className="descriptionExperience relative mt-6">
            <div className="h3">
              <p className="text-white ml-10 text-sm lg:text-base">
                Desenvolvedor Back-end focado em .NET e Node.js, contribuindo
                ativamente no desenvolvimento, refatoração e integração de
                tecnologias. Comprometido com a eficiência operacional, aplico
                metodologias ágeis para um fluxo de trabalho otimizado e
                entregas pontuais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
