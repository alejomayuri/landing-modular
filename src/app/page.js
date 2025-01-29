import Header from "./components/header/Header";
import MainBanner from "./components/mainBanner/MainBanner";
import { defaultData, demo_first, demo_second, demo_third, demo_fourth, demo_fifth } from "./mockups";

export default function Home() {
  const data = demo_third;

  return (
    <> 
      <Header data={data?.header} />
      <main>
        <MainBanner data={data?.mainBanner} />
        <section className="h-screen bg-gray-200 bg-gradient-to-r from-purple-500 to-blue-500">Sección 2</section>
      </main>
    </>
  );
}
