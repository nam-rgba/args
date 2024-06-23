import logo from '../assets/logo.png';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useDropdown } from '../hooks/useDropdown';
export const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const { isSROpen, toggleSR, dropdownRCRef } = useDropdown();
  return (
    <div
      className="w-full h-[66px] flex flex-row items-center justify-between  pt-[3px] pb-[5px] px-[30px]
      border-b border-b-bg_1 relative"
    >
      <div className="w-[120px] h-full p-2 flex flex-row justify-between items-center">
        <img src={logo} alt="" className=" h-2/3 object-cover " />
        <div className="text-[21px] font-semibold text-purple leading-6 ml-2">
          InSource
        </div>
      </div>
      <div className="w-[40%] h-[60%] border border-[#d2d2d2] rounded-2xl mr-32 mt-2 ">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="h-full flex flex-row items-center">
        <div
          className="h-[60%] w-32 rounded-3xl bg-purple text-bg_1 flex flex-row 
        items-center text-[14px] p-3 cursor-pointer font-semibold justify-between"
        >
          Contribute
          <Plus />
        </div>

        <div className="h-1/2 text-green_1 bg-green_2 text-[14px] ml-6 rounded-xl px-4 flex items-center pb-1 cursor-pointer">
          Login
        </div>
      </div>
    </div>
  );
};
