import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import logo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { NavLinks } from '../../data/Navlinks';
import DUserSection from '../usersection/index';

const SideBar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<boolean>(true);

  const setActiveBgColor = (title: string) => {
    setActive(title === active ? null : title);
  };

  return (
    <div
      className={`relative py-2  lg:flex hidden flex-col items-center border border-r-2 shadow-lg h-full ${
        expanded ? 'w-[20%]' : 'w-[5%]'
      }`}>
      <div className="h-full w-full grid place-items-center">
        <div className='flex gap-2 items-center px-4'>
          <figure>
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10"
            />
          </figure>
          <div  className={`active:bg-orange-600 focus:bg-orange-600 ${
                  expanded ? 'w-full px-2' : 'hidden'
                }`}>
            <Link
              to=" "
              className="text-base font-bold">
              <span className="text-orange-600">R</span>ing
              <span className="text-orange-600">S</span>olutions
            </Link>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center mx-4 ">
          <button
            className="z border-2 rounded-xl py-1 text-[#ffff] bg-orange-600 absolute -right-4 top-12 transition-all duration-200 "
            onClick={() => setExpanded((curr) => !curr)}
            aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}>
            {expanded ? <ChevronLeft size={25} /> : <ChevronRight size={25} />}
          </button>
        </div>

        <div className="mb-5 flex flex-col text-slate-500 px-2  text-base">
          {NavLinks.map((link) => (
            <div
              key={link.title}
              className={`w-full py-2 px-2 mt-3  flex  hover:bg-orange-600 hover:text-white rounded-lg cursor-pointer transition-all duration-300 group ${
                active === link.title ? 'bg-orange-600 text-white' : ''
              }`}
              onClick={() => setActiveBgColor(link.title)}>
              <div>
                <Link to={link.path}>
                {React.createElement(link.icon)}
                {!expanded && (
                  <div className="w-full -mt-6 absolute left-full -translate-x-3 rounded-md px-2 py-2 ml-6 bg-indigo-100 text-indigo-800 text-sm opacity-0 transition-colors group-hover:opacity-100 group-hover:translate-x-0 invisible group-hover:visible">
                    {link.title}
                  </div>
                )}
                </Link>
              </div>
              <Link
                to={link.path}
                className={`active:bg-orange-600 focus:bg-orange-600 transition-all duration-300 ${
                  expanded ? 'w-full px-2' : 'hidden'
                }`}>
                {link.title}
              </Link>
            </div>
          ))}
        </div>

        <div>
          <DUserSection expanded={expanded}/>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
