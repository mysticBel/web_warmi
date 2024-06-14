import { Menu, Transition } from "@headlessui/react";

const NavMenu = () => {
  return (
    <nav>
      <ul class="hidden lg:flex lg:space-x-7 lg:ml-14">
      <li className="cursor-pointer hover:text-almost-black">QUIÉNES SOMOS</li>
        <li className="cursor-pointer hover:text-almost-black">PROGRAMAS</li>
        <li className="cursor-pointer hover:text-almost-black">CONTACTO</li>
      </ul>
    </nav>
  );
};

export default NavMenu;