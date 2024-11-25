import Link from "next/link";
import { FC } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
  {
    icon: <FaInstagram />,
    path: "",
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
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
