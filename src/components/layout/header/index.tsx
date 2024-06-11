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

  return (
    <header className="tailwind aqui">
      {/*Essa image vai a logo*/}
      <img className="tailwind aqui" src="img/logo.png" alt="Logo" />

      {/*Essa nav é a div responsavel pelos botões de navegação*/}
      <nav className="tailwind aqui">
        <p onClick={() => handleChangeColor()} className={`tailwind wind ${color}`}>
          Opção 1
        </p>
        <p className="tailwind aqui"> Opção 2</p>
        <p className="tailwind aqui"> Opção 3</p>
      </nav>
    </header>
  );
};
