"use client"
import { useState } from "react";
import MenuIcon from "../ui/icons/menu";
import CloseIcon from "../ui/icons/close";

export default function MenuMobile({ 
    color
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        if (isMenuOpen) {
          // Comienza la animación de desaparición
          setIsVisible(false);
          setTimeout(() => setIsMenuOpen(false), 500); // Espera a que termine la animación
        } else {
          // Muestra el menú y aplica la animación
          setIsMenuOpen(true);
          setTimeout(() => setIsVisible(true), 0); // Forzar la transición en el siguiente ciclo
        }
      };

    const animation = isVisible ? "opacity-100" : "opacity-0";
    
    return (
        <>
        <button className="lg:hidden" onClick={toggleMenu}>
            <MenuIcon className="w-8 h-8" stroke={color} />
        </button>

        
        {isMenuOpen && ( <div
            className={`fixed inset-0 bg-gray-800 px-10 z-50 flex text-white transition-opacity duration-200 ${animation}`}
        >
            <button
                className="absolute top-5 right-5 text-2xl bg-red-500 p-2 rounded-full"
                onClick={toggleMenu}
            >
                <CloseIcon className="w-5 h-5" fill={color} />
            </button>
            <nav className="flex flex-col space-y-6 text-xl">
                <a href="#home" className="hover:underline">
                    Inicio
                </a>
                <a href="#about" className="hover:underline">
                    Sobre nosotros
                </a>
                <a href="#services" className="hover:underline">
                    Servicios
                </a>
                <a href="#contact" className="hover:underline">
                    Contacto
                </a>
            </nav>
        </div>)}
      
        </>
    );
}