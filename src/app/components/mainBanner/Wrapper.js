export default function Wrapper({
    children,
    bgImage,
    bgColor,
    marginTop = "normal",
}) {
    console.log("bgImage", bgImage)
    const marginTopClasses = {
        none: "",
        low: "mt-[69px]",
        normal: "mt-[93px]",
        high: "mt-[157px]",
    };
    return (
        <section
            className={`${bgColor} relative h-screen flex items-center justify-center ${marginTopClasses[marginTop]}`}
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {children}
        </section>
    );
}