import Wrapper from "./Wrapper";
import TextBlock from "./TextBlock";

export default function MainBanner({
    data,
    // marginTop
}) {
    if (!data || Object.keys(data).length === 0) {
        return null; // Devuelve null si no hay datos
    }

    const { type, global, textBlock } = data;
    const { global: textBlockGlobal, title, subtitle, textContent, callAction } = textBlock || {}

    const {
        bgImage,
        marginTop,
        bgColor,
        height,
        containerWidth,
        y_orientation,
        x_orientation,
    } = global || {}

    // Componente Title
    const showTitle = title && Object.keys(title).length > 0 ? (
        <TextBlock
            title={title?.text}
            textContent={textContent?.text}
            titleFontSize={title?.fontSize}
            textFontSize={textContent?.fontSize}
            titleFontFamily={title?.fontFamily}
            textFontFamily={textContent?.fontFamily}
            width={textBlockGlobal?.width}
            orientation={textBlockGlobal?.orientation}
            titleColor={title?.color}
            textColor={textContent?.color}
            callAction={callAction}
            subtitleText={subtitle?.text}
            subtitleFontSize={subtitle?.fontSize}
            subtitleColor={subtitle?.color}
            subtitleFontFamily={subtitle?.fontFamily}
        />
    ) : null

    // Determinar contenido según el tipo
    let content;
    if (type === 1) {
        content = (
            <>
                {showTitle}
            </>
        );
    }

    return (
        <Wrapper
            bgImage={bgImage}
            marginTop={marginTop}
            bgColor={bgColor}
            height={height}
            containerWidth={containerWidth}
            y_orientation={y_orientation}
            x_orientation={x_orientation}
        >
            {content}
        </Wrapper>
    );
}