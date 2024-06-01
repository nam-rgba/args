

// Rule : No container, w-full
export const Input = ({placeholder, name, value, onChange}:{placeholder:string, name:string, value:string, onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void}) => {
  return (
    <div className="w-[248px] mb-6 ">
      <div className="w-full text-md mb-2 text-gray_text flex flex-row items-center justify-between leading-5">{name}</div>
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} 
        className="bg-bg_1 h-12 border-none w-full rounded-sm px-4 text-text_1 focus:outline-none caret-blue_1"
      />
    </div>
  )
}


export const Textarea = ({placeholder, name, value, onChange}:{placeholder:string, name:string, value:string, onChange:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void}) => {
  return (
   <div className="flex flex-row flex-wrap justify-between ">
            <div className="w-full text-md mb-2 text-gray_text flex flex-row items-center justify-between leading-5">
              {name}
            </div>
            <textarea value={value} 
            onChange={onChange} 
            className="w-full h-32 border-none rounded-md bg-bg_1 p-4 focus:outline-none caret-blue_1 mb-4"
            disabled={value.length > 599}
            placeholder={placeholder}
            ></textarea>
          </div>
  )
}

