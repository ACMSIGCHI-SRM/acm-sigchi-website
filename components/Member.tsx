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
    <div className="flex items-center flex-col p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-fit">
      <Image src={logo} alt={props.name} className="w-2/3 h-auto" />
      <div className="flex mt-3 items-center flex-col">
        <h2 className="font-semibold text-lg sm:text-lg md:text-md lg:text-lg xl:text-xl text-center">
          {props.name}
        </h2>
        <p className="text-md sm:text-md md:text-base lg:text-md xl:text-sm text-center">
          {props.role}
        </p>
        <div className="flex mt-2 flex-row bg-inherit gap-5">
          <Link target="_blank" href={props.githubUrl}>
            <Image
              src={github}
              alt="github"
              className="rounded-full w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
          </Link>
          <Link target="_blank" href={props.linkedinUrl}>
            <Image
              src={linkedin}
              alt="linkedin"
              className="rounded-full w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
