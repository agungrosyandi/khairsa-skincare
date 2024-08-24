export default function VideoContainer({ children }) {
  return (
    <div className="relative w-full h-[25rem] fullHdMinWidth:h-[40rem]">
      {children}
    </div>
  );
}
