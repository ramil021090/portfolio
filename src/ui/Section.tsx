import type { ReactNode } from "react";

interface SectionProps {
  className?: string;
  id: string;
  children: ReactNode;
}

const Section = ({ className, id, children }: SectionProps) => {
  return (
    <div id={id} className="scroll-mt-20 mb-10">
      <div className={className}>{children}</div>
    </div>
  );
};

export default Section;
