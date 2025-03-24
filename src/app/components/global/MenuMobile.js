"use client"
import { useState } from "react";
import MenuIcon from "../ui/icons/menu";
import CloseIcon from "../ui/icons/close";
import IconBox from "./IconBox";
import CallAction from "./CallAction";

export default function MenuMobile({ 
    type = "default", 
    color,
    closeColor,
    navItems,
    fontSize = "normal",
    itemsColor = "text-white",
    icons,
    menuBgColor = "bg-white",
    callAction,
    navHeight = "normal"
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

    const navHeightClasses = {
        small: "h-1/3",
        normal: "h-1/2",
        big: "h-4/6"
    }

    const closeColorClass = closeColor ? closeColor : color

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
                className={`fixed inset-0 ${menuBgColor} px-10 py-16 z-50 flex flex-col text-white transition-opacity duration-300 ${animation}`}
            >
                <button
                    className="absolute top-5 right-5 text-2xl p-2 rounded-full"
                    onClick={toggleMenu}
                >
                    <CloseIcon className="w-5 h-5" fill={closeColorClass} />
                </button>
                <nav className={`flex flex-col ${navHeightClasses[navHeight]} text-xl`}>
                    {navItems.map((item, index) => (
                        <a onClick={toggleMenu} key={index} href={item.href} className={`mt-auto hover:underline font-bold ${fontSizeClasses[fontSize]} ${itemsColor}`}>
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
                                onClick={toggleMenu}
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
                        onClick={toggleMenu}
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