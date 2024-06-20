import React, { useEffect, useState } from 'react';
import '../../assets/styles/WomeGlobeSection.css';
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
    <section className='content1'>
      {!isMobile ? (
        <>
          <div className='animation-container desktop-bg'>
            <div className='absolute'>
              <img src={`${GlobeGif}?${new Date().getTime()}`} className='relative z-10' alt='globe' />
            </div>
            <div className="slide-text">
              <span className="animated-text">Hello World</span>
              <span className="animated-text">Hello World</span>
              <span className="animated-text">Hello World</span>
              <span className="animated-text">Hello World</span>
              <span className="animated-text">Hello World</span>
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <div className='bg-[#D9E0EC33] relative w-full mt-[74rem]'>
              <div className='py-12'>
                <div className='helloworld-text sm:text-[40px] md:text-[6.125rem] lg:text-[8rem] xl:text-[100px]'>
                  Hello&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;World
                </div>
                <div className='Montserrat font-medium sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] md:leading-[28px] lg:leading-[32px] xl:leading-[34.13px] text-[#AAAAAA]'>
                  Welcome to a memeverse experience for the masses.
                </div>
                <div className='pt-4 Montserrat font-medium sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] md:leading-[20px] lg:leading-[22px] xl:leading-[24.38px] text-[#AAAAAA]'>
                  Begin your journey into the World Of Meme with us.
                </div>
              </div>
            </div>
            <footer className='py-4 w-full mt-auto'>
              <div className='container mx-auto px-4'>
                <div className='flex justify-center items-center'>
                  <div className='flex space-x-4'>
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
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </>
      ):(
        <>
          <div className='animation-container desktop-bg-mobile'>
            <div className='absolute'>
              <img src={`${GlobeGif}?${new Date().getTime()}`} className='relative z-10' alt='globe' />
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <div className='relative w-full mt-[124%]'>
              <div className=''>
                <div className='Montserrat font-medium text-[20px] leading-[30px] text-[#AAAAAA]'>
                  Welcome to a memeverse experience for the masses.
                </div>
                <div className='pt-4 Montserrat font-light text-[16px] leading-[24px] text-[#AAAAAA]'>
                  Begin your journey into the World Of Meme with us.
                </div>
              </div>
            </div>
            <footer className='w-full bg-white mt-[4rem] relative'>
              <div className='container mx-auto px-4'>
                <div className='flex justify-center items-center'>
                  <div className='flex space-x-4'>
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
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </>
      )}
    </section>
  );
}

export default WomeGlobeSection;
