import { socialLinks } from "./socialLinks";
interface LinksProps {
  gap?: string;
  withLabel: "true" | "false";
}
const Links = ({ gap, withLabel }: LinksProps) => {
  return (
    <div className={`flex gap-${gap} `}>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <div className="flex items-center gap-4 scroll-mt-20 pt-4">
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-500 transition-all duration-200 hover:scale-110 hover:text-indigo-600"
          >
            <div className="flex justify-center items-center gap2">
              <Icon size={27} />
              {withLabel === "true" ? label : null}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Links;
