import Header from "./components/Header";
import Logo from "./components/global/Logo";
import Navbar from "./components/global/Navbar";

export default function Home() {
  return (
    <>
      <Header
        paddingY="normal"
        paddingX="normal"
        bgColor="bg-white/5"
        isFixed={true}
      > 
        <Logo logoSlug="/pataki.png" logoWidth = {120} logoHeight = {120} />
        <Navbar />
      </Header>
      <main>
        {/* Contenido de prueba para scroll */}
        <section className="h-screen bg-gray-100 bg-gradient-to-r from-blue-500 to-purple-500">Sección 1</section>
        <section className="h-screen bg-gray-200 bg-gradient-to-r from-purple-500 to-blue-500">Sección 2</section>
      </main>
    </>
  );
}
