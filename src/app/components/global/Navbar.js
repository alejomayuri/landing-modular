// import { geistSans, robotoMedium } from "@/app/layout";

export default function Navbar({
    navItems, // Elementos de navegación
    spaceBetweenItems = "normal", // Espacio entre elementos
    color = "text-gray-600", // Color de fuente
    hoverColor = null, // Color de fuente al pasar el mouse
    fontSize = "normal", // Tamaño de fuente
    fontFamily = "sans", // Familia de fuente
    hoverUnderline, // Tipo de subrayado al pasar el mouse
    hoverTransform = null, // Peso de fuente al pasar el mouse
    itemsWeight = "normal", // Transformación al pasar el mouse
    transition = true, // Transición al pasar el mouse
}) {
    if (!navItems) {
        return null;
    }

    // Clases de tamaño de fuente
    const fontSizeClasses = {
        small: "text-sm",
        normal: "text-base",
        big: "text-lg"
    };

    // Clases de espacio entre elementos
    const spaceBetweenItemsClasses = {
        small: "space-x-2",
        normal: "space-x-4",
        big: "space-x-6"
    };

    // Clases de familia de fuente
    const fontFamilyClasses = {
        sans: "sans",
        serif: "serif",
        mono: "mono",
        robotoMedium: "robotoMedium",
        barlow: "barlow",
    };

    // Clases de transformación al pasar el mouse
    const hoverTransformClasses = {
        small: "hover:scale-[1.02]",
        normal: "hover:scale-[1.03]",
        big: "hover:scale-[1.04]",
    };

    const weightClasses = {
        small: "font-medium",
        normal: "font-semibold",
        big: "font-bold",
    };

    return (
        <nav className={`flex ${spaceBetweenItemsClasses[spaceBetweenItems]}`}>
            {navItems.map((item, index) => (
                <a key={index} href={item.href} id={`link-${index}`} className={`
                    flex items-center
                    ${fontSizeClasses[fontSize]}
                    font-${fontFamilyClasses[fontFamily]} 
                    ${hoverUnderline ? "hover:underline" : ""}
                    ${color} ${hoverColor}
                    ${hoverTransformClasses[hoverTransform]}
                    ${weightClasses[itemsWeight]}
                    font-bold
                    ${transition ? "transition duration-300" : ""}
                    transform
                `}>{item.text}</a>
            ))}
            {/* <button
                className={`
                    border-2 border-[#FF4C46] rounded-md px-4 py-2
                `}
            >
                Iniciar sesión
            </button> */}
        </nav>
    );
}