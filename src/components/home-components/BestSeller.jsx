import { IoStarSharp } from "react-icons/io5";
import H1Title from "./H1Title";
import Buttontitle from "./Buttontitle";

export default function BestSeller() {
  return (
    <div className="relative flex w-full h-screen pt-[10vh] desktopMinWidth:flex-row-reverse">
      <div className="absolute z-[-1] inset-0 w-full h-screen pt-[10vh] desktopMinWidth:pt-[0vh] desktopMinWidth:relative desktopMinWidth:h-[90vh]">
        <img
          className="w-full h-full object-cover"
          src="/img/best-seller-product-pic-2.jpg"
          alt=""
        />
      </div>

      <div className="relative flex justify-between items-center text-center w-full h-full bg-[#222831]/10 desktopMinWidth:bg-[#222831]/0 ">
        <div className="flex gap-5 flex-col w-full text-white desktopMinWidth:text-black">
          <H1Title>Our Product</H1Title>
          <div className="flex gap-2 justify-center">
            <IoStarSharp size={20} />
            <IoStarSharp size={20} />
            <IoStarSharp size={20} />
            <IoStarSharp size={20} />
            <IoStarSharp size={20} />
          </div>
          <Buttontitle>Liat Semua Produk</Buttontitle>
        </div>
      </div>
    </div>
  );
}
