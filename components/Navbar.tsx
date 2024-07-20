import Image from "next/image"
import logo from "@/public/logo.svg"
import Link from "next/link"

export default function Navbar() {
    const links = [
        {id: 1, path: "#about", name: "About Us"},
        {id: 2, path: "#domains", name: "Events"},
        {id: 3, path: "#events", name: "Events"},
        {id: 4, path: "#team", name: "Team"},
        {id: 5, path: "#memberships", name: "Memberships"},
        {id: 6, path: "#contact", name: "Contact Us"}
    ]

    return (
        <div className="w-full h-14 flex bg-inherit items-center">
            <Image src={logo} alt="Logo" className="ml-5" width={60} height={60} />
            <div className="lg:w-[60%] gap-3 md:w-[80%] sm:w-full ml-auto mr-auto flex flex-row justify-evenly">
                {links.map(link => (
                    <Link href={link.path} key={link.id} className="font-semibold lg:text-xl md:text-lg text-xs">
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}