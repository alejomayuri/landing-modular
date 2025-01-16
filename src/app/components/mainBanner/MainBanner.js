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
    const { global: textBlockGlobal, title, textContent } = textBlock || {}

    const {
        bgImage,
        marginTop,
        bgColor
    } = global || {}

    // Componente Title
    const showTitle = title && Object.keys(title).length > 0 ? (
        <TextBlock
            title={title.text}
            fontSize={title.fontSize}
            width={title.width}
            orientation={textBlockGlobal.orientation}
            titleColor={title.color}
            textContent={textContent.text}
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
        >
            {content}
        </Wrapper>
    );
}