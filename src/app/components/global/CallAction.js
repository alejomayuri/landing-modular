import Link from "next/link";
import IgIcon from "../ui/icons/ig";
import FbIcon from "../ui/icons/fb";
import InternetIcon from "../ui/icons/internet";
import QuestionIcon from "../ui/icons/question";
import PersonIcon from "../ui/icons/person";
import XIcon from "../ui/icons/x";

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
    if(!text || text === "") {http://localhost:3000/#sobre-nosotros
        return null;
    }

    const iconComponents = {
        ig: IgIcon,
        fb: FbIcon,
        internet: InternetIcon,
        question: QuestionIcon,
        person: PersonIcon,
        x: XIcon
    };

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

    // Clases de familia de fuente
    const fontFamilyClasses = {
        sans: "font-sans",
        serif: "font-serif",
        mono: "font-mono",
        robotoMedium: "font-robotoMedium",
        barlow: "font-barlow",
        oswald: "font-oswald"
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
                px-4 transform flex items-center justify-center gap-2 `
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