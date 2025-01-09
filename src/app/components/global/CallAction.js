import Link from "next/link";

export default function CallAction({ 
    text, 
    href,
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
}) {
    if(!text || text === "") {
        return null;
    }

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

    return (
        <Link href={href}>
            <button className={`
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
                    px-4 transform flex items-center justify-center`}>
                {text}
            </button>
        </Link>
    )
}