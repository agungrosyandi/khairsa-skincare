import { useEffect } from "react";
import BestSeller from "../components/home-components/BestSeller";
import CardPage2, {
  productsListPage2,
} from "../components/home-components/CardPage2";
import Order from "../components/home-components/Order";
import Promo from "../components/home-components/Promo";
import SectionParent from "../components/home-components/SectionParent";
import VideoHomeBackground from "../components/home-components/VideoHomeBackground";
import VideoSlogan from "../components/home-components/VideoSlogan";

export default function MainHome() {
  const smoothScroolSnap = () => {
    const container = document.querySelector("main");
    const items = document.querySelectorAll("section");

    container.addEventListener("wheel", (event) => {
      event.preventDefault();
      const delta = event.deltaY;

      container.scrollBy({
        top: delta,
        behavior: "smooth",
      });
    });
  };

  useEffect(() => {
    console.log("smooth scrool is working");
    smoothScroolSnap();
  }, []);

  return (
    <main className="relative flex flex-col gap-0">
      <SectionParent>
        <VideoHomeBackground />
      </SectionParent>
      <SectionParent>
        <div className="relative w-full h-screen pt-[10vh] grid grid-cols-6 grid-flow-row gap-1 desktopMinWidth:grid-cols-8">
          {productsListPage2.map((product) => (
            <CardPage2
              key={product.id}
              image={product.image}
              title={product.title}
              titleButton={product.titleButton}
              link={product.link}
            />
          ))}
        </div>
      </SectionParent>
      <SectionParent>
        <VideoSlogan />
      </SectionParent>
      <SectionParent>
        <BestSeller />
      </SectionParent>
      <SectionParent>
        <Promo />
      </SectionParent>
      <SectionParent>
        <Order />
      </SectionParent>
    </main>
  );
}
