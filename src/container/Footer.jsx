import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="absolute px-[5%] inset-0 z-30 mt-auto w-full h-[10vh] text-[#ffffff] font-RobotoFont flex justify-between items-center">
      <div className="flex gap-2 items-center ">
        <FaCopyright size={20} />
        <small className="text-xs tabletMinWidth:text-sm">
          Keyskincare
        </small>
      </div>
      <ul className="flex gap-3 text-xs font-RobotoFont tabletMinWidth:text-sm">
        <Link to={"/About"}>
          <li>Owner</li>
        </Link>
        <Link>
          <li>Instagram</li>
        </Link>
      </ul>
    </footer>
  );
}
