import React, { useEffect, useState } from 'react';
import '../../assets/styles/WomeGlobeSection.css';
// import Dot from '../../assets/images/Dot.svg';
// import Globe from '../../assets/video/globe_VP100.webm';
import GlobeGif from "../../assets/video/globedarklightinggif_100.gif"
import MobileBg from '../../assets/images/Mobile_Static_Background.png';
import { isIOS } from 'react-device-detect';
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane, FaSearch } from "react-icons/fa";

function WomeGlobeSection() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 640;

  return (
    <section className='womeglobe-section'>
      {!isMobile ? (
        <>
          <div className='relative h-[100vh] flex items-center justify-center overflow-hidden desktop-bg mt-[10px]'>
            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden'>
              {/* <img
                src={Dot}
                alt='grouping-dots'
                className='absolute w-[200px] md:top-[10rem] lg:top-[12rem] xl:top-[10rem] md:left-[10rem] lg:left-[15rem] xl:left-[25rem]'
              />
              <img
                src={Dot}
                alt='grouping-dots'
                className='absolute w-[200px] md:top-[25rem] lg:top-[25rem] xl:top-[27rem] md:left-[42rem] lg:left-[52rem] xl:left-[70rem]'
              /> */}
              <div className='video-container'>              
                <img src={`${GlobeGif}?${new Date().getTime()}`} className='video-globe' alt='globe' />
              </div>
              <div className='slide-text'>
                <span className='animated-text'>Hello World</span>
                <span className='animated-text'>Hello World</span>
                <span className='animated-text'>Hello World</span>
                <span className='animated-text'>Hello World</span>
                <span className='animated-text'>Hello World</span>
              </div>
            </div>
          </div>
          <div className='bg-[#D9E0EC33] relative mt-[-72px] helloworldbg'>
            <div className='py-12'>
              <div className='helloworld-text md:text-[6.125rem] lg:text-[8rem] xl:text-[100px]'>
                Hello&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;World
              </div>
              <div className='Montserrat font-medium md:text-[20px] lg:text-[22px] xl:text-[28px] md:leading-[28px] lg:leading-[32px] xl:leading-[34.13px] text-[#AAAAAA]'>
                Welcome to a memeverse experience for the masses.
              </div>
              <div className='pt-4 Montserrat font-medium md:text-[16px] lg:text-[18px] xl:text-[20px] md:leading-[20px] lg:leading-[22px] xl:leading-[24.38px] text-[#AAAAAA]'>
                Begin your journey into the World Of Meme with us.
              </div>
            </div>
          </div>
          <footer className='text-center py-4'>
            <div className="flex justify-center items-end mt-4">
              <button
                type="button"
                className="p-2 me-3 text-sm font-medium text-black focus:outline-none bg-white hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                <a href='https://x.com/WOMEonSOL' target='_blank'>
                  <FaXTwitter size={25} />
                </a>
              </button>
              <button
                type="button"
                className="p-2 me-3 text-sm font-medium text-black focus:outline-none bg-white hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                <a href='#'>
                  <FaDiscord size={25} />
                </a>
              </button>
              <button
                type="button"
                className="p-2 me-3 text-sm font-medium text-black focus:outline-none bg-white hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                <a href='#'>
                  <FaTelegramPlane size={25} />
                </a>
              </button>
              <button
                type="button"
                className="hidden flex me-3 w-72 items-center justify-between py-2.5 px-5 text-sm font-medium text-gray-300 focus:outline-none bg-white rounded-full border border-gray-300 hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                <span>Search</span>
                <FaSearch size={20} className="ml-2" />
              </button>
            </div>
          </footer>
        </>
      ) : (
        <>
          <div className='relative h-[100vh] flex items-center justify-center overflow-hidden bg-[#fffff]'>
            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden'>
              <img src={MobileBg} alt='mobile-background' className='absolute inset-0 w-full h-full object-cover' />
              <div className='video-container-mobile'>
                <img src={`${GlobeGif}?${new Date().getTime()}`} className='video-globe-mobile' alt='globe' data-mode="video" />
              </div>
            </div>
          </div>
          <div className='relative mt-[-270px] helloworldbg p-2 pb-14'>
            <div className='pt-32'>
              <div className='Montserrat font-medium text-[20px] leading-[30px] text-[#AAAAAA]'>
                Welcome to a memeverse experience for the masses.
              </div>
              <div className='pt-4 Montserrat font-light text-[16px] leading-[24px] text-[#AAAAAA]'>
                Begin your journey into the World Of Meme with us.
              </div>
            </div>
          </div>
          <footer className='text-center py-4 z-20 relative pt-[1.75rem]'>
            <div className="flex justify-center items-end mt-4">
              <button
                type="button"
                className="p-2 me-3 text-sm font-medium text-black focus:outline-none bg-white hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                <a href='https://x.com/WOMEonSOL' target='_blank'>
                  <FaXTwitter size={25} />
                </a>
              </button>
              <button
                type="button"
                className="p-2 me-3 text-sm font-medium text-black focus:outline-none bg-white hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                <a href='#'>
                  <FaDiscord size={25} />
                </a>
              </button>
              <button
                type="button"
                className="p-2 me-3 text-sm font-medium text-black focus:outline-none bg-white hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                <a href='#'>
                  <FaTelegramPlane size={25} />
                </a>
              </button>
              <button
                type="button"
                className="hidden flex me-3 w-72 items-center justify-between py-2.5 px-5 text-sm font-medium text-gray-300 focus:outline-none bg-white rounded-full border border-gray-300 hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                <span>Search</span>
                <FaSearch size={20} className="ml-2" />
              </button>
            </div>
          </footer>
        </>
      )}
    </section>
  );
}

export default WomeGlobeSection;
