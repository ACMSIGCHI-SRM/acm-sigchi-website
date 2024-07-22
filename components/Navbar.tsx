import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { Menu } from "lucide-react";

interface DropdownMenuProps {
  links: { id: number; path: string; name: string }[];
  toggleDrawer: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ links, toggleDrawer }) => {
  return (
    <div className="absolute right-5 mt-5 py-2 w-48 bg-black bg-opacity-90 rounded-md shadow-xl z-20">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.id}
          className="block px-4 py-2 text-sm"
          onClick={toggleDrawer}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const links = [
    { id: 1, path: "#about", name: "About Us" },
    { id: 2, path: "#domains", name: "Domains" },
    { id: 3, path: "#events", name: "Events" },
    { id: 4, path: "#team", name: "Team" },
    { id: 5, path: "#memberships", name: "Membership" },
    { id: 6, path: "#contact", name: "Contact Us" },
  ];

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div className="w-full h-20 flex bg-inherit items-center relative">
      <Image
        src={logo}
        alt="Logo"
        className="lg:ml-10 ml-5"
        width={80}
        height={80}
      />
      <button className="lg:hidden md:hidden block ml-auto pr-5" onClick={toggleDrawer}>
        <Menu />
      </button>
      <div className="w-full lg:flex md:flex hidden flex-row items-center justify-center p-5 gap-5">
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.id}
            className="font-semibold text-lg"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="lg:hidden md:hidden flex">
        {isDrawerOpen && (
          <DropdownMenu links={links} toggleDrawer={toggleDrawer} />
        )}
      </div>
    </div>
  );
}
