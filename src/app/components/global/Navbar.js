"use client"
import { fontFamilyClasses } from "../ui/fonts/familyClasses";
import { useScroll } from "@/app/hooks/useScroll";

export default function Navbar({
    navItems, // Elementos de navegación
    spaceBetweenItems = "normal", // Espacio entre elementos
    color = "text-gray-600", // Color de fuente
    scrolledColor = null, // Color de fuente al hacer scroll
    hoverColor = null, // Color de fuente al pasar el mouse
    fontSize = "normal", // Tamaño de fuente
    fontFamily = "sans", // Familia de fuente
    hoverUnderline, // Tipo de subrayado al pasar el mouse
    hoverTransform = null, // Peso de fuente al pasar el mouse
    itemsWeight = "normal", // Transformación al pasar el mouse
    transition = false, // Transición al pasar el mouse
}) {
    const hasScrolled = useScroll();

    // Clases de tamaño de fuente
    const fontSizeClasses = {
        small: "text-sm",
        normal: "text-base",
        big: "text-lg"
    };

    // Clases de espacio entre elementos
    const spaceBetweenItemsClasses = {
        small: "space-x-4",
        normal: "space-x-6",
        big: "space-x-8"
    };

    // Clases de transformación al pasar el mouse
    const hoverTransformClasses = {
        small: "hover:scale-[1.02]",
        normal: "hover:scale-[1.03]",
        big: "hover:scale-[1.04]",
    };

    // Clases de peso de fuente
    const weightClasses = {
        small: "font-medium",
        normal: "font-semibold",
        big: "font-bold",
    };

    // Clases dinámicas para el color
    const colorClass = hasScrolled ? scrolledColor ?? color : color;
    
    if (!navItems) {
        return null;
    }

    return (
        <nav className={`hidden lg:flex ${spaceBetweenItemsClasses[spaceBetweenItems]}`}>
            {navItems.map((item, index) => (
                <a key={index} href={item.href} id={`link-${index}`} className={`flex items-center ${fontSizeClasses[fontSize]} ${fontFamilyClasses[fontFamily]} ${hoverUnderline && "hover:underline"} ${colorClass} ${hoverColor} ${hoverTransform && hoverTransformClasses[hoverTransform]} ${weightClasses[itemsWeight]} ${transition && "transition duration-200"} transform`}>
                    {item.text}
                </a>
            ))}
        </nav>
    );
}