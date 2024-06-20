import React from 'react'
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer className='text-center relative bottom-0 w-full'>
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
      </div>
    </footer>
  )
}

export default Footer;