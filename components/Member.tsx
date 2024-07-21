import Image from "next/image";
import logo from "@/public/logo.svg";
import github from "@/public/github-mark-white.svg";
import linkedin from "@/public/linkedin.png";
import Link from "next/link";

export default function Member(props: {
  imgUrl: string;
  name: string;
  role: string;
  githubUrl: string;
  linkedinUrl: string;
}) {
  return (
    <div className="border p-2">
      <Image
        src={logo}
        alt={props.name}
        className="w-full h-auto border"
        width={60}
        height={60}
      />
      <div className="flex mt-3 items-center flex-col">
        <h2 className="font-semibold">{props.name}</h2>
        <p>{props.role}</p>
        <div className="flex mt-2 flex-row bg-inherit gap-3">
          <a target="_blank" href={props.githubUrl}>
            {" "}
            <Image
              src={github}
              alt="github"
              width={30}
              height={30}
              className="rounded-full"
            />
          </a>
          <a target="_blank" href={props.linkedinUrl}>
            <Image
              src={linkedin}
              alt="linkedin"
              width={30}
              height={30}
              className="rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
