import { FaCopyright } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-auto font-RobotoFont flex justify-between items-center h-[7vh]">
      <div className="flex gap-1">
        <FaCopyright />
        <small className="font-bold text-xs">Khaira Skincare 2024</small>
      </div>
      <ul className="flex gap-3 text-xs">
        <li>About Us</li>
        <li>Instagram</li>
        <li>Kontak</li>
      </ul>
    </footer>
  );
}
