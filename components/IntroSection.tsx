import Image from "next/image";

export default function IntroSection() {
  return (
    <div className="w-[80%] h-fit flex flex-row items-center gap-10">
      <div className="w-1/2 flex justify-center items-center">
        <Image src="/logo.svg" alt="Hero" width={500} height={500} />
      </div>
      <div className="w-1/2 flex flex-col items-center gap-3">
        <h1 className="w-[75%] font-bold lg:text-6xl md:text-5xl text-4xl text-[#EAA137]">
          ACM Sigchi
        </h1>
        <p className="w-[75%] font-semibold xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs">
          ACM SIGCHI is the leading international community of students and
          professionals interested in research, education, and practical
          applications of Human Computer Interaction.
        </p>
      </div>
    </div>
  );
}
