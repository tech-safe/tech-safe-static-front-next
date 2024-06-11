"use client";

import { useState } from "react";

{
  /*Nesta declaração de função, vc ignora, foque so no html e css e os estilos*/
}
export const Header = () => {
  const [color, setColor] = useState("text-orange-700");

  const handleChangeColor = () => {
    if (color === "") {
      setColor("text-orange-700");
    } else {
      setColor("");
    }
  };

  return (/*bg-transparent*/
    <header className=" w-full h-11 bg-black flex text-white items-center justify-between">
      {/*Essa image vai a logo*/}
      <img className="ml-40"
       src="img/logo.png" alt="Logo" />

      {/*Essa nav é a div responsavel pelos botões de navegação*/}
      <nav className="flex mr-40 gap-10 text-stone-700">
        <p className=""> Opção 1</p>
        <p className="tailwind aqui"> Opção 2</p>
        <p className="tailwind aqui"> Opção 3</p>
      </nav>
    </header>
  );
};
