import Link from "next/link";
import Image from "next/image";
import CallAction from "../global/CallAction";

export default function TextBlock({ 
    title,
    textContent,
    titleFontSize = "normal",
    textFontSize = "normal",
    width = "normal",
    orientation = "center",
    titleFontFamily = "oswald",
    textFontFamily = "oswald",
    titleColor = "text-white",
    textColor = "text-white",
    callAction
}) {
    if (!title && !textContent) {
        return null;
    }

    const titleFontSizeClasses = {
        small: "text-6xl mb-5",
        normal: "text-7xl mb-6",
        big: "text-8xl mb-8"
    };

    const textFontSizeClasses = {
        small: "text-lg",
        normal: "text-xl",
        big: "text-2xl"
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
            <h1 className={`${titleFontSizeClasses[titleFontSize]} ${titleColor} font-bold ${fontFamilyClasses[titleFontFamily]}`} style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                {title}
            </h1>
            <p className={`${textColor} ${textFontSizeClasses[textFontSize]} ${fontFamilyClasses[textFontFamily]}`}>
                {textContent}
            </p>
            <CallAction
                key={callAction.index}
                text={callAction.text}
                href={callAction.href}
                borderWidth={callAction.borderWidth}
                borderColor={callAction.borderColor}
                borderRadius={callAction.borderRadius}
                fontFamily={callAction.fontFamily}
                hoverBorderColor={callAction.hoverBorderColor}
                backgroundColor={callAction.backgroundColor}
                hoverBackgroundColor={callAction.hoverBackgroundColor}
                textColor={callAction.textColor}
                hoverTextColor={callAction.hoverTextColor}
                transition={callAction.transition}
                paddingY={callAction.paddingY}
                icon={callAction.icon}
                iconPosition={callAction.iconPosition}
                useMobile={true}
            />
        </div>
    );
}