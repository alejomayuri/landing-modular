//Detecta si el usuario ha hecho scroll en la página

import { useState, useEffect } from "react";

export function useScroll(threshold = 50) {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]);

    return hasScrolled;
}