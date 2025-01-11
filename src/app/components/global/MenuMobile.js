"use client"
import { useState } from "react";
import MenuIcon from "../ui/icons/menu";
import CloseIcon from "../ui/icons/close";

export default function MenuMobile({ 
    color,
    navItems,
    fontSize = "normal",
    itemsColor = "text-white",
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    console.log("itemsColor", itemsColor)
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

    // Clases de tamaño de fuente
    const fontSizeClasses = {
        small: "text-base",
        normal: "text-lg",
        big: "text-xl"
    };
    
    return (
        <>
            <button className="lg:hidden" onClick={toggleMenu}>
                <MenuIcon className="w-8 h-8" stroke={color} />
            </button>

            
            {isMenuOpen && (<div
                className={`fixed inset-0 bg-white px-10 py-28 z-50 flex text-white transition-opacity duration-300 ${animation}`}
            >
                <button
                    className="absolute top-5 right-5 text-2xl p-2 rounded-full"
                    onClick={toggleMenu}
                >
                    <CloseIcon className="w-5 h-5" fill={color} />
                </button>
                <nav className="flex flex-col space-y-6 text-xl">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className={`hover:underline ${fontSizeClasses[fontSize]} ${itemsColor}`}>
                            {item.text}
                        </a>
                    ))}
                </nav>
            </div>)}
        </>
    );
}