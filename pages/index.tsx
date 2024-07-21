import MembershipCard from "@/components/MembershipCard";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-screen h-screen ${inter.className}`}
    >
      <Navbar />
      <h1 className="text-4xl font-bold">ACM Sigchi</h1>
      <div className="w-full h-fit flex justify-center gap-6">
        <TeamSection />
      </div>
      <MembershipCard />
    </main>
  );
}
