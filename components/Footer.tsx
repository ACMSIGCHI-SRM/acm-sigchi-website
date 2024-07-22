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
    <footer className="w-full bg-[#59595B] flex items-center p-1 lg:p-5 md:p-5 sm:p-5 justify-evenly gap-5">
      <div className="w-fit flex flex-col items-center space-x-2 text-white lg:text-base md:text-sm text-[10px]">
        <div className="w-4/5 flex items-center justify-between">
          <PhoneCall size={30} />
          <p className="py-3">123-456-7890</p>
        </div>
        <div className="w-4/5 flex items-center justify-between">
          <Mail size={40} />
          <p className="py-3">email@email.com</p>
        </div>
        <div className="w-4/5 flex items-center justify-between">
          <Globe size={30} />
          <p className="py-3">www.acm.com</p>
        </div>
      </div>
      <Image src={FooterLogo} alt="Footer Logo" width={150} height={150} />
      <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col items-center gap-3">
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
