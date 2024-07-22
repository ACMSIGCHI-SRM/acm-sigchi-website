import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="w-full h-fit flex flex-col items-center">
      <h1 className="font-bold text-4xl text-[#EAA137]">About Us</h1>
      <div className="mt-10 w-[80%] flex flex-row justify-between items-center">
        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex flex-col gap-4">
          <p className="w-[85%] font-semibold xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            molestiae sequi praesentium recusandae eius?
          </p>
          <p className="w-[85%] font-normal xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus similique beatae tempora, animi id nesciunt, minus
          </p>
          <button className="w-fit px-2 py-2 bg-[#5080C6] rounded-full">Learn more</button>
        </div>
        <div className="w-1/2 ml-auto xl:flex lg:flex md:flex hidden items-center justify-center">
            <Image src="/logo.svg" alt="About Us" width={700} height={700} />
        </div>
      </div>
    </div>
  );
}
