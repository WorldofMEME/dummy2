import React from 'react'
import "../../assets/styles/WomeGlobeSection.css"
import Womeglobe from "../../assets/images/wome_globe.png"

function WomeGlobeSection() {
  return (
    <section className='relative h-[100vh] flex items-center justify-center overflow-hidden bg-[#f0f0f0]'>
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden'>
            <img src={Womeglobe} className="rotating-image" alt='rotating-globe'/>
            <div className="slide-text">
                <span className="animated-text">Hello World</span>
                <span className="animated-text">Hello World</span>
                <span className="animated-text">Hello World</span>
                <span className="animated-text">Hello World</span>
                <span className="animated-text">Hello World</span>
            </div>
        </div>
    </section>
  )
}

export default WomeGlobeSection
