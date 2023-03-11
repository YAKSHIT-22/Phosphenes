import React from 'react'

import { HashLink } from 'react-router-hash-link';
import logo from '../assets/favicon.png'
import burger from '../assets/menu.png'
const Header = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    <header className="w-screen flex justify-center items-center max-w-[95%]">
      <nav className="px-4 py-4 w-full flex justify-between items-center">
      <HashLink
      smooth
              to="/#home"
            >
        <div className="flex items-center justify-center flex-row lg:p-2">
          <img
            src={logo}
            alt="codechef"
            className="w-auto h-11 sm:h-12 lg:h-14"

          />
        </div>
        </HashLink>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center justify-center font-black"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div className="flex items-center justify-center sm:p-1 object-scale-down">
              <img
                src={burger}
                alt="burger menu"
                className="h-8 sm:w-8 sm:h-8 w-8"
              />
            </div>
          </button>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center p-1">
          <div className="flex flex-row items-center justify-center gap-12 p-1">
            <HashLink
            smooth
              to="/#home"
            >
              <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                Home
              </div>
            </HashLink>
            <HashLink
            smooth
              to="/#overview"
              
            >
              {" "}
              <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                Overview
              </div>
            </HashLink>
            <HashLink
            smooth
              to="/#prizes"
              
            >
              <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                Prizes
              </div>
            </HashLink>
            <HashLink
            smooth
              to="/#mentors"
              
            >
              {" "}
              <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                Mentors
              </div>
            </HashLink>
            <HashLink
            smooth
              to="/#judges"
              
            >
              <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                Judges
              </div>
            </HashLink>
            <HashLink
            smooth
              to="/#team"
              
            >
              <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                Our Team
              </div>
            </HashLink>
          </div>
        </div>
      </nav>
      <div
        className={
          "navbar-menu relative z-50 lg:hidden" +
          (navbarOpen ? "flex" : " hidden")
        }
      >
         <div className="navbar-backdrop backdrop-blur-sm fixed inset-0 bg-black/40 transition duration-200 ease-in-out"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#!">
              <img src={logo} alt="happiness" className="w-auto h-12" />
            </a>
            <button
              className="navbar-close"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-start justify-center p-1">
            <div className="flex flex-col items-start justify-center gap-12 font-zilla p-1 text-grey-800">
            <HashLink
            smooth
              to="/#home"
              
            >
              <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                Home
              </div>
            </HashLink>
            <HashLink
            smooth
              to="/#overview"
              
            >
              {" "}
              <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                Overview
              </div>
            </HashLink>
            <HashLink
            smooth
              to="/#prizes"
              
            >
              <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                Prizes
              </div>
            </HashLink>
            <HashLink
            smooth
              to="/#mentors"
              
            >
              {" "}
              <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                Mentors
              </div>
            </HashLink>
            <HashLink
            smooth
              to="/#judges"
              
            >
              <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                Judges
              </div>
            </HashLink>
            <HashLink
            smooth
              to="/#team"
              
            >
              <div className="flex item-center font-black text-sm justify-center cursor-pointer">
                Our Team
              </div>
            </HashLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </>
  )
}

export default Header
