export default function Wrapper({
    children,
    bgImage,
    bgColor,
    marginTop = "normal",
    height = "normal",
    orientation = "top",
}) {

    const heightClasses = {
        low: "60vh",
        normal: "70vh",
        high: "80vh",
        full: "100vh",
    };
    
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

    const orientationClasses = {
        top: "top-[200px]",
        center: "top-1/2 transform -translate-y-1/2",
        bottom: "bottom-[100px]",
    }

    return (
        <section
            className={`${bgColor} relative ${heightClasses[height]} flex items-center justify-center ${marginTopClasses[marginTop]}`}
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(${heightClasses[height]} - ${bannerHeight[marginTop]})`,
            }}
        >
            <div className={`absolute  ${orientationClasses[orientation]}`}>
                {children}
            </div>
        </section>
    );
}