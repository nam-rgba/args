import { Header } from '../components/Header';
import { Toaster } from 'sonner';
import LandingImage from '../components/LandingImage';
import Search from '../components/Search';
import landing from '../assets/bannerlanding.png';
export const Landing = () => {
  // function when login successful, toast

  // TSX
  return (
    <div>
      <Header></Header>
      <Toaster position="top-center" />
      <section className="flex flex-row w-full h-[480px] justify-around bg-[#fafbfb]">
        <Search text="InSource" delay={200} infinite={true} />
        <LandingImage></LandingImage>
      </section>
      <section className="mt-8 p-8">
        <img src={landing} className="rounded-2xl" />
      </section>
    </div>
  );
};
