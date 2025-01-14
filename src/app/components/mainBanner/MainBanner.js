import Wrapper from "./Wrapper";

export default function MainBanner({
    data,
    marginTop
}) {
    if (!data || Object.keys(data).length === 0) {
        return null; // Devuelve null si no hay datos
    }

    const { global } = data;

    const {
        bgImage
    } = global || {};

    return (
        <Wrapper
            bgImage={bgImage}
            marginTop={marginTop}
        >
            <p>xd</p>
        </Wrapper>
    );
}