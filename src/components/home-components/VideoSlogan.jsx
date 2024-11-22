import DescriptionTitle from "./DescriptionTitle";
import H1Title from "./H1Title";
import VideoContainer from "./VideoContainer";

export default function VideoSlogan() {
  return (
    <VideoContainer>
      <video
        className="absolute w-full h-screen pt-[10vh] shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] hidden desktopMinWidth:block "
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
          className="absolute w-full h-[90vh] top-[10vh] shadow-xl object-cover inset-0 z-[2] desktopMinWidth:hidden "
          src="/img/pic-1-slogan.jpg"
          alt="mobile bakground"
        />
        <div className="absolute z-10 inset-0 backdrop-opacity-10 backdrop-invert bg-black/20 w-full h-[90vh] top-[10vh] desktopMinWidth:hidden"></div>
      </>

      <div className="relative pt-[10vh] bg-[#222831]/10 text-[#ffffff] px-[5%] gap-5 z-[20] w-full h-[90vh] top-[10vh] flex flex-col justify-center items-center text-center desktopMinWidth:px-[25%] fullHdMinWidth:px-[30%]">
        <H1Title>Confident</H1Title>
        <DescriptionTitle>
          Memiliki wajah yang bersih dan cerah membuat kepercayaan diri semakin
          pede. Terutama dalam menjalani aktivitas mu sehari-hari
        </DescriptionTitle>
      </div>
    </VideoContainer>
  );
}
