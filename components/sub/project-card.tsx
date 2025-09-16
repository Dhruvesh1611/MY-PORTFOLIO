import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  github: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  github,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-full">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative p-4 flex-grow flex flex-col">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 flex-grow">{description}</p>
        <div className="mt-4 flex gap-4">
          <Link
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="button-primary py-2 px-4 rounded-lg text-white flex items-center gap-2"
          >
            <RxGithubLogo />
            GitHub
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="button-primary py-2 px-4 rounded-lg text-white"
          >
            Live
          </Link>
        </div>
      </div>
    </div>
  );
};
