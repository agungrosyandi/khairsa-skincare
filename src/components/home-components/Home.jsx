import VideoHomeBackground from "./VideoHomeBackground";
import VideoSlogan from "./VideoSlogan";
import { productsListPage2 } from "../home-components/CardPage2";
import Promo from "./Promo";
import Order from "./Order";
import CardPage2 from "./CardPage2";
import SectionParent from "./SectionParent";
import BestSeller from "./BestSeller";

export default function Home() {
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
