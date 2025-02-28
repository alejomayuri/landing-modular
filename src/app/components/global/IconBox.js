import Link from "next/link";
import { iconComponents } from "../ui/icons/iconComponents";

export default function IconBox({ 
    icons, 
    spaceBetweenItems = "normal", // Espacio entre elementos
    color = "text-gray-600", // Color del ícono
    hoverColor = null, // Color del ícono al pasar el mouse
    size = "normal",
    useMobile = false,
    onClick
}) {
    if (!icons) {
        return null;
    }

    // Clases de espacio entre elementos
    const spaceBetweenItemsClasses = {
        small: "space-x-2",
        normal: "space-x-4",
        big: "space-x-6"
    };

    // Clases detamaño de ícono
    const sizeClasses = {
        small: "w-6 h-6",
        normal: "w-8 h-8",
        big: "w-10 h-10"
    }

    return (
        <div className={` ${
            useMobile ? "flex" : "hidden"
        } lg:flex ${
            spaceBetweenItemsClasses[spaceBetweenItems]
        }`}>
            {icons.map((iconData, index) => {
                const IconComponent = iconComponents[iconData.icon];

                // Validar si el ícono existe en el diccionario
                if (!IconComponent) return null;

                return (
                    <Link
                        key={index}
                        href={iconData.href}
                        aria-label={`Enlace a ${iconData.icon}`}
                        className=" transition-opacity"
                        onClick={onClick}
                    >
                        <IconComponent className={`${color} ${hoverColor} ${sizeClasses[size]} transition duration-200`} fill="currentColor" />
                    </Link>
                );
            })}
        </div>
    );
}