import React, { Fragment } from "react";
import '../assets/styles/Navbar.css';
import { Disclosure } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane, FaSearch, FaInstagram } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import logo from "../assets/images/logo.svg";

const navigation = [
  { name: "Collection", href: "#", current: true },
  { name: "New Arrival", href: "#", current: false },
  { name: "Shop", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white-800 border-b border-gray-100 block">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 2xl:h-24">
              <div className="hidden absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  className={`inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-transform duration-300 ease-in-out ${
                    open ? "menu-open" : ""
                  }`}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className={`block h-6 w-6 transform transition-transform duration-300 ${
                        open ? "rotate-90" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                  ) : (
                    <CgMenuRightAlt
                      className={`block h-6 w-6 transform transition-transform duration-300 ${
                        open ? "rotate-90" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center ml-2 sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-10 w-10"
                    src={logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-12 w-12 2xl:h-20 2xl:w-20"
                    src={logo}
                    alt="Workflow"
                    width={30}
                  />
                </div>
              </div>
              <div className="hidden sm:flex absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="hidden button"
                  className="hidden p-2 me-3 text-sm font-medium text-black focus:outline-none bg-white hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  <a href='https://x.com/WOMEonSOL' target='_blank'>
                    <FaXTwitter size={20} />
                  </a>
                </button>
                <button
                  type="button"
                  className="hidden p-2 me-3 text-sm font-medium text-black focus:outline-none bg-white hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  <a href="#">
                    <FaInstagram size={20} />
                  </a>
                </button>
                <button
                  type="button"
                  className="hidden p-2 me-3 text-sm font-medium text-black focus:outline-none bg-white hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  <a href="#">
                    <FaTelegramPlane size={20} />
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
            </div>
          </div>

          <Disclosure.Panel
            className={`sm:hidden absolute z-10 top-16 inset-x-0 bg-white border-t-[1px] border-t-slate-400 shadow-md transform ${
              open ? "animate-slide-in" : "animate-slide-out"
            }`}
          >
            <div className="px-8 pt-6 pb-3 space-y-1 flex flex-col">
              {/* {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))} */}
              <div className="flex justify-start items-end mt-4">
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
                  <a href="https://www.instagram.com/wome.sol?igsh=d2VsM3Z1MGg1dnlo" target='_blank'>
                    <FaInstagram size={25} />
                  </a>
                </button>
                <button
                  type="button"
                  className="p-2 me-3 text-sm font-medium text-black focus:outline-none bg-white hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  <a href="#" target='_blank'>
                    <FaTelegramPlane size={25} />
                  </a>
                </button>
                <button
                  type="button"
                  className="hidden flex me-3 w-72 items-center justify-between py-2.5 px-5 text-sm font-medium text-gray-300 focus:outline-none bg-white rounded-full border border-gray-300 hover:bg-white hover:text-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  <span>Search</span>
                  <FaSearch size={40} className="ml-2" />
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
