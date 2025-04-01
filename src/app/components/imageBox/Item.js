export default function Item({ data, effect }) {
    const { slug, text, title } = data || {};
    let content;

    if (effect === "swap") {
        content = <>
            <img
                src={slug[0] || slug[0]}
                alt="Imagen normal"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
            />
            <img
                src={slug[1] || slug[0]}  
                alt="Imagen al pasar el mouse"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
            />
        </>    
    }

    if (effect === "zoom-in") {
        content = <img
            src={slug[0]}
            alt="Imagen normal"
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
        />
    }

    if (effect === "glassmorphism") {
        content = <>
            <img src={slug[0]} alt="Imagen" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-white text-lg font-bold">{text}</p>
            </div>
        </>
    }

    if (effect === "scroll") {
        content = <div className="w-full h-full bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${slug[0]})` }}></div>
    }

    return (
        <div>
            {title && <h3 className="text-center text-lg font-bold mb-2">{title}</h3>}
            <div className="relative flex items-center justify-center w-[300px] h-[300px] bg-gray-200 rounded shadow-md overflow-hidden">
                {content}
            </div>
            {text && <p className="text-center text-sm mt-2">{text}</p>}
        </div>
    );
}