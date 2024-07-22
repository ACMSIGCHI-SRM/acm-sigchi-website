import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="w-full h-fit flex flex-col items-center">
      <h1 className="font-bold text-4xl text-[#EAA137]">About Us</h1>
      <div className="mt-10 w-[80%] flex flex-row justify-between items-center">
        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex flex-col gap-4">
          <p className="w-[85%] font-semibold xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm">
            The ACM Special Interest Group on Computer-Human Interaction
            (SIGCHI) is the world's largest association of professionals who
            contribute towards the research and practice of human-computer
            interaction (HCI).
          </p>
          <p className="w-[85%] font-normal xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs">
            The ACM Special Interest Group on Computer-Human Interaction
            (SIGCHI) is the world's largest association of professionals who
            contribute towards the research and practice of human-computer
            interaction (HCI). At SRM Institute of Science and Technology, the
            SRM ACM SIGCHI Club aligns with this global mission by fostering a
            community of students and professionals dedicated to advancing the
            field of HCI through collaborative research, innovative projects,
            and regular events.
          </p>
          <button className="w-fit px-4 py-4 bg-[#5080C6] rounded-full">
            Learn more
          </button>
        </div>
        <div className="w-1/2 ml-auto xl:flex lg:flex md:flex hidden items-center justify-center">
          <Image src="/logo.svg" alt="About Us" width={700} height={700} />
        </div>
      </div>
    </div>
  );
}
