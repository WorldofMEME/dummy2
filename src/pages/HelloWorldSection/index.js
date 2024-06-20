import React from 'react'

function HelloWorldSection() {
  return (
    <section className='absolute'>
        <div className="bg-[#D9E0EC33] relative mt-[-72px]">
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
    </section>
  )
}

export default HelloWorldSection
