import { IoIosArrowDropright } from 'react-icons/io';
import { ContainerCard, H5Title, ContainerSub, H5Sub } from './DescriptionCard';

export default function Card2() {
  return (
    <div className="relative w-full h-full col-span-3 tabletMinWidth:col-span-2">
      <img src="/img/Artboard-2.jpg" alt="" />
      <ContainerCard>
        <H5Title>#Wash Moizturizer</H5Title>
        <ContainerSub>
          <IoIosArrowDropright />
          <H5Sub>Explore</H5Sub>
        </ContainerSub>
      </ContainerCard>
    </div>
  );
}
