import Buttontitle from "./Buttontitle";
import DescriptionTitle from "./DescriptionTitle";
import H1Title from "./H1Title";
import VideoContainer from "./VideoContainer";

export default function VideoHomeBackground() {
  return (
    <VideoContainer>
      <video
        className="absolute w-full h-screen pt-[10vh] shadow-xl object-cover inset-0 z-[2]"
        width={1000}
        height={1000}
        src="/videos/squence 1.mp4"
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />

      <div className="relative bg-[#222831]/20 text-[#ffffff] pt-[10vh] z-[20] gap-4 w-full h-screen flex flex-col justify-center items-center text-center">
        <H1Title>Reliable Solution for Beauty of Skin</H1Title>
        <DescriptionTitle>
          High Quality, and Affordable Skincare
        </DescriptionTitle>
        <Buttontitle>Selengkapnya</Buttontitle>
      </div>
    </VideoContainer>
  );
}
