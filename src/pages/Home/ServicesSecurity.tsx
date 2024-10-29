import React, { useEffect, useState } from 'react';
import image1 from '../../assets/images/WhatsApp Image 2024-04-26 at 10.39.21 PM.png';
import image2 from '../../assets/images/fajcd_WhatsApp Image 2024-04-26 at 10.39.21 PM.png';
import { security } from '../../assets/data/data';
import { CalendarClock } from 'lucide-react';
import { MdMiscellaneousServices } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLarge;
};

const ServicesSecurity: React.FC = () => {
  const isLargeScreen = useIsLargeScreen();

  useEffect(() => {
    Aos.init({ once: false });
  }, []);

  return (
    <div className="w-full h-auto mt-10">
      <div className="w-full bg-[#fff] grid place-items-center">
        <h1 className="flex gap-2 border-b-2 text-orange-600 font-bold text-2xl mb-5 pb-4">
          <MdMiscellaneousServices size={24} className="text-orange-600" />
          <span>Security Services</span>
        </h1>

        <div className="w-full px-10 grid lg:grid-cols-[3fr,2fr] gap-4 pb-32" id="cctv">
          <div className="lg:relative grid place-items-center gap-4 w-full justify-items-start">
            <img
              src={image1}
              alt="First Image"
              className="lg:w-[70%] max-sm:w-full h-[60dvh] max-sm:h-[50dvh] rounded-md cursor-pointer"
              {...(isLargeScreen && { 'data-aos': 'zoom-in' })}
            />
            <img
              src={image2}
              alt="Second Image"
              className="w-full rounded-md lg:w-[50%] lg:absolute lg:top-1/2 lg:left-72 transform h-[40dvh] lg:border-8 cursor-pointer lg:border-white lg:rounded-md lg:shadow-lg"
              {...(isLargeScreen && { 'data-aos': 'fade-right' })}
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-orange-600 py-2 uppercase" {...(isLargeScreen && { 'data-aos': 'fade-left', 'data-aos-duration': '900' })}>
              Security & Safety is our priority
            </h1>
            <h1 className="text-4xl font-bold text-slate-700 py-2 uppercase" {...(isLargeScreen && { 'data-aos': 'fade-left', 'data-aos-duration': '1000' })}>
              Residential Security System
            </h1>
            <div className="flex flex-col gap-4" {...(isLargeScreen && { 'data-aos': 'fade-left', 'data-aos-duration': '1500' })}>
              <p className="text-sm tracking-wide text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. lorem ipsum dolor sit amet,
              </p>
              <p className="text-sm tracking-wide text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. lorem ipsum dolor sit amet,
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-2 max-sm:gap-6 mt-8">
              {security.map((items) => (
                <div
                  key={items.id}
                  className="border-2 bg-orange-600 rounded-lg flex flex-col items-center relative"
                  {...(isLargeScreen && { 'data-aos': 'zoom-in-up', 'data-aos-duration': '1000' })}
                >
                  <div className="border-2 rounded-full p-4 absolute -top-6 text-white bg-orange-600">
                    {items.image}
                  </div>
                  <div className="w-full grid place-items-center text-center pt-8 pb-2">
                    <h1 className="max-sm:text-2xl max-sm:w-5/12 lg:text-base font-semibold text-white">
                      {items.title}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full py-4" {...(isLargeScreen && { 'data-aos': 'fade-left', 'data-aos-duration': '1000' })}>
              <Link to="/bookings">
                <button className="max-sm:w-full bg-orange-600 text-white px-6 py-2 rounded-2xl flex items-center justify-center gap-2">
                  <CalendarClock size={24} />
                  <span>Book Schedule</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSecurity;
