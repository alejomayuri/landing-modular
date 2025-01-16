import Wrapper from "./Wrapper";

export default function MainBanner({
    data,
    // marginTop
}) {
    if (!data || Object.keys(data).length === 0) {
        return null; // Devuelve null si no hay datos
    }

    const { type, global, title } = data;

    const {
        bgImage,
        marginTop,
        bgColor
    } = global || {}

    // Componente Title
    const showTitle = title && Object.keys(title).length > 0 ? (
        <h1 className="text-white text-4xl font-bold">{title.text}</h1>
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