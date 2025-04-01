import Wrapper from "./Wrapper";
import Title from "./Title";
import ItemsContainer from "./ItemsContainer";

export default function ImageBox({ data }) {
    if (!data || Object.keys(data).length === 0) {
        return null; // Devuelve null si no hay datos
    }

    const { type, global, title, items } = data;
    
    const {
        bgColor,
        paddingY,
        paddingX,
    } = global || {}

    // Componente Title
    const showTitle = title && Object.keys(title).length > 0 ? (
        <Title
            data={title}
        />
    ) : null

    const showItemsContainer = items && Object.keys(items).length > 0 ? (
        <ItemsContainer
            data={items}
        />
    ) : null

    let content;
    if (type === 1) {
        content = (
            <>
                {showTitle}
                {showItemsContainer}
            </>
        );
    }

    return (
        <Wrapper paddingY={paddingY} paddingX={paddingX} bgColor={bgColor}>
            {content}
        </Wrapper>
    );
}