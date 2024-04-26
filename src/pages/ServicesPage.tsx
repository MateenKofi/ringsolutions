import { Flower, Home, LampDesk, LayoutPanelTop } from 'lucide-react';
import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="w-full grid bg-[#fff]  place-items-center">
      <div className="w-5/6 grid  place-items-center">
        <div className='text-center'>
          <h5 className='text-blue-600 font-bold'>our service</h5>
          <h1 className='text-5xl text-slate-700 font-sans font-bold'>what we are offering</h1>
        </div>
        {/* cleaning */}
        <div className='w-full'>
          <div className='w-full h-96 bg-[#fff] grid place-items-center'>
          <h1 className='border-b-2 text-blue-600 font-bold text-2xl pb-4'>cleaning service</h1>
            
            <div className='w-full  grid lg:grid-cols-4 gap-4 place-items-center'>
              <div className='border-2 rounded-lg flex flex-col items-center relative'>
                <div className=' border-2 rounded-full p-6 absolute -top-12 bg-white text-blue-600'>
                  <Home size={40} />
                </div>
                <div className='pt-14 pb-8 px-2 text-center'>
                <h1 className='text-2xl font-bold text-blue-600 py-2'>House Cleaning</h1>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                  accumsan et viverra justo commodo.
                </p>
                </div>
                </div>
                <div className='border-2 rounded-lg flex flex-col items-center relative'>
                <div className=' border-2 rounded-full p-6 absolute -top-12 bg-white text-blue-600'>
                  <LayoutPanelTop size={40} />
                </div>
                <div className='pt-14 pb-8 px-2 text-center'>
                <h1 className='text-2xl font-bold text-blue-600 py-2'>Office Cleaning</h1>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                  accumsan et viverra justo commodo.
                </p>
                </div>
                </div>
                <div className='border-2 rounded-lg flex flex-col items-center relative'>
                <div className=' border-2 rounded-full p-6 absolute -top-12 bg-white text-blue-600'>
                  <Flower size={40} />
                </div>
                <div className='pt-14 pb-8 px-2 text-center'>
                <h1 className='text-2xl font-bold text-blue-600 py-2'>Floor Cleaning</h1>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                  accumsan et viverra justo commodo.
                </p>
                </div>
                </div>
                <div className='border-2 rounded-lg flex flex-col items-center relative'>
                <div className=' border-2 rounded-full p-6 absolute -top-12 bg-white text-blue-600'>
                  <LampDesk size={40} />
                </div>
                <div className='pt-14 pb-8 px-2 text-center'>
                <h1 className='text-2xl font-bold text-blue-600 py-2'>Window Cleaning</h1>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                  accumsan et viverra justo commodo.
                </p>
                </div>
                </div>
              
            </div>
          </div>


        </div>
        {/* security */}
        <div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
