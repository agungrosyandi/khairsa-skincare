import { IoIosArrowDropright } from 'react-icons/io';

export default function Promo() {
  return (
    <div className="relative w-full h-full flex flex-col tabletMinWidth:flex-row">
      <div className="">
        <img src="/img/image-6.jpg" alt="" />
      </div>

      <div className="relative bg-[#ffffff] shadow-xl inset-0 text-[#000000] gap-3 py-5 pl-5 z-[20] flex flex-col justify-center desktopMinWidth:px-14">
        <h5 className="font-RobotoFont text-base font-bold desktopMinWidth:text-2xl fullHdMinWidth:text-4xl">
          Dapatkan Promo terbaik
        </h5>
        <p className="font-RobotoFont text-xs pr-5 fullHdMinWidth:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          euismod augue a nunc rhoncus, non commodo turpis fermentum. Donec sed
          placerat nisl.
        </p>
        <div className="flex gap-2 items-center">
          <IoIosArrowDropright />
          <p className="text-xs font-bold">Selengkapnya</p>
        </div>
      </div>
    </div>
  );
}
