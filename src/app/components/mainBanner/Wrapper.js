export default function Wrapper({
    children,
    bgImage,
    bgColor,
    marginTop = "normal",
}) {
    
    const marginTopClasses = {
        none: "",
        low: "mt-[69px]",
        normal: "mt-[93px]",
        high: "mt-[157px]",
    };

    const bannerHeight = {
        none: "0px",
        low: "69px",
        normal: "93px",
        high: "157px",
    };

    return (
        <section
            className={`${bgColor} relative h-screen flex items-center justify-center ${marginTopClasses[marginTop]}`}
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${bannerHeight[marginTop]})`,
            }}
        >
            {children}
        </section>
    );
}