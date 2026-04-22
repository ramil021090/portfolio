import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import type { IconType } from "react-icons";

interface socialLinksProps{
  icon:IconType
  color?:string
  label?:string
  href?:string
}

export const socialLinks: socialLinksProps[]=[
  { icon: LuLinkedin, href: "https://www.linkedin.com/in/ramil-villahermosa-a78476339/?skipRedirect=true", color: "hover:text-blue-600", label: "LinkedIn" },
  { icon: FiGithub, href: "https://github.com/ramil021090", color: "hover:text-gray-900", label: "GitHub" },
  { icon: MdOutlineMail, href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl", color: "hover:text-red-500", label: "Email" },

]