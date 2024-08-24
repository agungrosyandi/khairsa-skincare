import DescriptionTitle from './DescriptionTitle';
import VideoContainer from './VideoContainer';

export default function Order() {
  return (
    <VideoContainer>
      <video
        className="absolute w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src="/videos/sequence 4.mp4"
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
      <div className="relative bg-[#222831]/10 text-[#ffffff] z-[20] w-full h-full flex flex-col justify-center items-center text-center">
        <h1 className=" font-RobotoFont text-3xl font-bold px-10 desktopMinWidth:3xl fullHdMinWidth:text-5xl">
          Yuk Order Sekarang Juga
        </h1>
        <DescriptionTitle>Kunjungi Marketplace online kami</DescriptionTitle>
        <div className="flex items-center gap-5 mt-3">
          <div className="w-[1.5rem] tabletMinWidth:w-[2rem]">
            <img src="/svg/shopee-seeklogo.svg" alt="" />
          </div>
          <div className="w-[1.5rem] tabletMinWidth:w-[2rem]">
            <img src="/svg/tiktok-color-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </VideoContainer>
  );
}
