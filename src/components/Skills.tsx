import { stacks } from "@/data";

const Skills = () => {
  return (
    <section
      className="flex flex-col items-center justify-center mb-40"
      id="skills"
    >
      <h1 className="section-title">Habilidades</h1>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex flex-wrap justify-center space-x-4 gap-y-4 md:space-x-8">
          {stacks.main.map(({ label, Icon }) => (
            <div className="flex flex-col items-center space-y-1.5" key={label}>
              <span className="text-xs font-semibold text-white">{label}</span>
              {<Icon />}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center space-x-4 gap-y-4">
          {stacks.relevant.map(({ label, Icon }) => (
            <div className="flex flex-col items-center space-y-1.5" key={label}>
              <span className="text-s font-semibold text-white">{label}</span>
              {<Icon />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
