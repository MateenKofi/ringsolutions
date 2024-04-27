import React from 'react'
import { Home, LampDesk, LayoutPanelTop } from 'lucide-react';
import { GiVacuumCleaner } from 'react-icons/gi';

const ServicesCleaning:React.FC = () => {
  return (
    <div className="w-full  max-sm:mt-10 z-0">
          <div className="w-full  bg-[#fff] grid place-items-center">
            <h1 className="border-b-2 text-blue-600 font-bold text-2xl mb-10 pb-4">
              cleaning service
            </h1>

            <div className="w-full max-sm:mt-10  grid lg:grid-cols-4 gap-4 place-items-center">
              <div className="border-2 rounded-lg flex flex-col items-center relative">
                <div className=" border-2 rounded-full p-6 absolute -top-12 bg-white text-blue-600">
                  <Home size={40} />
                </div>
                <div className="pt-14 pb-8 px-2 text-center">
                  <h1 className="text-2xl font-bold text-blue-600 py-2">
                    House & Office
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus accumsan et viverra justo commodo.
                  </p>
                </div>
              </div>
              <div className="border-2 rounded-lg flex flex-col items-center relative">
                <div className=" border-2 rounded-full p-6 absolute -top-12 bg-white text-blue-600">
                  <LayoutPanelTop size={40} />
                </div>
                <div className="pt-14 pb-8 px-2 text-center">
                  <h1 className="text-2xl font-bold text-blue-600 py-2">
                    Polly Tank Cleaning
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus accumsan et viverra justo commodo.
                  </p>
                </div>
              </div>
              <div className="border-2 rounded-lg flex flex-col items-center relative">
                <div className=" border-2 rounded-full p-4 absolute -top-12 bg-white text-blue-600">
                  <GiVacuumCleaner className="text-6xl font-extrabold" />
                </div>
                <div className="pt-14 pb-8 px-2 text-center">
                  <h1 className="text-2xl font-bold text-blue-600 py-2">
                    Floor Cleaning
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus accumsan et viverra justo commodo.
                  </p>
                </div>
              </div>
              <div className="border-2 rounded-lg flex flex-col items-center relative">
                <div className=" border-2 rounded-full p-6 absolute -top-12 bg-white text-blue-600">
                  <LampDesk size={40} />
                </div>
                <div className="pt-14 pb-8 px-2 text-center">
                  <h1 className="text-2xl font-bold text-blue-600 py-2">
                    Window Cleaning
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus accumsan et viverra justo commodo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ServicesCleaning