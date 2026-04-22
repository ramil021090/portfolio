import type { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}

const Nav = ({ children }: NavProps) => {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {children}
    </nav>
  );
};

export default Nav;
