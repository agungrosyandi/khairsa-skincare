import { IoStarSharp } from 'react-icons/io5';

const ProducPic1 = () => {
  return <img src="../../../public/img/product-1.jpg" alt="" />;
};

const ProducPic2 = () => {
  return <img src="../../../public/img/product-2.jpg" alt="" />;
};

const productsList = [
  {
    id: 1,
    image: <ProducPic1 />,
    title: 'The Elf',
    button: 'More Detail',
  },
  {
    id: 2,
    image: <ProducPic2 />,
    title: 'Wardah',
    button: 'More Detail',
  },
  {
    id: 3,
    image: <ProducPic1 />,
    title: 'Nivea',
    button: 'More Detail',
  },
  {
    id: 4,
    image: <ProducPic2 />,
    title: 'Gatsby',
    button: 'More Detail',
  },
];

export default function Product({ image, title, button }) {
  return (
    <div className="relative w-full h-full col-span-4 tabletMinWidth:col-span-2 desktopMinWidth:col-span-2">
      <div>{image}</div>
      <div className="relative bg-[#ffffff] gap-2 shadow-xl inset-0 text-[#000000] p-5 z-[20] flex flex-col justify-center items-center ">
        <h5 className="font-RobotoFont text-base font-bold">{title}</h5>
        <p className="font-RobotoFont bg-[#2f2e2e] text-[#ffffff] text-xs border-2 p-2 rounded-lg">
          {button}
        </p>
        <div className="flex gap-1">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </div>
      </div>
    </div>
  );
}

export { productsList };
