import { useEffect, useState } from "react";

const optionsMenu = [
  { label: "Início" },
  { label: "Habilidades" },
  { label: "Experiência" },
  { label: "Projetos" },
  { label: "Contato" },
];

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeTopMenu, setActiveTopMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (scrollPosition > 220) setActiveTopMenu(true);
      else setActiveTopMenu(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header className="pt-7 flex justify-center">
      <nav>
        <ul className="flex space-x-12">
          {optionsMenu?.map(({ label }) => (
            <li
              key={label}
              className="font-medium text-white cursor-pointer hover:text-brand transition ease-in-out delay-75"
            >
              {"</>"} {label}
            </li>
          ))}
        </ul>
      </nav>
      {activeTopMenu && (
        <nav className="fixed z-50 top-0 p-4 bg-[#1E1E1E] bg-opacity-70 backdrop-blur-lg w-screen animate-topMenu">
          <ul className="flex justify-center space-x-12">
            {optionsMenu?.map(({ label }) => (
              <li
                key={label}
                className="font-semibold text-white cursor-pointer hover:text-brand transition ease-in-out delay-75"
              >
                {"</>"} {label}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
