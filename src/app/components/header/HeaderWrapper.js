"use client"
import { useScroll } from "../../hooks/useScroll";

export default function HeaderWrapper({
    children, // Contenido del header
    paddingY = "normal", // Padding Y normal por defecto
    paddingX = "normal", // Padding X normal por defecto
    containerWidth = "full", // Ancho de contenedor grande por defecto
    bgColor = "bg-white", // Fondo inicial transparente
    scrolledBgColor = null, // Fondo al hacer scroll
    isFixed = true, // Position fixed por defecto
    aligne = "left", // Orientación horizontal por defecto
    shadow = false, // Sombra por defecto
    border = null, // Borde por defecto
    borderColor = null, // Color de borde
    scrolledborderColor = null, // Color de borde al hacer scroll
}) {
    const hasScrolled = useScroll();

    // Clases de padding en Y
    const paddingYClasses = {
        high: "py-14",
        normal: "py-6",
        low: "py-3",
    };
    
    // Clases de padding en X
    const paddingXClasses = {
        high: "lg:px-20",
        normal: "lg:px-14",
        low: "lg:px-6",
    };

    // Clases de ancho de contenedor
    const containerWidthClasses = {
        small: "lg:max-w-[1124px]",
        normal: "lg:max-w-[1280px]",
        big: "lg:max-w-[1440px]",
        full: "lg:w-full",
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
    const borderColorClass = hasScrolled ? scrolledborderColor ?? borderColor : borderColor;

    // Clases de padding en Y
    const borderClasses = {
        small: "border-b-[1px]",
        normal: "border-b-[3px]",
        big: "border-b-[5px]",
    };

    const shadowClass = shadow ? "shadow" : "";

    return (
        <header className={`
            ${backgroundClass} ${paddingYClasses[paddingY]} ${borderColorClass} ${borderClasses[border]} ${paddingXClasses[paddingX]} ${positionClass} ${shadowClass}
            transition-colors duration-300 px-4
        `}>
            <div className={`mx-auto flex items-center ${alignClasses[aligne]} ${containerWidthClasses[containerWidth]}`}>
                {children}
            </div>
        </header>
    );
}