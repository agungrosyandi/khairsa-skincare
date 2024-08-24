import { IoIosArrowDropright } from 'react-icons/io';

import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import VideoHomeBackground from './VideoHomeBackground';
import VideoSlogan from './VideoSlogan';

import { productsList } from '../home-components/Product';
import Product from '../home-components/Product';
import Promo from './Promo';
import Order from './Order';

export default function Home() {
  return (
    <section className="relative flex flex-col gap-3">
      <VideoHomeBackground />
      <div className="grid grid-cols-6 grid-flow-row gap-3">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      <VideoSlogan />
      <div className="flex justify-between items-center">
        <h1 className="font-RobotoFont font-bold text-base tabletMinWidth:text-xl fullHdMinWidth:text-3xl">
          Our Best Seller
        </h1>
        <div className="flex gap-2 items-center">
          <IoIosArrowDropright />
          <p className="font-RobotoFont text-xs fullHdMinWidth:text-base">
            Liat Semua Produk
          </p>
        </div>
      </div>
      <div className="grid grid-cols-8 grid-flow-row gap-3">
        {productsList.map((produk) => (
          <Product
            key={produk.id}
            image={produk.image}
            title={produk.title}
            button={produk.button}
          />
        ))}
      </div>
      <Promo />
      <Order />
    </section>
  );
}
