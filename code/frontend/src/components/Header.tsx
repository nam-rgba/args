import logo from '../assets/logo.png';
import { Plus } from 'lucide-react';
import { useDropdown } from '../hooks/useDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
export const Header = () => {
  //type
  type Profile = {
    email: string;
  };
  const navigate = useNavigate();

  // dropdown for contributor
  const { isOpen, toggleDropdown, dropdownRef } = useDropdown();
  //dropdown for account
  const {
    isOpen: isOpen2,
    toggleDropdown: toggleDropdown2,
    dropdownRef: dropdownRef2,
  } = useDropdown();

  // State for profile
  const [profile, setProfile] = useState<Profile>({ email: '' });
  // get profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:3003/auth/profile', {
          credentials: 'include',
        });
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  // logout
  const handleLogout = async () => {
    try {
      await fetch('http://localhost:3003/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setProfile({ email: '' });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const profileBtn = () => {
    return (
      <div
        className="h-1/2 text-green_1 bg-green_2 text-[14px] ml-6 rounded-xl px-4 flex items-center pb-1 cursor-pointer relative"
        onClick={toggleDropdown2}
      >
        {profile.email.split('@')[0]}
        {isOpen2 && (
          <div
            ref={dropdownRef2}
            className="absolute z-10 right-0 top-8 bg-bg_1 text-purple2 p-2 w-[100px] rounded-sm hover:bg-bg_2 text-right"
          >
            <div onClick={handleLogout}>Log out</div>
          </div>
        )}
      </div>
    );
  };
  return (
    <div
      className="w-full h-[66px] flex flex-row items-center justify-between  pt-[3px] pb-[5px] px-[30px]
      border-b border-b-bg_1 relative"
    >
      {/* branch, logo */}
      <div className="w-[120px] h-full p-2 flex flex-row justify-between items-center">
        <img src={logo} alt="" className=" h-2/3 object-cover " />
        <div className="text-[21px] font-semibold text-purple leading-6 ml-2">
          InSource
        </div>
      </div>
      {/* Middle, links */}
      <div className="w-[24%] font-semibold h-full mt-2 flex flex-row items-center justify-between">
        <a className="hover:text-purple" href="">
          Company
        </a>
        <a className="hover:text-purple" href="">
          Jobs
        </a>
        <a className="hover:text-purple" href="">
          {' '}
          Make your CV
        </a>
      </div>
      {/* Right, contribute, login */}
      <div className="h-full flex flex-row items-center">
        <div
          className="h-[60%] w-32 rounded-3xl bg-purple text-bg_1 flex flex-row 
        items-center text-[14px] p-3 cursor-pointer font-semibold justify-between relative"
          onClick={toggleDropdown}
        >
          Contribute
          <Plus />
          {/* dropdown */}
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute z-10 right-0 top-10 w-64 bg-bg_1 rounded-xl"
            >
              <div className="h-[4rem] text-green_1 bg-green_2 text-[14px] rounded-xl px-4 flex items-center pb-1 cursor-pointer hover:bg-[#caf0da] ">
                Write a review
              </div>
              <div className="h-[4rem] text-green_1 bg-green_2 text-[14px] rounded-xl px-4 flex items-center pb-1 cursor-pointer hover:bg-[#caf0da]">
                Add a job
              </div>
            </div>
          )}
        </div>
        {profile.email ? profileBtn() : loginBtn()}
      </div>
    </div>
  );
};

const loginBtn = () => {
  return (
    <div className="h-1/2 text-green_1 bg-green_2 text-[14px] ml-6 rounded-xl px-4 flex items-center pb-1 cursor-pointer">
      <Link to="/auth/login">Login</Link>
    </div>
  );
};
