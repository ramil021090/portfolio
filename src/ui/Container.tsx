import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl w-full mx-auto">
      {children}
    </div>
  );
};

export default Container;
