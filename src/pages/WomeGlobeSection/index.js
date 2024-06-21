import React, { useEffect, useState } from 'react';
import '../../assets/styles/WomeGlobeSection.css';
import GlobeGif from "../../assets/video/globedarklightinggif_100.gif";
import MobileBg from '../../assets/images/Mobile_Static_Background.png';

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
    <section className={`content1 xs:pt-[4rem] md:pt-[13rem] lg:pt-[13rem]  ${isMobile ? 'mobile-bg' : 'desktop-bg'}`}>
      <div className='animation-container'>
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
      <div className='text-content'>
        <div className='relative'>
          <div className='my-12 xs:px-4'>
            {!isMobile && (
              <div className='helloworld-text sm:text-[40px] md:text-[6.125rem] lg:text-[8rem] xl:text-[100px]'>
              Hello World
            </div>
            )}
            <div className='Montserrat font-medium xs:text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] md:leading-[28px] lg:leading-[32px] xl:leading-[34.13px] text-[#AAAAAA]'>
              Welcome to a memeverse experience for the masses.
            </div>
            <div className='pt-4 Montserrat font-medium xs:text-[16px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] md:leading-[20px] lg:leading-[22px] xl:leading-[24.38px] text-[#AAAAAA]'>
              Begin your journey into the World Of Meme with us.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WomeGlobeSection;
