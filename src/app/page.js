import Header from "./components/header/Header";
import MainBanner from "./components/mainBanner/MainBanner";
import ImageBox from "./components/imageBox/ImageBox";
import { defaultData, demo_first, demo_second, demo_third, demo_fourth, demo_fifth, demo_six, demo_seven } from "./mockups";

export default function Home() {
  const data = demo_seven;

  return (
    <> 
      <Header data={data?.header} />
      <main>
        <MainBanner data={data?.mainBanner} />
        <ImageBox data={data?.imageBox} />
        <section className="
          bg-[#000] h-screen
        ">Sección 2</section>
        {/* h-screen bg-gray-200 bg-gradient-to-r from-purple-500 to-blue-500 */}
      </main>
    </>
  );
}
