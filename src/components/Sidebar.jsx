import { Disclosure, Transition } from "@headlessui/react";
import Button from "./Button.astro";

const Sidebar = ({ open = false, setOpen }) => {
  return (
    <>
      <Transition show={open}>
        <Transition.Child
          className="fixed right-0 top-0 w-[250px] z-30 h-screen"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div
            id="sidebar"
            className="fixed right-0 top-0 w-[250px] h-screen bg-almost-white pt-20 p-8 z-50"
          >
            <button
              onClick={() => setOpen(false)}
              aria-expanded={open}
              aria-controls="sidebar"
            >
              <img
                className="absolute top-5 right-5"
                src="images/icon-close-menu.svg"
                alt="Close Menu"
              />
            </button>
            <ul className="flex flex-col space-y-3">
              <li className="cursor-pointer"><a href="#aboutUs" className="">QUIÉNES SOMOS</a></li>
              <li className="cursor-pointer"><a href="#programs" className="">PROGRAMAS</a></li>
              <li className="cursor-pointer"><a  className="">CONTACTO</a></li>
              <li className="cursor-pointer">TENGO UNA IDEA</li>
              <li className="cursor-pointer">
                {/* <Button text="Tengo una idea" /> */}
              </li>
            </ul>
          </div>
        </Transition.Child>
        <Transition.Child
          enter="transition-opacity ease-linear duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={() => setOpen(false)}
            className="w-full h-full fixed bg-black opacity-80 z-10 inset-0"
          ></div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default Sidebar;
