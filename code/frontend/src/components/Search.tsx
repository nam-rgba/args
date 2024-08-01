import { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
const Search = ({
  text,
  delay,
  infinite,
}: {
  text: string;
  delay: number;
  infinite: boolean;
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);
  return (
    <div className="w-[50%] h-full flex flex-col justify-center">
      {/* text */}
      <div className="text-[40px] font-roboto text-[#1e223c] font-semibold py-8">
        IT Company Recruitment <br /> Platform{' '}
        <span className="text-[#405de2]">{currentText}</span>{' '}
      </div>
      {/* search input */}
      <div
        className="w-full h-[3.5rem] rounded-full border border-[#d6d6d6] shadow-sm 
      flex flex-row items-center px-2 focus-within:border-[#405de2] overflow-hidden"
      >
        <SearchIcon size={24} className="text-[#d6d6d6] m-2" />
        <input
          type="text"
          placeholder="company name"
          className="w-[80%] h-full focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
