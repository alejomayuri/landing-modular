"use client"
import { useState, useEffect } from "react";

export default function Header({
    children,
    paddingY = "normal",
    paddingX = "normal",
    bgColor = "bg-white", // Fondo inicial transparente
    scrolledBgColor = null, // Fondo al hacer scroll
    isFixed = true,
}) {
    const [hasScrolled, setHasScrolled] = useState(false);

    // Detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Clases de padding en Y
    const paddingYClasses = {
        high: "py-14",
        normal: "py-6",
        low: "py-3",
    };
    
    // Clases de padding en X
    const paddingXClasses = {
        high: "px-14",
        normal: "px-6",
        low: "px-3",
    };

    // Clase de posición dependiendo de `isFixed`
    const positionClass = isFixed ? "fixed top-0 left-0 w-full z-50" : "z-10 absolute top-0 left-0 w-full";

    // Clases dinámicas para el fondo
    const backgroundClass = hasScrolled ? scrolledBgColor ?? bgColor : bgColor;

    return (
        <header className={`
            ${backgroundClass} ${paddingYClasses[paddingY]} ${paddingXClasses[paddingX]} ${positionClass} 
            shadow transition-colors duration-300
        `}>
            <div className="container mx-auto flex items-center justify-between">
                {children}
            </div>
        </header>
    );
  }