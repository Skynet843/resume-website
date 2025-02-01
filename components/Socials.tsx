import Link from "next/link";
import { FC } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Skynet843",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/souvik3103/",
  },
];

type SocialsPropType = { containerStyles: string; iconStyles: string };

export const Socials: FC<SocialsPropType> = ({
  containerStyles,
  iconStyles,
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            target="_blank"
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
