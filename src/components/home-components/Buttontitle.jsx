import { IoIosArrowDropright } from "react-icons/io";

export default function Buttontitle({ children }) {
  return (
    <div className="flex items-center justify-center">
      <p className=" flex items-center justify-center gap-2 p-2 bg-white text-black font-RobotoFont text-xs rounded-sm tabletMinWidth:text-sm">
        <IoIosArrowDropright size={20} /> {children}
      </p>
    </div>
  );
}
