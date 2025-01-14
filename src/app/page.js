import Header from "./components/header/Header";
import MainBanner from "./components/mainBanner/MainBanner";
import { defaultData, demo_first, demo_second, demo_third, demo_fourth, demo_fifth } from "./mockups";

export default function Home() {
  const mainPadding = demo_fifth?.header?.global?.paddingY;
  console.log("mainPadding", mainPadding)

  return (
    <> 
      <Header data={demo_fifth?.header} />
      <main>
        {/* Contenido de prueba para scroll */}
        <MainBanner data={demo_fifth?.mainBanner} marginTop={mainPadding} />
        <section className="h-screen bg-gray-200 bg-gradient-to-r from-purple-500 to-blue-500">Sección 2</section>
      </main>
    </>
  );
}
