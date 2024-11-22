import Footer from "../../container/Footer";
import DescriptionTitle from "./DescriptionTitle";
import H1Title from "./H1Title";
import VideoContainer from "./VideoContainer";

export default function Order() {
  return (
    <VideoContainer>
      <video
        className="absolute w-full h-screen pt-[10vh] shadow-xl object-cover inset-0 z-[2]"
        width={1000}
        height={1000}
        src="/videos/sequence 4.mp4"
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
      <div className="relative pt-[10vh] bg-[#222831]/10 text-[#ffffff] gap-5 z-[20] w-full h-full flex flex-col justify-center items-center text-center">
        <H1Title>Order Now</H1Title>
        <DescriptionTitle>Kunjungi Marketplace online kami</DescriptionTitle>
        <div className="flex justify-center items-center text-center gap-5">
          <div className="w-[15%]">
            <img
              className="relative w-full h-full"
              src="/svg/shopee-seeklogo.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </VideoContainer>
  );
}
