import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4  mx-4 lg:mx-44 py-3">
      <img className="w-32" src={assets.logo} alt="" />
      <p className="flex-1  border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Desenvolvido com 💻 por João Vitor. © 2025 Todos os direitos reservados.
      </p>
      <div className="flex items-center gap-1">
        <img width={40} src={assets.facebook_icon} alt="" />
        <img width={40} src={assets.facebook_icon} alt="" />
        <img width={40} src={assets.facebook_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
