import React from 'react';
import image from '../../assets/images/pngegg - 2022-12-31T123205 1.png';
import { CalendarClock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="w-full bg-pink-50 grid  place-items-center">
      <div className="w-5/6 grid lg:grid-cols-2 place-items-center">
        <div className='h-full grid justify-between items-center'>
          <div className='flex flex-col gap-4'>
            <div>
            <h4 className="uppercase">
              Highly Professonal cleaning and Housing Security
            </h4>
            <h1 className="text-blue-600 text-3xl lg:text-5xl font-bold uppercase">
              Ring Solutions
            </h1>
            </div>
            <h1 className="text-slate-600 text-3xl lg:text-5xl font-bold uppercase">
              House and office
            </h1>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>
            <div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl flex gap-2">
                <CalendarClock size={24} />
                <span> Book Schedul</span>
              </button>
            </div>
          </div>
          <div>
            <h1 className='uppercase text-lg text-blue-600  lg:text-xl font-bold'>spring ring Solutions</h1>
            <h1 className='text-slate-600 text-xl lg:text-3xl font-bold uppercase'>Brand You can always trust</h1>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt="banner"
            className="h-[90dvh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
