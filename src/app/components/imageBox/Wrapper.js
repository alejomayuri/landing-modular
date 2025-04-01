export default function Wrapper({
    children,
    bgColor,
    paddingY,
    paddingX,
}) {

    const paddingYClasses = {
        high: "py-14",
        normal: "py-6",
        low: "py-3",
    };

    return (
        <section className={`${bgColor} ${paddingYClasses[paddingY]} ${paddingX} flex items-center justify-center`}>
            <div className="px-4 lg:px-0 flex flex-col items-center justify-center">
                {children}
            </div>
        </section>
    );
}