import Header from "./components/header/Header";

const data = {
  header: {
    type: 1,
    global: {
      paddingY: "normal",
      paddingX: "normal",
      bgColor: "bg-[#DFFFDE]",
      scrolledBgColor: "bg-[#007978]",
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
      itemsWeight: "normal",
      fontFamily: "robotoMedium",
      transition: true
    },
    callAction: {
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
  }
};

export default function Home() {
  return (
    <> 
      <Header data={data?.header} />
      <main>
        {/* Contenido de prueba para scroll */}
        <section className="h-screen bg-gray-100 bg-gradient-to-r from-blue-500 to-purple-500">Sección 1</section>
        <section className="h-screen bg-gray-200 bg-gradient-to-r from-purple-500 to-blue-500">Sección 2</section>
      </main>
    </>
  );
}
