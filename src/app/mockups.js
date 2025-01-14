export const defaultData = {
    header: {
        type: 6,
        global: {
            aligne: "left",
            paddingY: "low",
            paddingX: "normal",
            bgColor: "bg-transparent",
            scrolledBgColor: "bg-[#007978]",
            isFixed: true,
            shadow: true
        },
        logo: {
            logoSlug: "/pataki.png",
            logoWidth: 120,
            logoHeight: 120
        },
        navbar: {
            navItems: [
            { text: "Inicio", href: "#inicio" },
            { text: "Servicios", href: "#servicios" },
            { text: "Sobre nosotros", href: "#sobre-nosotros" },
            { text: "Contacto", href: "#contacto" },
            { text: "Blog", href: "#blog" },
            ],
            navItemsColor: "text-[#FF4C46]",
            hoverColor: "hover:text-[#007978]",
            hoverUnderline: false,
            hoverTransform: null,
            itemsWeight: "normal",
            fontFamily: "robotoMedium",
            transition: true
        },
        callAction: [
            {
            text: "Iniciar sesión",
            href: "#iniciar-sesion",
            borderWidth: "normal",
            borderRadius: "normal",
            borderColor: "border-[#FF4C46]",
            hoverBorderColor: "hover:border-[#007978]",
            // backgroundColor: "bg-[#FF4C46]",
            hoverBackgroundColor: "hover:bg-[#007978]",
            textColor: "text-[#FF4C46]",
            hoverTextColor: "hover:text-white",
            transition: true
            },
            // {
            //   text: "Registrate",
            //   href: "#registrate",
            //   borderWidth: "normal",
            //   borderRadius: "normal",
            //   borderColor: "border-[#FF4C46]",
            //   hoverBorderColor: "hover:border-[#007978]",
            //   // backgroundColor: "bg-[#FF4C46]",
            //   hoverBackgroundColor: "hover:bg-[#007978]",
            //   textColor: "text-[#FF4C46]",
            //   hoverTextColor: "hover:text-white",
            //   transition: true
            // }
        ],
    }
};

export const demo_first = {
    header: {
        type: 3,
        global: {
            aligne: "right",
            paddingY: "low",
            paddingX: "normal",
            bgColor: "bg-transparent",
            scrolledBgColor: null,
            isFixed: false,
            shadow: true
        },
        logo: null,
        navbar: null,
        callAction: [
            {
                text: "LOG IN",
                href: "#iniciar-sesion",
                borderWidth: "small",
                borderRadius: "small",
                borderColor: "border-[#fff]",
                hoverBorderColor: null,
                backgroundColor: "bg-[#040714]",
                hoverBackgroundColor: "hover:bg-[#fff]",
                textColor: "text-[#fff]",
                hoverTextColor: "hover:text-[#040714]",
                transition: true,
                paddingY: "normal"
            }
        ],
    }
};

export const demo_second = {
    header: {
        type: 4,
        global: {
            aligne: "left",
            paddingY: "low",
            paddingX: "normal",
            bgColor: "bg-transparent",
            scrolledBgColor: "bg-[#007978]",
            isFixed: true,
            shadow: true
        },
        logo: {
            logoSlug: "/pataki.png",
            logoWidth: 120,
            logoHeight: 120
        },
        navbar: null,
        callAction: [
            {
                text: "Log in",
                href: "#iniciar-sesion",
                borderWidth: "small",
                borderRadius: "full",
                borderColor: "border-[#161616]",
                hoverBorderColor: "hover:border-[#292929]",
                backgroundColor: "bg-[#161616]",
                hoverBackgroundColor: "hover:bg-[#292929]",
                textColor: "text-[#DEDED3]",
                hoverTextColor: "hover:text-[#C4C4C4]",
                transition: true,
                paddingY: "low"
            },
            {
                text: "Sing up",
                href: "#registrate",
                borderWidth: "small",
                borderRadius: "full",
                borderColor: "border-[#C4C4C4]",
                hoverBorderColor: "hover:border-[#ABABAB]",
                backgroundColor: "bg-[#C4C4C4]",
                hoverBackgroundColor: "hover:bg-[#ABABAB]",
                textColor: "text-[#161616]",
                hoverTextColor: "hover:text-[#161616]",
                transition: true,
                paddingY: "low"
            }
        ],
    }
};

export const demo_third = {
    header: {
        type: 5,
        global: {
            aligne: "left",
            paddingY: "low",
            paddingX: "low",
            bgColor: "bg-[#121F3D]",
            scrolledBgColor: null,
            isFixed: true,
            shadow: true
        },
        logo: {
            logoSlug: "/pataki.png",
            logoWidth: 120,
            logoHeight: 120
        },
        navbar: {
            navItems: [
            { text: "Cursos", href: "#inicio" },
            { text: "Comunidad", href: "#servicios" },
            { text: "Lanzamientos", href: "#sobre-nosotros" },
            { text: "Plans", href: "#contacto" },
            { text: "Contact us", href: "#blog" },
            ],
            navItemsColor: "text-[#FFF]",
            hoverColor: "hover:text-[#A7ACB7]",
            hoverUnderline: false,
            hoverTransform: null,
            itemsWeight: "normal",
            fontFamily: "barlow",
            transition: true,
            spaceBetweenItems: "normal"
        },
        callAction: [
            {
                text: "EMPRESAS",
                href: "#iniciar-sesion",
                borderWidth: "normal",
                borderRadius: "big",
                borderColor: "border-[#98CA3F]",
                hoverBorderColor: "hover:border-[#C1DF8B]",
                backgroundColor: null,
                hoverBackgroundColor: null,
                textColor: "text-[#98CA3F]",
                hoverTextColor: "hover:text-[#C1DF8B]",
                transition: true,
                fontFamily: "oswald",
                icon: "internet",
                iconPosition: "left",
            },
            {
                text: "LOG IN",
                href: "#registrate",
                borderWidth: "normal",
                borderRadius: "big",
                borderColor: "border-[#98CA3F]",
                hoverBorderColor: "hover:border-[#C1DF8B]",
                backgroundColor: "bg-[#98CA3F]",
                hoverBackgroundColor: "hover:bg-[#C1DF8B]",
                textColor: "text-[#fff]",
                hoverTextColor: null,
                transition: true,
                fontFamily: "oswald",
                icon: null,
                iconPosition: null,
            }
        ],
        menuMobile: {
            color: "#fff",
            itemsColor: "text-white",
            menuBgColor: "bg-[#121F3D]"
        }
    }
};

export const demo_fourth = {
    header: {
        type: 6,
        global: {
            aligne: "left",
            paddingY: "low",
            paddingX: "normal",
            bgColor: "bg-[#fff]",
            scrolledBgColor: null,
            isFixed: false,
            shadow: true
        },
        logo: {
            logoSlug: "/pataki.png",
            logoWidth: 90,
            logoHeight: 90
        },
        navbar: {
            navItems: [
                { text: "Vehicles", href: "#inicio" },
                { text: "Energy", href: "#servicios" },
                { text: "Charging", href: "#sobre-nosotros" },
                { text: "Discover", href: "#contacto" },
                { text: "Shop", href: "#blog" },
                { text: "We, Robot", href: "#blog" },
            ],
            navItemsColor: "text-[#383c43]",
            hoverColor: null,
            hoverUnderline: false,
            hoverTransform: null,
            itemsWeight: "normal",
            fontSize: "small",
            fontFamily: "barlow",
            transition: true,
            spaceBetweenItems: "big"
        },
        icons : {
            icons: [
                { icon: "question", href: "#xd" },
                { icon: "internet", href: "#xd" },
                { icon: "person", href: "#" }
            ],
            spaceBetweenItems: "normal",
            color: "text-gray-800",
            hoverColor: "hover:text-red-600",
            size: "small"
        },
        menuMobile: {
            color: "#383c43",
            itemsColor: "text-gray-900",
        }
    }
};

export const demo_fifth = {
    header: {
        type: 7,
        global: {
            aligne: "left",
            paddingY: "low",
            paddingX: "low",
            bgColor: "bg-[#fff]",
            scrolledBgColor: null,
            isFixed: true,
            shadow: true
        },
        logo: {
            logoSlug: "/pataki.png",
            logoWidth: 90,
            logoHeight: 90
        },
        navbar: {
            navItems: [
                { text: "Vehicles", href: "#inicio" },
                { text: "Energy", href: "#servicios" },
                { text: "Charging", href: "#sobre-nosotros" },
                { text: "Discover", href: "#contacto" },
                { text: "Shop", href: "#blog" },
                { text: "We, Robot", href: "#blog" },
            ],
            navItemsColor: "text-[#383c43]",
            hoverColor: null,
            hoverUnderline: false,
            hoverTransform: null,
            itemsWeight: "normal",
            fontSize: "small",
            fontFamily: "barlow",
            transition: true,
            spaceBetweenItems: "big"
        },
        callAction: [
            {
                text: "EMPRESAS",
                href: "#iniciar-sesion",
                borderWidth: "normal",
                borderRadius: "big",
                borderColor: "border-[#383c43]",
                hoverBorderColor: null,
                backgroundColor: null,
                hoverBackgroundColor: null,
                textColor: "text-[#383c43]",
                hoverTextColor: "hover:text-gray-600",
                transition: true,
                fontFamily: "oswald",
                icon: "internet",
                iconPosition: "left",
            },
            {
                text: "LOG IN",
                href: "#registrate",
                borderWidth: "normal",
                borderRadius: "big",
                borderColor: "border-[#383c43]",
                hoverBorderColor: null,
                backgroundColor: "bg-[#383c43]",
                hoverBackgroundColor: "hover:bg-gray-600",
                textColor: "text-[#fff]",
                hoverTextColor: null,
                transition: true,
                fontFamily: "oswald",
                icon: null,
                iconPosition: null,
            }
        ],
        icons : {
            icons: [
                { icon: "ig", href: "#xd" },
                { icon: "fb", href: "#xd" },
                { icon: "x", href: "#" }
            ],
            spaceBetweenItems: "normal",
            color: "text-gray-800",
            hoverColor: "hover:text-gray-600",
            size: "small"
        },
        menuMobile: {
            type: "default",
            color: "#383c43",
            navHeight: "big",
            itemsColor: "text-gray-900",
        }
    },
    mainBanner: {
        global: {
            bgImage: "/banner1.png",
        }
    }
};