import Header from "./components/Header";
import Logo from "./components/global/Logo";
import Navbar from "./components/global/Navbar";

const data = {
  header: {
    paddingY: "normal",
    paddingX: "normal",
    bgColor: "bg-[#DFFFDE]",
    scrolledBgColor: null,
    isFixed: true
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
    itemsWeight: "big",
    fontFamily: "robotoMedium",
    callAction: [
      { text: "Iniciar sesión", href: "#iniciar-sesion" }
    ]
  },
};

export default function Home({ headerType = "type1" }) {
  let showLogo = null;
  let showNavbar = null;
  let showHeader = null;

  if (data && Object.keys(data) && Object.keys(data).length > 0) {
    const {header, logo, navbar} = data;
    // const { logoSlug, logoWidth, logoHeight, navItems, hoverColor, hoverUnderline, hoverTransform, fontFamily, itemsWeight, bgColor, navItemsColor } = data
    if (logo && Object.keys(logo) && Object.keys(logo).length > 0) {
      const { logoSlug, logoWidth, logoHeight } = logo;
      showLogo = (
        <Logo logoSlug={logoSlug} logoWidth={logoWidth} logoHeight={logoHeight} />
      );
    }
    if (navbar && Object.keys(navbar) && Object.keys(navbar).length > 0) {
      const { navItems, navItemsColor, hoverColor, hoverUnderline, hoverTransform, fontFamily, itemsWeight } = navbar;
      showNavbar = (
        <Navbar 
          navItems={navItems}
          color={navItemsColor}
          hoverColor={hoverColor} 
          hoverUnderline={hoverUnderline} 
          hoverTransform={hoverTransform}
          fontFamily={fontFamily} 
          itemsWeight={itemsWeight} 
        />
      );
    }
    if (header && Object.keys(header) && Object.keys(header).length > 0) {
      const { paddingY, paddingX, bgColor, scrolledBgColor, isFixed } = header;
      if (headerType === "type1") {
        showHeader = (
          <Header paddingY={paddingY} paddingX={paddingX} bgColor={bgColor} isFixed={isFixed} scrolledBgColor={scrolledBgColor}> 
            {showLogo}
            {showNavbar}
          </Header>
        );
      } else if (headerType === "type2") {
        showHeader = (
          <Header paddingY={paddingY} paddingX={paddingX} bgColor={bgColor} isFixed={isFixed}> 
            {showLogo}
            <div
              className="flex gap-10 items-center"
            >
              {showNavbar}
              {showLogo}
            </div>
            {showLogo}
          </Header>
        );
      }
    }
  }

  return (
    <> 
      {showHeader}
      <main>
        {/* Contenido de prueba para scroll */}
        <section className="h-screen bg-gray-100 bg-gradient-to-r from-blue-500 to-purple-500">Sección 1</section>
        <section className="h-screen bg-gray-200 bg-gradient-to-r from-purple-500 to-blue-500">Sección 2</section>
      </main>
    </>
  );
}
