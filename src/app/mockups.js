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
        // menuMobile: {
        //     color: "#fff",
        //     itemsColor: "text-white",
        //     menuBgColor: "bg-[#1F8061]"
        // }
    },
    mainBanner: {
        global: {
            bgImage: "/banner3.jpg",
            bgColor: "bg-[#0C1633]",
            marginTop: "none",
        }
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
            logoSlug: "/pataki_white.png",
            logoWidth: 80,
            logoHeight: 80
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
                showInMobile: true,
                width: "auto",
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
                width: "auto",
                icon: null,
                iconPosition: null,
            }
        ],
        menuMobile: {
            color: "#fff",
            itemsColor: "text-white",
            menuBgColor: "bg-[#121F3D]"
        }
    },
    mainBanner: {
        type: 1,
        global: {
            // bgImage: "/banner3.jpg",
            bgColor: "bg-[#0C1633]",
            marginTop: "none",
            height: "full",
            y_orientation: "top"
        },
        textBlock: {
            global: {
                orientation: "left",
                width: "normal",
            },
            title: {
                text: "DECIDE TU PRÓXIMO PASO EN LA INDUSTRIA TECNOLÓGICA",
                color: "text-white",
                fontSize: "small",
                fontFamily: "oswald"
            },
            textContent: {
                text: "Con este test vas a descubrir el área profesional que más se acerca a tu perfil e intereses. Refuerza tus habilidades o encuentra tu nueva vocación.",
                color: "text-[#8da2c0]",
                fontSize: "small",
                fontFamily: "barlow"
            },
            // callAction: {
            //     text: "EMPRESAS",
            //     href: "#iniciar-sesion",
            //     borderWidth: "normal",
            //     borderRadius: "big",
            //     borderColor: "border-[#98CA3F]",
            //     hoverBorderColor: "hover:border-[#C1DF8B]",
            //     backgroundColor: null,
            //     hoverBackgroundColor: null,
            //     showInMobile: true,
            //     width: "big",
            //     textColor: "text-[#98CA3F]",
            //     hoverTextColor: "hover:text-[#C1DF8B]",
            //     transition: true,
            //     fontFamily: "oswald",
            //     icon: "internet",
            //     iconPosition: "left",
            // },
        },
    },
};

export const demo_fourth = {
    header: {
        type: 6,
        global: {
            aligne: "left",
            paddingY: "low",
            paddingX: "normal",
            bgColor: "bg-transparent",
            scrolledBgColor: null,
            isFixed: false,
            shadow: false
        },
        logo: {
            logoSlug: "/pataki_white.png",
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
            navItemsColor: "text-white",
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
            color: "text-white",
            hoverColor: null,
            size: "small"
        },
        menuMobile: {
            color: "#383c43",
            itemsColor: "text-gray-900",
        }
    },
    mainBanner: {
        global: {
            bgImage: "/banner2.jpg",
            bgColor: "bg-[#0C1633]",
            marginTop: "none",
        }
    }
};

export const demo_fifth = {
    header: {
        type: 7,
        global: {
            aligne: "left",
            paddingY: "low",
            paddingX: "high",
            containerWidth: "normal",
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
                showInMobile: true,
                paddingY: "low"
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
                paddingY: "low"
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
        type: 1,
        global: {
            bgImage: "/banner1.png",
            bgColor: "bg-[#0C1633]",
            marginTop: "low",
            height: "full",
            y_orientation: "center",
            x_orientation: "left"
        },
        textBlock: {
            global: {
                orientation: "left",
                width: "normal",
            },
            title: {
                text: "DECIDE TU PRÓXIMO PASO EN LA INDUSTRIA TECNOLÓGICA",
                color: "text-white",
                fontSize: "small",
                fontFamily: "oswald"
            },
            subtitle: {
                text: "PATAKI LANDING PAGE",
                color: "white",
                fontSize: "small",
                fontFamily: "barlow"
            },
            textContent: {
                text: "Con este test vas a descubrir el área profesional que más se acerca a tu perfil e intereses. Refuerza tus habilidades o encuentra tu nueva vocación.",
                color: "text-white",
                fontSize: "small",
                fontFamily: "barlow"
            },
            callAction: {
                text: "EMPRESAS",
                href: "#iniciar-sesion",
                borderWidth: "normal",
                borderRadius: "big",
                borderColor: "border-white",
                hoverBorderColor: null,
                backgroundColor: null,
                hoverBackgroundColor: null,
                showInMobile: true,
                width: "normal",
                textColor: "text-white",
                hoverTextColor: "hover:text-white",
                transition: true,
                fontFamily: "oswald",
                icon: "internet",
                iconPosition: "left",
            },
        },
    }
};

export const demo_six = {
    header: {
        type: 4,
        global: {
            aligne: "left",
            paddingY: "low",
            paddingX: "normal",
            containerWidth: "small",
            bgColor: "bg-transparent",
            scrolledBgColor: "bg-[#fff]",
            isFixed: true,
            shadow: false,
            border: "normal",
            borderColor: "border-[transparent]",
            scrolledborderColor: "border-[#383c43]"
        },
        logo: {
            logoSlug: "/pataki_white.png",
            logoSlugScrolled: "/pataki.png",
            logoWidth: 90,
            logoHeight: 90
        },
        navbar: {
            navItems: [
                { text: "Home", href: "#inicio" },
                { text: "About", href: "#servicios" },
                { text: "Portfolio", href: "#sobre-nosotros" },
                { text: "News", href: "#contacto" },
                { text: "Contact", href: "#blog" },
            ],
            navItemsColor: "text-white",
            scrolledColor: "text-[#383c43]",
            hoverColor: "hover:text-[#E54B4B]",
            hoverUnderline: false,
            hoverTransform: null,
            itemsWeight: "normal",
            fontSize: "normal",
            fontFamily: "poppinsRegular",
            transition: true,
            spaceBetweenItems: "big"
        },
        // callAction: [
        //     {
        //         text: "EMPRESAS",
        //         href: "#iniciar-sesion",
        //         borderWidth: "normal",
        //         borderRadius: "big",
        //         borderColor: "border-[#383c43]",
        //         hoverBorderColor: null,
        //         backgroundColor: null,
        //         hoverBackgroundColor: null,
        //         textColor: "text-[#383c43]",
        //         hoverTextColor: "hover:text-gray-600",
        //         transition: true,
        //         fontFamily: "oswald",
        //         icon: "internet",
        //         iconPosition: "left",
        //         showInMobile: true,
        //         paddingY: "low"
        //     },
        //     {
        //         text: "LOG IN",
        //         href: "#registrate",
        //         borderWidth: "normal",
        //         borderRadius: "big",
        //         borderColor: "border-[#383c43]",
        //         hoverBorderColor: null,
        //         backgroundColor: "bg-[#383c43]",
        //         hoverBackgroundColor: "hover:bg-gray-600",
        //         textColor: "text-[#fff]",
        //         hoverTextColor: null,
        //         transition: true,
        //         fontFamily: "oswald",
        //         icon: null,
        //         iconPosition: null,
        //         paddingY: "low"
        //     }
        // ],
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
            color: "#fff",
            navHeight: "big",
            itemsColor: "text-gray-900",
        }
    },
    mainBanner: {
        type: 1,
        global: {
            bgImage: "/banner4.webp",
            bgColor: "bg-[#0C1633]",
            marginTop: "none",
            height: "full",
            containerWidth: "small",
            y_orientation: "center",
            x_orientation: "left"
        },
        textBlock: {
            global: {
                orientation: "left",
                width: "normal",
            },
            title: {
                text: "Alan Walker",
                color: "text-white",
                fontSize: "normal",
                fontFamily: "poppinsBold"
            },
            // subtitle: {
            //     text: "PATAKI LANDING PAGE",
            //     color: "white",
            //     fontSize: "small",
            //     fontFamily: "barlow"
            // },
            textContent: {
                text: "Web & Mobile App Developer",
                color: "text-[#ddd]",
                fontSize: "normal",
                fontFamily: "poppinsRegular"
            },
            // callAction: {
            //     text: "EMPRESAS",
            //     href: "#iniciar-sesion",
            //     borderWidth: "normal",
            //     borderRadius: "big",
            //     borderColor: "border-white",
            //     hoverBorderColor: null,
            //     backgroundColor: null,
            //     hoverBackgroundColor: null,
            //     showInMobile: true,
            //     width: "normal",
            //     textColor: "text-white",
            //     hoverTextColor: "hover:text-white",
            //     transition: true,
            //     fontFamily: "oswald",
            //     icon: "internet",
            //     iconPosition: "left",
            // },
        },
    }
};

export const demo_seven = {
    header: {
        type: 4,
        global: {
            aligne: "left",
            paddingY: "low",
            paddingX: "normal",
            containerWidth: "normal",
            bgColor: "bg-transparent",
            scrolledBgColor: "bg-[#0F0F0F]",
            isFixed: true,
            shadow: false
        },
        logo: {
            logoSlug: "/pataki_white.png",
            logoWidth: 90,
            logoHeight: 90
        },
        navbar: {
            navItems: [
                { text: "HOME", href: "#inicio" },
                { text: "SERVICES", href: "#servicios" },
                { text: "PROJECTS", href: "#sobre-nosotros" },
                { text: "BLOG", href: "#contacto" },
                { text: "ABOUT", href: "#blog" },
                { text: "CONTACT", href: "#blog" }
            ],
            navItemsColor: "text-white",
            hoverColor: "hover:text-[#E54B4B]",
            hoverUnderline: false,
            hoverTransform: null,
            itemsWeight: "normal",
            fontSize: "normal",
            fontFamily: "poppinsRegular",
            transition: true,
            spaceBetweenItems: "big"
        },
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
            color: "#fff",
            menuBgColor: "bg-[#0F0F0F]",
            navHeight: "big",
            itemsColor: "text-white",
        }
    },
    mainBanner: {
        type: 1,
        global: {
            bgImage: "/banner5.webp",
            bgColor: "bg-[#0C1633]",
            marginTop: "none",
            height: "high",
            containerWidth: "small",
            y_orientation: "bottom",
            x_orientation: "center"
        },
        textBlock: {
            global: {
                orientation: "center",
                width: "big",
            },
            title: {
                text: "Freelance Brand Designer",
                color: "text-white",
                fontSize: "big",
                fontFamily: "poppinsBold"
            },
            // subtitle: {
            //     text: "PATAKI LANDING PAGE",
            //     color: "white",
            //     fontSize: "small",
            //     fontFamily: "barlow"
            // },
            textContent: {
                text: "Web & Mobile App Developer",
                color: "text-[#ddd]",
                fontSize: "normal",
                fontFamily: "poppinsRegular"
            },
            callAction: {
                text: "Get in touch",
                href: "#iniciar-sesion",
                borderWidth: "small",
                borderRadius: "none",
                borderColor: "border-[#ee4818]",
                hoverBorderColor: "border-gray-800",
                backgroundColor: "bg-[#ee4818]",
                hoverBackgroundColor: "hover:bg-[#0F0F0F]",
                showInMobile: true,
                width: "small",
                paddingY: "high",
                textColor: "text-[#d5d5d5]",
                hoverTextColor: null,
                transition: true,
                fontFamily: "poppinsRegular",
                icon: null,
                iconPosition: null,
            },
        },
    }
};