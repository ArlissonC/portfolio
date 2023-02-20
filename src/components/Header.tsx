import { optionsMenu } from "@/data";
import { useEffect, useState } from "react";
import { RxCode } from "react-icons/rx";
import MobileMenu from "./MobileMenu";

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
      <nav className="hidden md:block">
        <ul className="flex space-x-12">
          {optionsMenu?.map(({ label, href }) => (
            <li
              key={label}
              className="font-medium text-white cursor-pointer hover:text-brand transition ease-in-out delay-75"
            >
              <a href={href} className="flex items-center gap-1">
                <RxCode className="text-xl" /> {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {activeTopMenu && (
        <nav className="hidden md:block fixed z-50 top-0 p-4 bg-brand-dark bg-opacity-70 backdrop-blur-lg w-screen animate-topMenu">
          <ul className="flex justify-center space-x-12">
            {optionsMenu?.map(({ label, href }) => (
              <li
                key={label}
                className="font-semibold text-white cursor-pointer hover:text-brand transition ease-in-out delay-75 flex items-center gap-1"
              >
                <a href={href} className="flex items-center gap-1">
                  <RxCode className="text-xl" /> {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <MobileMenu />
    </header>
  );
};

export default Header;
