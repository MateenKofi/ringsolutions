import React, { useEffect } from 'react'
import mobileImg from '../../assets/images/mobile.png';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Mobile:React.FC = () => {
    useEffect(() => {
    Aos.init({
      once: false,
    });
    }, []);
  return (
    <div className="gap-14 w-2/3 max-sm:w-full mx-auto max-sm:flex-col lg:flex my-10 justify-center items-center">
    <div className="w-60 h-96">
      <img
        src={mobileImg}
        alt="Mobile-app"
        className="w-full h-full"
        data-aos="fade-right"
        data-aos-duration="1000"
      />
    </div>
    <div className="flex flex-col justify-center w-[65%] max-sm:w-full px-3">
      <h1 className="font-bold text-slate-600 text-4xl uppercase  py-1"  data-aos="fade-left"
        data-aos-duration="1000">
        Get the your home, word place, and office surveillance on your phone
      </h1>
      <p className="text-[#494949] text-xl md:w-full w-4/5 py-1"  data-aos="fade-left"
        data-aos-duration="1500">
        We will send you a link, open it on your phone to download the
        app
      </p>
      <p  data-aos="fade-left"
        data-aos-duration="1500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat ad consequatur dignissimos natus, perferendis ducimus optio harum animi! Accusantium consequatur et quidem doloribus laboriosam rem autem ea voluptatum ipsum!
      </p>
     
    </div>
  </div>
  )
}

export default Mobile