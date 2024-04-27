
import React from 'react';
import ServicesCleaning from '../components/ServicesCleaning';
import ServicesSecurity from '../components/ServicesSecurity';

const ServicesPage: React.FC = () => {
  return (
    <div className="w-full h-full py-10 grid bg-[#fff]  place-items-center" id='services'>
      <div className="w-5/6 grid  place-items-center">
        <div className="text-center py-6">
          <h5 className="text-blue-600 font-bold">our service</h5>
          <h1 className="3xl text-5xl text-slate-700 font-sans font-bold uppercase">
            what we are offering
          </h1>
        </div>
        {/* cleaning */}
        <ServicesCleaning />
        {/* security */}
        <ServicesSecurity />
        
      </div>
    </div>
  );
};

export default ServicesPage;
