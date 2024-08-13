import { Menu, Transition } from "@headlessui/react";

const NavMenu = () => {
  return (
    <nav>
      <ul class="hidden lg:flex lg:space-x-7 lg:ml-14">
        <li className="cursor-pointer hover:text-almost-black"><a href="#aboutUs" className="link-navbar">QUIÉNES SOMOS</a></li>
        <li className="cursor-pointer hover:text-almost-black"><a href="#programs" className="link-navbar">PROGRAMAS</a></li>
        <li className="cursor-pointer hover:text-almost-black"><a href="#footer"  className="link-navbar">CONTACTO</a></li>
      </ul>
    </nav>
  );
};

export default NavMenu;