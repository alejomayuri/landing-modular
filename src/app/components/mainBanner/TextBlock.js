import CallAction from "../global/CallAction";
import { fontFamilyClasses } from "../ui/fonts/familyClasses";

export default function TextBlock({ 
    title,
    textContent,
    titleFontSize = "normal",
    textFontSize = "normal",
    subtitleFontSize = "small",
    width = "normal",
    orientation = "center",
    titleFontFamily = "barlow",
    textFontFamily = "barlow",
    titleColor = "text-white",
    textColor = "text-white",
    callAction,
    subtitleText,
    subtitleColor = "text-white",
    subtitleFontFamily = "barlow"
}) {
    if (!title && !textContent) {
        return null;
    }

    const titleFontSizeClasses = {
        small: "text-6xl mb-5",
        normal: "text-7xl mb-6",
        big: "text-8xl mb-8"
    };

    const subtitleFontSizeClasses = {
        small: "text-lg mb-1",
        normal: "text-2xl mb-2",
        big: "text-3xl mb-3"
    }

    const textFontSizeClasses = {
        small: "text-lg mb-5",
        normal: "text-xl mb-6",
        big: "text-2xl mb-8"
    };

    const orientationClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    };

    const orientationButtonClasses = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end"
    };

    const widthClasses = {
        small: "w-[300px]",
        normal: "w-[670px]",
        big: "w-[1024px]"
    };

    return (
        <div className={`
                ${orientationClasses[orientation]}
                flex flex-col
                justify-center
                ${widthClasses[width]}
            `}>
            {subtitleText && (
                <h3 className={`${subtitleFontSizeClasses[subtitleFontSize]} ${subtitleColor} ${fontFamilyClasses[subtitleFontFamily]}`} style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                    {subtitleText}
                </h3>
            )}
            <h1 className={`${titleFontSizeClasses[titleFontSize]} ${titleColor} font-bold ${fontFamilyClasses[titleFontFamily]}`} style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                {title}
            </h1>
            <p className={`${textColor} ${textFontSizeClasses[textFontSize]} ${fontFamilyClasses[textFontFamily]}` } style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                {textContent}
            </p>
            {callAction && (
                <div className={`flex ${orientationButtonClasses[orientation]} items-center`}>
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
                        width={callAction.width}
                        paddingY={callAction.paddingY}
                        icon={callAction.icon}
                        showInMobile={callAction.showInMobile}
                        iconPosition={callAction.iconPosition}
                    />
                </div>
            )}
        </div>
    );
}