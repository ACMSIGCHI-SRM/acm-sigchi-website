import Member from "./Member";

export default function TeamSection() {
  const testMembers = [
    {
      name: "Krishna",
      role: "President",
      imgUrl: "/images/john-doe.jpg",
      githubUrl: "https://github.com/krishnamuttevi",
      linkedinUrl: "https://www.linkedin.com/in/krishna-chaitanya-muttevi-713311272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    },
    {
      name: "Inigo Jeevan",
      role: "Vice President",
      imgUrl: "/images/jane-doe.jpg",
      githubUrl: "https://github.com/Inigojeevan",
      linkedinUrl: "https://www.linkedin.com/in/inigo-jeevan-253a0b24b/",
    },
    {
      name: "Abhisesha",
      role: "Treasurer",
      imgUrl: "/images/alice-doe.jpg",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Rishi",
      role: "Secretary",
      imgUrl: "/images/bob-doe.jpg",
      githubUrl: "https://github.com/risv1",
      linkedinUrl: "https://www.linkedin.com/in/rishiviswanathan16/",
    },
    {
      name: "Pranuthi",
      role: "Event Coordinator",
      imgUrl: "/images/eve-doe.jpg",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Vinay Rajan",
      role: "Webmaster",
      imgUrl: "/images/charlie-doe.jpg",
      githubUrl: "https://github.com/vinay-04",
      linkedinUrl: "https://www.linkedin.com/in/vinayrajans/",
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col items-center">
       <h1 className="font-bold text-4xl text-[#EAA137]">Our Team</h1>
      <div className="w-[90%] h-fit flex flex-wrap justify-center gap-6 mt-10">
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
