// src/components/layout/Navbar.tsx
import React, { useState } from "react";
import { NAV_ITEMS } from "./navItems";
import Nav from "../../ui/Nav";
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileButtonMenu from "./MobileButtonMenu";
import ItemList from "../../ui/ItemList";

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <div className="md:px-15 md:py-3 pt-1 py-2 bg-slate-50 dark:bg-gray-900 text-gray-800 shadow-md dark:text-white">
        <div className="flex items-center justify-between">
          <Logo href="#home" text="Ram.Dev" />

          <DesktopNavigation data={NAV_ITEMS} />

          <MobileButtonMenu
            onToggle={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
          />
        </div>

        {isOpen && (
          <div className="md:hidden overflow-hidden">
            <div className="pt-4 pb-6 space-y-4 text-center">
              <ItemList
                data={NAV_ITEMS}
                render={(item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-2 text-dark-700  hover:text-primary-600 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              />
              <a href="#contact">
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full "
                >
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </Nav>
  );
};

export default NavigationBar;
