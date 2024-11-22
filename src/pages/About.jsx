import { Link } from "react-router-dom";
import DescriptionTitle from "../components/home-components/DescriptionTitle";
import SectionParent from "../components/home-components/SectionParent";
import { FaInstagram } from "react-icons/fa6";

export default function About() {
  return (
    <SectionParent>
      <div className="w-full min-h-screen px-[5%] gap-10 flex flex-col justify-center items-center desktopMinWidth:flex-row">
        <div className="relative w-full desktopMinWidth:flex-1">
          <img
            className="relative w-full h-full object-cover"
            src="/img/testing 1.jpg"
            alt="mobile bakground"
          />
        </div>

        <div className="relative text-[#000000] pb-20 gap-5 flex flex-col justify-center items-center text-center desktopMinWidth:pb-0 desktopMinWidth:flex-1">
          <h1 className="font-DrukMediumTrial text-5xl px-10 tabletMinWidth:text-6xl desktopMinWidth:text-7xl">
            Khaira Muflihah
          </h1>
          <DescriptionTitle>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            sint necessitatibus ratione aut aliquam ab harum incidunt vero. Non
            inventore dolor quod omnis rem consequuntur! Sunt cupiditate earum
            deserunt corrupti. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Consequuntur quibusdam deserunt, voluptatum rem
            quam asperiores maiores laudantium. Ducimus similique fugit
            laboriosam iure sunt alias ipsum! Sint, explicabo? Minus,
            repudiandae facere!
          </DescriptionTitle>

          <Link to={"https://www.instagram.com/kyramflhs/"} target="blank">
            <div className="flex gap-5 justify-center items-center border-2 border-black p-5 rounded-2xl">
              <FaInstagram size={30} />
              <p className="text-xs font-bold tabletMinWidth:text-sm">
                Visit my social media
              </p>
            </div>
          </Link>
        </div>
      </div>
    </SectionParent>
  );
}
