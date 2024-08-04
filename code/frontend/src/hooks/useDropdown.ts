import { useRef, useEffect, useState, useCallback } from 'react';

// interface DropdownProps {
//   initialIsVisible?: boolean;
// }

// export interface DropdownResult {
//   isOpen: boolean;
//   toggleDropdown: () => void;
//   dropdownRef: React.RefObject<HTMLDivElement>;
// }
export type DropdownResult = {
  isOpen: boolean;
  toggleDropdown: () => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
};

export const useDropdown = () => {
  // State to store the visibility
  const [isOpen, setIsVisible] = useState(false);
  // Reference to the dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Function to handle click outside
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsVisible(false);
      }
    },
    [setIsVisible],
  );

  // Function to toggle the visibility
  const toggleDropdown = useCallback(() => {
    console.log(isOpen);
    setIsVisible((prevVisible) => !prevVisible);
  }, [setIsVisible, isOpen]);

  // Add event listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return { isOpen, toggleDropdown, dropdownRef };
};
