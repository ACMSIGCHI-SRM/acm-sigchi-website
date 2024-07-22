import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../public/logo.svg";
import phoneLogo from "@/public/phone.svg";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  PhoneCall,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#59595B] flex items-center justify-between p-11">
      <div className="flex flex-col md:flex-col items-center space-x-4 text-white">
        <div className="flex items-center space-x-2 space-y-2">
          <PhoneCall size={30} />
          <p className="py-3">123-456-7890</p>
        </div>
        <div className="flex items-center space-x-2">
          <Mail size={30} />
          <p className="py-3">email@email.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <Globe size={30} />
          <p className="py-3">www.acm.com</p>
        </div>
      </div>
      <Image src={FooterLogo} alt="Footer Logo" width={150} height={150} />
      <div className="flex items-center space-x-5">
        <Link href="https://www.facebook.com/">
          <Facebook size={30} color="white" />
        </Link>
        <Link href="https://www.instagram.com/">
          <Instagram size={30} color="white" />
        </Link>
        <Link href="https://www.x.com/">
          <Twitter size={30} color="white" />
        </Link>
      </div>
    </footer>
  );
}
