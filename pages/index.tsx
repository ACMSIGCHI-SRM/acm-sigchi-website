import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-screen h-screen flex justify-center items-center ${inter.className}`}
    >
      <h1 className="text-4xl font-bold">ACM Sigchi</h1>
    </main>
  );
}
