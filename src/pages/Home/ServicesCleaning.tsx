import React, { useEffect, useState } from 'react';
import { AppWindow, LayoutPanelTop } from 'lucide-react';
import floor from '../../assets/svgs/floor.svg';
import house from '../../assets/svgs/house.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Custom hook to check if the screen is large
const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLarge;
};

const ServicesCleaning: React.FC = () => {
  const isLargeScreen = useIsLargeScreen();

  useEffect(() => {
    Aos.init(
      { 
        once: false,
        disable: 'phone', 
      });
  }, []);

  return (
    <div className="w-full px-20 max-sm:mt-10 z-0">
      <div className="w-full bg-[#fff] grid place-items-center">
        <h1 className="border-b-2 text-orange-600 font-bold text-2xl mb-10 pb-4">
          Cleaning Service
        </h1>

        <div className="w-full max-sm:mt-10 grid lg:grid-cols-4 gap-4 place-items-center">
          <div
            className="border-2 rounded-lg flex flex-col items-center relative"
            {...(isLargeScreen && {
              'data-aos': 'fade-right',
              'data-aos-duration': '1500',
            })}>
            <div className="border-2 rounded-full p-6 absolute -top-12 bg-white text-orange-600">
              <img
                src={house}
                alt="house"
                className="w-16 h-16 object-cover text-orange-600"
              />
            </div>
            <div className="pt-14 pb-8 px-2 text-center">
              <h1 className="text-2xl font-bold text-orange-600 py-2">
                House & Office
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo.
              </p>
            </div>
          </div>

          <div
            className="border-2 rounded-lg flex flex-col items-center relative"
            {...(isLargeScreen && {
              'data-aos': 'fade-right',
              'data-aos-duration': '1000',
            })}>
            <div className="border-2 rounded-full p-6 absolute -top-12 bg-white text-orange-600">
              <LayoutPanelTop size={40} />
            </div>
            <div className="pt-14 pb-8 px-2 text-center">
              <h1 className="text-2xl font-bold text-orange-600 py-2">
                Polly Tank Cleaning
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo.
              </p>
            </div>
          </div>

          <div
            className="border-2 rounded-lg flex flex-col items-center relative"
            {...(isLargeScreen && {
              'data-aos': 'fade-left',
              'data-aos-duration': '1500',
            })}>
            <div className="border-2 rounded-full p-4 absolute -top-12 bg-white text-orange-600">
              <img
                src={floor}
                alt="floor"
                className="w-16 h-16 object-cover text-orange-600"
              />
            </div>
            <div className="pt-14 pb-8 px-2 text-center">
              <h1 className="text-2xl font-bold text-orange-600 py-2">
                Floor Cleaning
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo.
              </p>
            </div>
          </div>

          <div
            className="border-2 rounded-lg flex flex-col items-center relative"
            {...(isLargeScreen && {
              'data-aos': 'fade-left',
              'data-aos-duration': '1000',
            })}>
            <div className="border-2 rounded-full p-6 absolute -top-12 bg-white text-orange-600">
              <AppWindow size={40} />
            </div>
            <div className="pt-14 pb-8 px-2 text-center">
              <h1 className="text-2xl font-bold text-orange-600 py-2">
                Window Cleaning
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCleaning;
