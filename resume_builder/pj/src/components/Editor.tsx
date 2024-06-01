import { useCVStore } from "../store"
import usa from '../assets/usa.svg'
import { AiFillQuestionCircle } from "react-icons/ai";
import { ProgressBar } from "./ProgressBar";
import { Ensure } from "./Ensure";
import { Input, Textarea } from "./TailwindUI";

export const Editor = () => {
  const cv = useCVStore((state) => state);
  const percentage = cv.countPercent();
  return (
    <div className="w-full p-12">
        <input 
        className="w-full text-2xl font-[500] text-center bg-transparent border-b-2 border-b-transparent transition-border_width ease-in duration-[100ms] focus:outline-none focus:border-b-2 focus:border-b-blue_1" 
        value={cv.namecv} onChange={e => cv.updateField('namecv', e.target.value,-1)}/>
        <div className="flex flex-row items-center justify-center text-gray1 text-sm">
          <img src={usa} alt="" className="w-5 mr-2" />
          <p>English</p>
        </div>

        <div className="w-full py-[20px]  flex flex-row">
          <div className="px-[4px] py-[2px] rounded-sm  bg-warning1 text-sm font-semibold text-white max-w-max  mr-4">
            {percentage}%
          </div>
          <p>
            Resume score
          </p>
          <div className="w-[65%] flex flex-row justify-end mr-4">
            <div className=" max-w-max bg-green_2 mr-4 text-green_1 rounded-sm px-[4px] py-[2px] text-sm font-semibold">
              +25% 
            </div>
            <p>
              Add more details
            </p>
          </div>
          <div className=" flex flex-row items-center justify-center">
            <AiFillQuestionCircle color="#217d47" size={24}/>
          </div>
        </div>
        <div className="mb-4">
          <ProgressBar percentage={percentage}/>
        </div>
        <div>
          <Ensure/>
        </div>

        {/* Personal detail */}
        <div className="w-full mt-12">
          <div className="text-2xl font-semibold leading-7 mb-4">
            Personal detail
          </div>

          <div className="flex flex-row flex-wrap justify-between ">
            <Input placeholder="" name="Job title" value={cv.jobTitle} onChange={e => cv.updateField('jobTitle', e.target.value,-1)}/>
            <Input placeholder="" name="First Name" value={cv.fname} onChange={e => cv.updateField('fname', e.target.value,-1)}/>
            <Input placeholder="" name="Last Name" value={cv.lname} onChange={e => cv.updateField('lname', e.target.value,-1)}/>
            <Input placeholder="" name="Email" value={cv.email} onChange={e => cv.updateField('email', e.target.value,-1)}/>
            <Input placeholder="" name="Phone" value={cv.phone} onChange={e => cv.updateField('phone', e.target.value,-1)}/>
            <Input placeholder="" name="City" value={cv.city} onChange={e => cv.updateField('city', e.target.value,-1)}/>
          </div>

          <div className="text-md left-6 text-blue_1 font-semibold">
            You should fill all above fields
          </div>
        </div>

        {/* Summary */}
        <div className="w-full mt-12">
          <div className="text-2xl font-semibold leading-7 mb-4">
            Summary
          </div>

            <Textarea placeholder="Write a summary about yourself" name="Summary" value={cv.profileSummary} onChange={e => cv.updateField('profileSummary', e.target.value,-1)}/>

            <div className="w-full text-md mb-2 text-gray_text flex flex-row items-center justify-between leading-5">
              Recruiter tip: write 400-600 characters to increase interview chances
              <span>{cv.profileSummary.length}/600</span>
            </div>
        </div>
        
        {/* Employment hítory */}
        <div className="w-full mt-12">
          <div className="text-2xl font-semibold leading-7 mb-4">
            Employment history
          </div>
            <div className="w-full text-md mb-2 text-gray_text flex flex-row items-center justify-between leading-5">
              Show your most recent employers 
            </div>
        </div>
    </div>
  )
}
