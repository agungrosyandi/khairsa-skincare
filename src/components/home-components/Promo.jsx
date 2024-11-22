import H1Title from "./H1Title";
import Buttontitle from "./Buttontitle";
import DescriptionTitle from "./DescriptionTitle";

export default function Promo() {
  return (
    <div className="relative flex w-full h-screen pt-[10vh] desktopMinWidth:flex-row">
      <div className="absolute z-[-1] inset-0 w-full h-screen pt-[10vh] desktopMinWidth:pt-[0vh] desktopMinWidth:relative desktopMinWidth:h-[90vh]">
        <img
          className="w-full h-full object-cover"
          src="/img/best-seller-product-pic-1.jpg"
          alt=""
        />
      </div>

      <div className="relative flex justify-between items-center text-center w-full h-full bg-[#222831]/10 px-[5%] desktopMinWidth:bg-[#222831]/0 desktopMinWidth:px-[10%] decoration-slicepx-[15%] ">
        <div className="flex gap-5 flex-col w-full text-white desktopMinWidth:text-black">
          <H1Title>Get Promo</H1Title>

          <DescriptionTitle>
            Untuk perawatan maksimal rekomendasi kami mendapatkan 1 set produk
            skincare kami. Dapatkan diskon setiap minggunya
          </DescriptionTitle>

          <Buttontitle>Selengkapnya</Buttontitle>
        </div>
      </div>
    </div>
  );
}
