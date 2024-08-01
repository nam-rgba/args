import image from '../assets/landing.png';

const LandingImage = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent h-full"></div>
      <img src={image} alt="" className="w-full h-full" />
    </div>
  );
};

export default LandingImage;
