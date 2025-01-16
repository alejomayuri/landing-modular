import Link from "next/link";
import Image from "next/image";

export default function TextBlock({ 
    title,
    textContent,
    fontSize = "normal",
    width = "normal",
    orientation = "center",
    fontFamily = "oswald",
    titleColor = "text-white"
}) {
    if (!title && !textContent) {
        return null;
    }

    const fontSizeClasses = {
        small: "text-6xl mb-4",
        normal: "text-7xl mb-6",
        big: "text-8xl mb-8"
    };

    const orientationClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    };

    const widthClasses = {
        small: "w-[300px]",
        normal: "w-[700px]",
        big: "w-[1024px]"
    };

    const fontFamilyClasses = {
        sans: "font-sans",
        serif: "font-serif",
        mono: "font-mono",
        robotoMedium: "font-robotoMedium",
        barlow: "font-barlow",
        oswald: "font-oswald"
    };

    return (
        <div className={`
                ${orientationClasses[orientation]}
                ${widthClasses[width]}
                p-4
            `}>
            <h1 className={`
                text-white ${fontSizeClasses[fontSize]} ${titleColor} font-bold ${fontFamilyClasses[fontFamily]}`} style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                {title}
            </h1>
            <p>
                {textContent}
            </p>
        </div>
    );
}