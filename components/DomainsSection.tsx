import Image from "next/image";

export default function DomainsSection() {
  const domains = [
    { id: 1, name: "Technical", reverse: false, description: "Our Technical domain is dedicated to advancing the technical skills of our members. We focus on software development, user experience design, and cutting-edge research. Through coding sessions, project collaborations, and technical talks, we equip members with the knowledge and tools they need to excel in their careers" },
    { id: 2, name: "Creatives", reverse: true,  description: "Our Creative domain thrives on innovation and imagination. We design engaging multimedia content, craft compelling narratives, and produce visually appealing graphics to represent our club. This domain is where creativity meets technology, providing a platform for members to showcase their artistic talents in Human-Computer Interaction (HCI)." },
    { id: 3, name: "Events", reverse: false,  description: "The Events domain is the heart of our club’s community engagement. We organize a variety of activities, including workshops, seminars, hackathons, and conferences. These events provide valuable learning opportunities, foster networking, and help members stay abreast of the latest trends and research in HCI." },
    { id: 4, name: "Corporate", reverse: true,  description: "In the Corporate domain, we bridge the gap between academia and industry. We establish and maintain relationships with corporate partners and secure sponsorship with our partnered brands . The main goal of corporate is to assist with the internal goals of events and promote the events in their unique way" },
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
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex flex-col gap-4">
              <h1 className="font-bold text-3xl text-[#EAA137]">
                {domain.name}
              </h1>
              <p className="w-[85%] font-normal xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs">
                {domain.description}
              </p>
              <button className="w-fit px-2 py-2 bg-[#5080C6] rounded-full">
                Learn more
              </button>
            </div>
            <div className="w-1/2 xl:flex lg:flex md:flex hidden items-center justify-center">
              <Image src="/logo.svg" alt="About Us" width={700} height={700} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
