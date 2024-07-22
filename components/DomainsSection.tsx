import Image from "next/image";

export default function DomainsSection() {
  const domains = [
    { id: 1, name: "Technical", reverse: false },
    { id: 2, name: "Creatives", reverse: true },
    { id: 3, name: "Events", reverse: false },
    { id: 4, name: "Management", reverse: true },
  ];
  return (
    <div className="w-full h-fit flex flex-col items-center gap-10">
       <h1 className="font-bold text-4xl text-[#EAA137]">Domains</h1>
      {domains.map((domain) => (
        <div key={domain.id} className="w-full flex flex-col items-center">
          <div
            className={`mt-10 w-[80%] flex flex-row justify-between items-center gap-20 ${
              domain.reverse ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-1/2 flex flex-col gap-4">
            <h1 className="font-bold text-3xl text-[#EAA137]">{domain.name}</h1>
              <p className="w-[85%] font-normal xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus similique beatae tempora, animi id nesciunt, minus
              </p>
              <button className="w-fit px-2 py-2 bg-[#5080C6] rounded-full">
                Learn more
              </button>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <Image src="/logo.svg" alt="About Us" width={700} height={700} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
