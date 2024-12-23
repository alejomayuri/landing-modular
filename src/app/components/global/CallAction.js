import Link from "next/link";

export default function Navbar({ 
    text, 
    href,
    borderWidth = null, // Ancho del borde
    borderColor = null, // Color del borde
    borderRadius = null, // Radio de borde
    hoverBorderColor = null, // Color del borde al pasar el mouse
    backgroundColor = null, // Color de fondo
    hoverBackgroundColor = null, // Color de fondo al pasar el mouse
    textColor = "text-gray-600", // Color de texto
    hoverTextColor = null, // Color de texto al pasar el mouse
    transition = false, // Transición al pasar el mouse
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

    return (
        <Link href={href}>
            <button className={`
                    ${borderWidth && borderWidthClasses[borderWidth]} 
                    ${borderColor}
                    ${borderRadius && borderRadiusClasses[borderRadius]}
                    ${hoverBorderColor}
                    ${backgroundColor}
                    ${hoverBackgroundColor}
                    ${textColor}
                    ${hoverTextColor}
                    ${transition && "transition duration-300"}
                    px-4 py-2 transform`}>
                {text}
            </button>
        </Link>
    )
}