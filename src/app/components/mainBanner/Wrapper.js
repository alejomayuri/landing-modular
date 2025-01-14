export default function Wrapper({
    children,
    bgImage,
    marginTop = "normal",
}) {
    console.log("bgImage", bgImage)
    const marginTopClasses = {
        high: "mt-[157px]",
        normal: "mt-[93px]",
        low: "mt-[69px]",
    };
    return (
        <section
            className={`relative h-screen flex items-center justify-center ${marginTopClasses[marginTop]}`}
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