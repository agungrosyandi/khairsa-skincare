import { IoIosArrowDropright } from "react-icons/io";
import { ContainerCard, H5Title, ContainerSub, H5Sub } from "./DescriptionCard";

export default function CardPage2({ image, title, titleButton }) {
  return (
    <div className="relative w-full h-full col-span-3 desktopMinWidth:col-span-2">
      <div className="relative w-full h-full">{image}</div>
      <ContainerCard>
        <H5Title>{title}</H5Title>
        <ContainerSub>
          <IoIosArrowDropright />
          <H5Sub>{titleButton}</H5Sub>
        </ContainerSub>
      </ContainerCard>
    </div>
  );
}

const Image1Page2 = () => {
  return (
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src="/img/pic-1-page-2.jpg"
      alt=""
    />
  );
};

const Image2Page2 = () => {
  return (
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src="/img/pic-2-page-2.jpg"
      alt=""
    />
  );
};

const Image3Page2 = () => {
  return (
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src="/img/pci-3-page-2.jpg"
      alt=""
    />
  );
};

const Image4Page2 = () => {
  return (
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src="/img/pic-4-page-2.jpg"
      alt=""
    />
  );
};

const productsListPage2 = [
  {
    id: 1,
    image: <Image1Page2 />,
    title: "#Days Activity",
    titleButton: "Explore",
  },
  {
    id: 2,
    image: <Image2Page2 />,
    title: "#Wash Moisturizer",
    titleButton: "Explore",
  },
  {
    id: 3,
    image: <Image3Page2 />,
    title: "#Woman Style",
    titleButton: "Explore",
  },
  {
    id: 4,
    image: <Image4Page2 />,
    title: "#Become Trendsetter",
    titleButton: "Explore",
  },
];

export { productsListPage2 };
