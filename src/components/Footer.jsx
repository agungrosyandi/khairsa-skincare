import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="absolute px-[5%] inset-0 z-30 mt-auto w-full h-[10vh] text-[#ffffff] font-RobotoFont flex justify-between items-center">
      <div className="flex gap-2 items-center ">
        <FaCopyright size={20} />
        <small className="text-xs font-bold uppercase tabletMinWidth:text-sm">
          Khaira Skincare
        </small>
      </div>
      <ul className="flex gap-3 text-xs font-bold font-RobotoFont tabletMinWidth:text-sm">
        <li>About Us</li>
        <li>Instagram</li>
      </ul>
    </footer>
  );
}
