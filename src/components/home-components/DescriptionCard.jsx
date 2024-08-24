export function ContainerCard({ children }) {
  return (
    <div className="absolute bg-[#222831]/10 inset-0 text-[#ffffff] py-5 pl-5 z-[20] w-full h-full flex flex-col justify-between ">
      {children}
    </div>
  );
}

export function H5Title({ children }) {
  return <h5 className="font-RobotoFont text-sm">{children}</h5>;
}

export function ContainerSub({ children }) {
  return <div className="flex gap-1 items-center">{children}</div>;
}

export function H5Sub({ children }) {
  return <h5 className="font-RobotoFont text-xs">{children}</h5>;
}
