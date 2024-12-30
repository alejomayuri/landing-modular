"use client"
import { useState, useEffect } from "react";

export default function HeaderWrapper({
    children, // Contenido del header
    paddingY = "normal", // Padding Y normal por defecto
    paddingX = "normal", // Padding X normal por defecto
    bgColor = "bg-white", // Fondo inicial transparente
    scrolledBgColor = null, // Fondo al hacer scroll
    isFixed = true, // Position fixed por defecto
    aligne = "left", // Orientación horizontal por defecto
    shadow = false, // Sombra por defecto
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
        high: "px-20",
        normal: "px-14",
        low: "px-6",
    };

    // Clases de alineación
    const alignClasses = {
        left: "justify-between",
        center: "justify-center",
        right: "justify-end",
    };

    // Clase de posición dependiendo de `isFixed`
    const positionClass = isFixed ? "fixed top-0 left-0 w-full z-50" : "z-10 absolute top-0 left-0 w-full";

    // Clases dinámicas para el fondo
    const backgroundClass = hasScrolled ? scrolledBgColor ?? bgColor : bgColor;

    const shadowClass = shadow ? "shadow" : "";

    return (
        <header className={`
            ${backgroundClass} ${paddingYClasses[paddingY]} ${paddingXClasses[paddingX]} ${positionClass} ${shadowClass}
            transition-colors duration-300
        `}>
            <div className={`mx-auto flex items-center ${alignClasses[aligne]}`}>
                {children}
            </div>
        </header>
    );
}