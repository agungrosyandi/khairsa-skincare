import DescriptionTitle from './DescriptionTitle';
import H1Title from './H1Title';
import VideoContainer from './VideoContainer';

export default function VideoHomeBackground() {
  return (
    <VideoContainer>
      <video
        className="absolute w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2]"
        width={1000}
        height={1000}
        src="/videos/squence 1.mp4"
        autoPlay
        loop
        muted
        type="video/mp4"
        loading="lazy"
      />

      <div className="relative bg-[#222831]/10 text-[#ffffff] z-[20] w-full h-full flex flex-col justify-center items-center text-center">
        <H1Title>Reliable Solution for Beauty of Skins</H1Title>
        <DescriptionTitle>
          High Quality, and Affordable Skincare Product
        </DescriptionTitle>
        <p className="bg-[#222831]/40 px-3 py-2 mt-3 rounded-2xl text-xs font-RobotoFont">
          Selengkapnya
        </p>
      </div>
    </VideoContainer>
  );
}
