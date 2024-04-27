import React from 'react';
import { CCTV_DATA } from '../assets/data/data';
import bannerImg from '../assets/images/vecteezy_cctv-logo-illustration_5764647 [Converted] 1.png';
import mobileImg from '../assets/images/mobile.png';
import cameraImg from '../assets/images/camera.png';

type CardType = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const CCTVPage: React.FC = () => {
  const [formState, setFormState] = React.useState<string>('');
  return (
    <div className="w-full grid place-items-center bg-[#D7E9F7] h-auto">
      <div className="w-2/3 grid place-items-center border-2">
        {/* Header */}
        <header className="text-center uppercase font-bold">
          <h1 className="text-[42px] py-5">
            <span className="text-[#F68A1F]">Ring Solution</span> range of{' '}
            <span className="text-[#F68A1F]">security</span> Cameras
          </h1>
        </header>
        {/* Cards */}
        <section className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 sm:grid-cols-1 w-full gap-10 p-5 mx-auto my-12">
          {CCTV_DATA.map((card: CardType) => (
            <div
              key={card.id}
              className="bg-white  h-auto py-4 px-5 rounded-3xl shadow-sm flex flex-col items-center justify-center gap-2">
              <img
                src={card.image}
                alt={card.title}
                className="w-24 h-24 object-cover"
              />
              <h2 className="text-2xl uppercase font-bold">{card.title}</h2>
              <p className="text-center  text-[#676767 text-lg]">
                {card.description}
              </p>
              <button className="bg-[#F68A1F] text-white px-5 py-2 rounded-lg mt-5">
                Know More
              </button>
            </div>
          ))}
        </section>
      </div>
      {/* Banner */}
      <section className="w-full">
        <div className="w-full grid place-items-center bg-white pt-6">
          <div className="w-5/6 grid lg:grid-cols-2 place-items-center">
            <div className="w-full grid place-items-center">
              <h1 className="text-center text-[#F68A1F] text-6xl font-bold py-5 capitalize">
                Ring solution providng the best CCTV services
              </h1>
              <p className="text-center text-xl tracking-wider text-[#676767]">
                Eagle Eye is a cloud-managed video surveillance system that links
                your cameras to the cloud, allowing you to monitor your
                property from anywhere in the world.
              </p>
            </div>
            <div className="w-full grid place-items-center">
              <img src={bannerImg} alt="banner" className="" />
            </div>
          </div>
        </div>
        {/* Calls section */}
        <p className="bg-[#F68A1F] p-5 text-center text-white font-medium text-[27px] uppercase">
          easy and fastest way to your security services!
        </p>
        {/* Get the App */}
        <section className="w-full flex flex-col items-center justify-between pt-10">
          {/* Eagle Eye App */}
          <div className="gap-14 w-auto mx-auto max-sm:flex-col lg:flex my-10 ">
            <div className="w-60 h-96">
              <img
                src={mobileImg}
                alt="Mobile-app"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-start w-[65%] ">
              <h1 className="font-normal text-[45px] md:text-3xl py-1">
                Get the Eagle Eye App
              </h1>
              <p className="text-[#494949] text-xl md:w-full w-4/5 py-1">
                We will send you a link, open it on your phone to download the
                app
              </p>
              {/* Forms */}
              <form className="flex flex-col">
                {/* Radio */}
                <div className="flex py-3 items-center gap-3 overflow-hidden">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="email"
                      name="email"
                      value="email"
                      checked={formState === 'email'}
                      onChange={(e) => setFormState(e.target.value)}
                    />
                    <label
                      className="text-lg"
                      htmlFor="email">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="phone"
                      name="phone"
                      value="phone"
                      checked={formState === 'phone'}
                      onChange={(e) => setFormState(e.target.value)}
                    />
                    <label
                      className="text-lg"
                      htmlFor="phone">
                      Phone
                    </label>
                  </div>
                </div>
                {/* Input */}
                <div className="">
                  <div className="w-full">
                    <input
                      type={formState === 'phone' ? 'tel' : 'email'}
                      className="px-4 py-4 outline-none border-gray-400 xl:w-80 md:w-52 sm:w-full rounded-md border w-auto"
                      placeholder={formState === 'phone' ? 'Phone' : 'Email'}
                    />
                    <button
                      type="submit"
                      className="bg-[#F68A1F] text-white px-3 py-4 h-full rounded-lg ml-1 text-lg font-normal max-md:ml-0 max-md:mt-1 md:text-base">
                      Share app link
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* DSVS Software */}
          <div className="gap-14 w-auto mx-auto my-10  py-5 px-2 max-sm:p-0 max-sm:flex-col lg:flex">
            {/* DSVS Software Text Content*/}
            <div className="flex flex-col w-auto">
              <h1 className="text-[45px] font-normal">DSVS SOFTWARE</h1>
              <p className="text-lg py-2 w-[58%]">
                DSVS provides a free surveillance solution for managing multiple
                NVR/DVR/IPC
              </p>
              <ul className="list-disc">
                <li className="ml-8 py-1 text-lg">
                  Up to 128 channels remote live view
                </li>
                <li className="ml-8 py-1 text-lg">
                  Up to 9 channels remote playback
                </li>
                <li className="ml-8 py-1 text-lg">Create & Configure E-Maps</li>
                <li className="ml-8 py-1 text-lg">
                  Supports Multi-screen display
                </li>
              </ul>
              {/* Buttons */}
              <div className="flex items-center mt-5 h-20">
                <button className="bg-[#F68A1F] text-white px-3 py-4 h-full rounded-lg ml-1 text-lg font-normal md:mt-2">
                  DSVS 1.5 (For M series)
                </button>
                <button className="bg-[#F68A1F] text-white px-3 py-4 h-full rounded-lg ml-1 text-lg font-normal md:mt-2">
                  DSVS 2.0 (For L series)
                </button>
              </div>
            </div>
            {/* Image */}
            <div className="w-auto">
              <img
                src={cameraImg}
                className=""
                alt="cctv-pciture"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CCTVPage;
