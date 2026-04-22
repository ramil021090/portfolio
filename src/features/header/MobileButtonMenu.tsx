import { FiMenu, FiX } from "react-icons/fi";

interface MobileButtonMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileButtonMenu = ({ isOpen, onToggle }: MobileButtonMenuProps) => {
  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden p-2 text-dark-700 hover:text-primary-600"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </>
  );
};

export default MobileButtonMenu;
