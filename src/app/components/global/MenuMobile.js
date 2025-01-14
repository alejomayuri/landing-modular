"use client"
import { useState } from "react";
import MenuIcon from "../ui/icons/menu";
import CloseIcon from "../ui/icons/close";
import IconBox from "./IconBox";
import CallAction from "./CallAction";

export default function MenuMobile({ 
    type = "default", 
    color,
    navItems,
    fontSize = "normal",
    itemsColor = "text-white",
    icons,
    menuBgColor = "bg-white",
    callAction
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    let menuIconType
    
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
      }

    const animation = isVisible ? "opacity-100" : "opacity-0"

    // Clases de tamaño de fuente
    const fontSizeClasses = {
        small: "text-base",
        normal: "text-lg",
        big: "text-xl"
    }

    if (type === "default") {
        menuIconType = <MenuIcon className="w-8 h-8" stroke={color} />;
    } else if (type === "text") {
        menuIconType = <p
            className={`text-base font-bold ${itemsColor}`}
        >Menu</p>
    }
    
    return (
        <>
            <button className="lg:hidden" onClick={toggleMenu}>
                {menuIconType}
            </button>

            
            {isMenuOpen && (<div
                className={`fixed inset-0 ${menuBgColor} px-10 py-28 z-50 flex flex-col text-white transition-opacity duration-300 ${animation}`}
            >
                <button
                    className="absolute top-5 right-5 text-2xl p-2 rounded-full"
                    onClick={toggleMenu}
                >
                    <CloseIcon className="w-5 h-5" fill={color} />
                </button>
                <nav className="flex flex-col space-y-12 text-xl">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className={`hover:underline font-bold ${fontSizeClasses[fontSize]} ${itemsColor}`}>
                            {item.text}
                        </a>
                    ))}
                </nav>
                {callAction && <div className="flex flex-col gap-4 mt-auto justify-center items-center">
                    {callAction.map((item, index) => {
                        const { 
                            text, 
                            href, 
                            borderWidth, 
                            borderColor, 
                            borderRadius, 
                            hoverBorderColor, 
                            backgroundColor, 
                            hoverBackgroundColor, 
                            textColor, 
                            hoverTextColor, 
                            transition,
                            fontFamily,
                            paddingY,
                            icon,
                            iconPosition,
                        } = item;
                
                        return (
                            <CallAction
                                key={index}
                                text={text}
                                href={href}
                                borderWidth={borderWidth}
                                borderColor={borderColor}
                                borderRadius={borderRadius}
                                fontFamily={fontFamily}
                                hoverBorderColor={hoverBorderColor}
                                backgroundColor={backgroundColor}
                                hoverBackgroundColor={hoverBackgroundColor}
                                textColor={textColor}
                                hoverTextColor={hoverTextColor}
                                transition={transition}
                                paddingY={paddingY}
                                icon={icon}
                                iconPosition={iconPosition}
                                useMobile={true}
                            />
                        );
                    })}
                </div>}
                {icons && <div className="mt-auto">
                    <IconBox
                        icons={icons.icons}
                        spaceBetweenItems={icons.spaceBetweenItems}
                        color={icons.color}
                        hoverColor={icons.hoverColor}
                        size={icons.size}
                        useMobile={true}
                    />
                </div>}
            </div>)}
        </>
    )
}