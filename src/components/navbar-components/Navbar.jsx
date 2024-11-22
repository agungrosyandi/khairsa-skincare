import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed px-[5%] inset-0 z-30 w-full h-[10vh] bg-white text-[#000000] font-RobotoFont flex justify-between items-center">
      <Link to={"/"}>
        <div className="w-[7rem] h-full relative">
          <img
            className="w-full h-full relative object-cover"
            src="/img/logo keyskincare-01.png"
            alt=""
          />
        </div>
      </Link>

      <ul className="flex gap-3 text-xs font-RobotoFont tabletMinWidth:text-sm">
        {menuNavbar.map((menu) => (
          <Link key={menu.id} to={menu.link}>
            <li>{menu.menuName}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

const menuNavbar = [
  { id: 1, menuName: "Product", link: "/Product" },
  { id: 2, menuName: "Trend", link: "/Artikel" },
];
