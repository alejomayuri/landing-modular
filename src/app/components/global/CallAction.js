import Link from "next/link";
import { iconComponents } from "../ui/icons/iconComponents";
import { fontFamilyClasses } from "../ui/fonts/familyClasses";

export default function CallAction({ 
    text, 
    href,
    icon, // Icono del botón
    iconPosition = "left", // Posición del icono
    iconColor = null, // Color del icono
    borderWidth = null, // Ancho del borde
    borderColor = null, // Color del borde
    borderRadius = null, // Radio de borde
    hoverBorderColor = null, // Color del borde al pasar el mouse
    backgroundColor = null, // Color de fondo
    fontFamily = "sans", // Familia de fuente
    hoverBackgroundColor = null, // Color de fondo al pasar el mouse
    textColor = "text-gray-600", // Color de texto
    hoverTextColor = null, // Color de texto al pasar el mouse
    transition = false, // Transición al pasar el mouse
    paddingY = "low", // Padding Y normal por defecto
    useMobile = false,
    onClick,
    showInMobile = false,
    width = "auto"
}) {
    if(!text || text === "") {
        return null;
    }

    const IconComponent = iconComponents[icon];

    const borderWidthClasses = {
        small: "border",
        normal: "border-2",
        big: "border-4"
    };

    const borderRadiusClasses = {
        small: "rounded",
        normal: "rounded-md",
        big: "rounded-lg",
        full: "rounded-full"
    }

    const paddingYClasses = {
        high: "py-4",
        normal: "py-3",
        low: "py-2",
    };

    const widthClasses = {
        auto: "w-auto",
        small: "w-[150px]",
        normal: "w-[200px]",
        big: "w-[300px]",
        full: "w-full"
    };
    
    return (
        <Link href={href} className={`${
            useMobile ? "flex w-full" : `${showInMobile ? `block ${widthClasses[width]}` : "hidden"}`
        } lg:block`}>
            <button onClick={useMobile ? onClick : null} className={` 
                ${borderWidth && borderWidthClasses[borderWidth]} 
                ${borderColor}
                ${borderRadius && borderRadiusClasses[borderRadius]}
                ${hoverBorderColor}
                ${fontFamilyClasses[fontFamily]}
                ${backgroundColor}
                ${hoverBackgroundColor}
                ${textColor}
                ${hoverTextColor}
                ${transition && "transition duration-200"}
                ${paddingYClasses[paddingY]}
                ${useMobile ? "w-full" : `${widthClasses[width]}`}
                px-4 transform flex items-center justify-center gap-2`
            }>
                {icon && iconPosition === "left" ? (
                    <IconComponent width="20px" height="20px" fill="currentColor"/>
                ) : null}
                {text}
                {icon && iconPosition === "right" ? (
                    <IconComponent width="20px" height="20px" fill="currentColor"/>
                ) : null}
            </button>
        </Link>
    )
}