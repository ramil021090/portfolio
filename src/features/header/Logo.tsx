import { FaCode } from "react-icons/fa";
interface LogoProps {
  href: string;
  text: string;
}

const Logo = ({ href, text }: LogoProps) => {
  return (
    <div className="flex-1 mr-2 rounded-md px-3">
      <a
        href={href}
        className="flex items-center gap-2 text-xl font-bold text-dark-900"
      >
        <FaCode size={42} />
        <span className="gradient-text">{text}</span>
      </a>
    </div>
  );
};

export default Logo;
