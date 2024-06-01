import image from '../assets/image.png'
export const Ensure = () => {
  return (
    <div className="bg-bg_2 w-full h-[116px] flex flex-row items-center justify-center p-4">
        <img src={image} alt=""  className='h-[86px] mr-6' />
        <div>
                <p className='text-xl font-semibold leading-6 text-purple hover:text-purple2 mb-2'>
                    Ensure your resume fits the job opening</p>
                <div className='text-purple2 tetx-sm '>
                    Simply paste the link to the job listing, we’ll help you optimize your resume
                </div>
        </div>
    </div>
  )
}
