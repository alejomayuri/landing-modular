export default function Wrapper({
    children,
    bgImage,
    bgColor,
    containerWidth = "normal", // Ancho de contenedor grande por defecto
    marginTop = "normal",
    height = "normal",
    y_orientation = "center",
    x_orientation = "center",
}) {

    const heightClasses = {
        low: "60vh",
        normal: "70vh",
        high: "750px",
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

    const containerWidthClasses = {
        auto: "lg:w-[auto]",
        small: "lg:max-w-[1124px]",
        normal: "lg:max-w-[1280px]",
        big: "lg:max-w-[1440px]",
        full: "lg:w-full",
    };

    const y_orientationClasses = {
        top: "top-[200px]",
        center: "top-1/2 transform -translate-y-1/2",
        bottom: "bottom-[50px]",
    }

    const x_orientationClasses = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
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
            <div className={`absolute w-full flex ${y_orientationClasses[y_orientation]} ${containerWidthClasses[containerWidth]} ${x_orientationClasses[x_orientation]}`}>
                {children}
            </div>
        </section>
    );
}