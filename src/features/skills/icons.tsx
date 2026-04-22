import { SiReact } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TiCss3 } from "react-icons/ti";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { TbBrandSupabase } from "react-icons/tb";
import type { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";

export interface IconTypes {
  iconName: string;
  icon: ReactNode;
  level: "Expert" | "Proficient" | "Familiar";
}

const size = 64;

export const icons: IconTypes[] = [
  {
    iconName: "React",
    icon: <SiReact size={size} />,
    level: "Expert",
  },
  {
    iconName: "ReactNative",
    icon: <TbBrandReactNative size={size} />,
    level: "Familiar",
  },
  {
    iconName: "JavaScript",
    icon: <IoLogoJavascript size={size} />,
    level: "Proficient",
  },
  {
    iconName: "TypeScript",
    icon: <TbBrandTypescript size={size} />,
    level: "Expert",
  },
  {
    iconName: "CSS 3",
    icon: <TiCss3 size={size} />,
    level: "Proficient",
  },
  {
    iconName: "HTML 5",
    icon: <AiOutlineHtml5 size={size} />,
    level: "Proficient",
  },
  {
    iconName: "Tailwind CSS",
    icon: <TbBrandTailwind size={size} />,
    level: "Expert",
  },
  {
    iconName: "Expo",
    icon: <SiExpo size={size} />,
    level: "Familiar",
  },
  {
    iconName: "Supabase",
    icon: <TbBrandSupabase size={size} />,
    level: "Proficient",
  },
  {
    iconName: "Github",
    icon: <FaGithub size={size} />,
    level: "Proficient",
  },
];
