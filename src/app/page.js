import Header from "./components/header/Header";
import { defaultData, demo_first, demo_second, demo_third, demo_fourth, demo_fifth } from "./mockups";

export default function Home() {
  return (
    <> 
      <Header data={demo_fifth?.header} />
      <main>
        {/* Contenido de prueba para scroll */}
        <section className="h-screen bg-gray-100 bg-gradient-to-r from-blue-500 to-purple-500"></section>
        <section className="h-screen bg-gray-200 bg-gradient-to-r from-purple-500 to-blue-500">Sección 2</section>
      </main>
    </>
  );
}
