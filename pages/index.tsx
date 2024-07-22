import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import DomainsSection from "@/components/DomainsSection";
import IntroSection from "@/components/IntroSection";
import MembershipCard from "@/components/MembershipCard";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ACM SIGCHI</title>
        <meta
          name="description"
          content="A community of developers, designers, and creators."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main
        className={`w-screen h-screen overflow-x-hidden ${inter.className}`}
      >
        <Navbar />
        <div className="mt-10 p-5 w-full h-fit flex justify-center">
          <IntroSection />
        </div>
        <div id="about" className="mt-28 p-5 w-full h-fit flex justify-center">
          <AboutSection />
        </div>
        <div id="domain" className="mt-28 p-5 w-full h-fit flex justify-center">
          <DomainsSection />
        </div>
        <div
          id="team"
          className="mt-28 p-5 w-full h-fit flex justify-center gap-6"
        >
          <TeamSection />
        </div>
        <div
          id="memberships"
          className="mt-28 p-5 w-full h-fit flex justify-center"
        >
          <MembershipCard />
        </div>
        <div id="contact" className="mt-28 h-fit flex justify-center">
        <Footer />
      </div>
      </main>
    </>
  );
}
