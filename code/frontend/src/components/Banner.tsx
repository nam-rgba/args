import banner from '../assets/banner.png';
export const Banner = () => {
  return (
    <div className="w-[50%] h-full flex flex-row items-center justify-between">
      <div className="w-full h-full bg-cover object-cover ">
        <img src={banner} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};
