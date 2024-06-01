
export const ProgressBar = ({percentage}:{percentage:number}) => {

    return (
        <div className="w-full h-2 border-none rounded-full bg-bg_1 overflow-hidden">
            <div className="h-full bg-[#fe7d8b]" style={{width:`${percentage}%`}}></div>
        </div>
    )
}
