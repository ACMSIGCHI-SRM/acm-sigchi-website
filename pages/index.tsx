import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-screen h-screen ${inter.className}`}
    >
      <Navbar />
      <h1 className="text-4xl font-bold">ACM Sigchi</h1>
    </main>
  );
}
