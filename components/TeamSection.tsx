import Member from "./Member";

export default function TeamSection() {
  const testMembers = [
    {
      name: "John Doe",
      role: "President",
      imgUrl: "/images/john-doe.jpg",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Jane Doe",
      role: "Vice President",
      imgUrl: "/images/jane-doe.jpg",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Alice Doe",
      role: "Treasurer",
      imgUrl: "/images/alice-doe.jpg",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Bob Doe",
      role: "Secretary",
      imgUrl: "/images/bob-doe.jpg",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Eve Doe",
      role: "Event Coordinator",
      imgUrl: "/images/eve-doe.jpg",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Vinay Rajan",
      role: "Webmaster",
      imgUrl: "/images/charlie-doe.jpg",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com",
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col items-center">
      <h1 className="font-bold text-4xl text-white">Our Team</h1>
      <div className="w-[90%] h-fit flex flex-wrap justify-center gap-6">
        {testMembers.map((member, index) => (
          <Member
            key={index}
            name={member.name}
            role={member.role}
            imgUrl={member.imgUrl}
            githubUrl={member.githubUrl}
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div>
    </div>
  );
}
