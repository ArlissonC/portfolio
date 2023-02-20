import { stacks } from "@/data";

const Skills = () => {
  return (
    <section className="pt-28 flex flex-col items-center justify-center mb-40">
      <h1 className="section-title">Habilidades</h1>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex space-x-8">
          {stacks.main.map(({ label, Icon }) => (
            <div className="flex flex-col items-center space-y-1.5" key={label}>
              <span className="text-xs font-semibold text-white">{label}</span>
              {<Icon />}
            </div>
          ))}
        </div>
        <div className="flex space-x-4">
          {stacks.relevant.map(({ label, Icon }) => (
            <div className="flex flex-col items-center space-y-1.5" key={label}>
              <span className="text-s font-semibold text-white">{label}</span>
              {<Icon />}
            </div>
          ))}
        </div>
        <p className="text-white text-center text-sm">
          Desenvolvedor com foco em Front-end utilizando React / Next.js. Possuo
          também experiência em projetos gerenciados por metodologias ágeis, o
          que me permitiu aprender a trabalhar de forma eficiente em equipe,
          priorizar tarefas e entregar projetos de alta qualidade dentro do
          prazo. Estou sempre aberto a novos conhecimentos e tecnologias,
          buscando me manter atualizado com as tendências do mercado. Minha
          paixão por programação me motiva a trabalhar arduamente e a aprimorar
          minhas habilidades constantemente, permitindo-me desenvolver soluções
          inovadoras e eficientes para meus clientes e usuários. Estou sempre em
          busca de novos desafios e oportunidades para crescer
          profissionalmente.
        </p>
      </div>
    </section>
  );
};

export default Skills;
