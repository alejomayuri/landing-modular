import { fontFamilyClasses } from "../ui/fonts/familyClasses";

export default function Title({ data }) {
    const { text, color, fontSize, fontFamily = "barlow" } = data || {}

    if (!data || Object.keys(data).length === 0) {
        return null;
    }

    const titleFontSizeClasses = {
        small: "text-3xl lg_text-5xl mb-5",
        normal: "text-4xl lg:text-6xl  mb-6",
        big: "text-6xl lg:text-7xl mb-8",
    };

    return (
        <div className="flex items-center justify-center">
            <h2 className={`text-center ${color} ${titleFontSizeClasses[fontSize]} ${fontFamilyClasses[fontFamily]}`}>{text}</h2>
        </div>
    )
}