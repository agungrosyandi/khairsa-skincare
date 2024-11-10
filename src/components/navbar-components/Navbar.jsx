export default function Navbar() {
  return (
    <div className="fixed px-[5%] inset-0 z-30 w-full h-[10vh] bg-white text-[#000000] font-RobotoFont flex justify-between items-center">
      <h1 className="text-xs font-bold uppercase tabletMinWidth:text-sm">Khaira Skincare </h1>
      <ul className="flex gap-3 text-xs font-bold font-RobotoFont tabletMinWidth:text-sm">
        <li>Product</li>
        <li>Store</li>
        <li>Artikel</li>
      </ul>
    </div>
  );
}
