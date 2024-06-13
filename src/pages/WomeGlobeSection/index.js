import React, { useEffect, useState } from 'react';
import '../../assets/styles/WomeGlobeSection.css';
import Dot from '../../assets/images/Dot.svg';
import Globe from '../../assets/video/globe_VP100.webm';
import GlobeGif from "../../assets/video/globeupdated100.gif"
import MobileBg from '../../assets/images/Mobile_Static_Background.png';
import { isIOS } from 'react-device-detect';

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
          <div className='relative h-[100vh] flex items-center justify-center overflow-hidden bg-[#fffff]'>
            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden'>
              <img
                src={Dot}
                alt='grouping-dots'
                className='absolute w-[200px] md:top-[10rem] lg:top-[12rem] xl:top-[10rem] md:left-[10rem] lg:left-[15rem] xl:left-[25rem]'
              />
              <img
                src={Dot}
                alt='grouping-dots'
                className='absolute w-[200px] md:top-[25rem] lg:top-[25rem] xl:top-[25rem] md:left-[42rem] lg:left-[52rem] xl:left-[64rem]'
              />
              <div className='video-container'>              
                {isIOS ? (
                  <img src={GlobeGif} className='video-globe' alt='globe' />
                ): (
                  <video src={Globe} className='video-globe' autoPlay loop muted /> 
                )}
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
          <div className='bg-[#D9E0EC33] relative mt-[-160px] helloworldbg'>
            <div className='py-12'>
              <div className='helloworld-text md:text-[6.125rem] lg:text-[8rem] xl:text-[100px]'>
                Hello &nbsp;&nbsp;&nbsp;&nbsp; World
              </div>
              <div className='Montserrat font-medium md:text-[20px] lg:text-[22px] xl:text-[28px] md:leading-[28px] lg:leading-[32px] xl:leading-[34.13px] text-[#AAAAAA]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </div>
              <div className='pt-4 Montserrat font-medium md:text-[16px] lg:text-[18px] xl:text-[20px] md:leading-[20px] lg:leading-[22px] xl:leading-[24.38px] text-[#AAAAAA]'>
                Mauris lectus libero, luctus malesuada laoreet vitae, pulvinar gravida sapien
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='relative h-[100vh] flex items-center justify-center overflow-hidden bg-[#fffff]'>
            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden'>
              <img src={MobileBg} alt='mobile-background' className='absolute inset-0 w-full h-full object-cover' />
              <div className='video-container-mobile'>
                {isIOS ? (
                  <img src={GlobeGif} className='video-globe' alt='globe' />
                ): (
                  <video src={Globe} className='video-globe' autoPlay loop muted /> 
                )}
              </div>
            </div>
          </div>
          <div className='relative mt-[-270px] helloworldbg p-2'>
            <div className='pt-32 pb-32'>
              <div className='Montserrat font-medium text-[20px] leading-[30px] text-[#AAAAAA]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </div>
              <div className='pt-4 Montserrat font-light text-[16px] leading-[24px] text-[#AAAAAA]'>
                Mauris lectus libero, luctus malesuada laoreet vitae, pulvinar gravida sapien
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default WomeGlobeSection;
