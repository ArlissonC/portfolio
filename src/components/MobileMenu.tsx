import { GiHamburgerMenu } from "react-icons/gi";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { RxCode } from "react-icons/rx";
import { optionsMenu } from "@/data";

const MobileMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="md:hidden">
      {!sidebarOpen && (
        <button
          className="w-12 h-12 bg-brand-dark bg-opacity-70 backdrop-blur-lg text-brand fixed left-4 top-4 z-[1000] flex items-center justify-center rounded-full"
          onClick={() => setSidebarOpen(true)}
        >
          <GiHamburgerMenu className="text-3xl" />
        </button>
      )}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="w-2/3 h-fit bg-brand-purple-light rounded-br-lg">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none"
                      onClick={() => setSidebarOpen(false)}
                    ></button>
                  </div>
                </Transition.Child>
                <nav className="w-full h-full px-6 py-5 text-center text-white font-semibold overflow-y-auto bg-brand-dark rounded-br-lg">
                  <ul className="flex flex-col gap-5">
                    {optionsMenu.map(({ label, href }) => (
                      <li
                        key={label}
                        className="font-medium text-white cursor-pointer hover:text-brand flex items-center justify-center gap-1"
                      >
                        <a
                          href={href}
                          className="flex items-center gap-1"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <RxCode className="text-xl" /> {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default MobileMenu;
