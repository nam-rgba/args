
import { RiArrowDropDownLine } from "react-icons/ri";

export const Section = ({index,name, onSave, onDelete, is}: {index: number, name: string, onSave: () => void, onDelete: () => void }) => {
  
  
  let instance = null;
  switch (name) {
    case "employmentHistory":
      instance = {jobTitle: '', company: '', startDate: '', endDate: '', description: ''};
      break;
    case "education":
      instance = {degree: '', school: '', startDate: '', endDate: '', description: ''};
      break;
    case "projects":
      instance = {name: '', description: ''};
      break;
    case "activities":
      instance = {title: '', description: ''};
      break;
    case "language":
      instance = {language: '', level: ''};
      break;
    default:
      instance = null;
  }
  

  
  return (
    <div className="w-full h-[70px]">
        <div className=" w-full h-full flex flex-row items-center justify-between p-6 pr-15">
            <div>
              Specified 1
            </div>
            <div>
              <RiArrowDropDownLine size={20} color="#fe7d8b"/>
            </div>
        </div>

    </div>
  )
}
