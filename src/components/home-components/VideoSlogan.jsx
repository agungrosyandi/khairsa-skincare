import DescriptionTitle from './DescriptionTitle';
import VideoContainer from './VideoContainer';

export default function VideoSlogan() {
  return (
    <VideoContainer>
      <video
        className="absolute w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] hidden desktopMinWidth:block "
        width={1000}
        height={1000}
        src="/videos/sequence 3.mp4"
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />
      <>
        <img
          className="absolute w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] desktopMinWidth:hidden "
          src="/img/bg-mobile promo khairaskincare.jpg"
          alt="mobile bakground"
        />
        <div className="absolute z-10 inset-0 backdrop-opacity-10 backdrop-invert bg-black/5 w-full h-full desktopMinWidth:hidden"></div>
      </>

      <div className="relative bg-[#222831]/10 text-[#ffffff] z-[20] w-full h-full flex flex-col justify-center items-center text-center">
        <h1 className=" font-RobotoFont text-lg font-bold px-10 tabletMinWidth:text-2xl desktopMinWidth:text-3xl fullHdMinWidth:text-4xl">
          Tampil Percaya diri dengan Perawatan yang Maksimum
        </h1>
        <DescriptionTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          euismod augue a nunc rhoncus, non commodo turpis fermentum.
        </DescriptionTitle>
        <p className=" font-RobotoFont text-[#d2d2d2] text-xs px-14 mt-2 tabletMinWidth:px-20 desktopMinWidth:px-64 fullHdMinWidth:text-base fullHdMinWidth:px-96"></p>
      </div>
    </VideoContainer>
  );
}
