import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Buttontitle({ children }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => {
          navigate("/Product");
        }}
      >
        <p className="flex items-center justify-center gap-2 p-2 bg-white text-black font-RobotoFont text-xs rounded-sm tabletMinWidth:text-sm">
          <IoIosArrowDropright size={20} /> {children}
        </p>
      </button>
    </div>
  );
}
