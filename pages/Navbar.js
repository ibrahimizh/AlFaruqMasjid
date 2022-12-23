import Image from "next/image"
import { useRef } from "react"
import masjidIcon from '../public/icons8-mosque-64.png'


var style1={
  height:'15px'
}

var style2={
  height: '25px',
  width: '25px'
}



export default function Navbar(){
  const mobileMenuRef = useRef()

  const mobileMenuButtonClick = () => {
    mobileMenuRef.current.classList.toggle('hidden')
  }

    return(
      <>
        {/* <nav className="navBar z-30 navbar navbar-expand-lg relative flex items-center justify-between flex-wrap bg-teal-500 p-6 rounded-lg shadow-lg">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              
              <Image src={masjidIcon} className="fill-current h-8 w-8 mr-2" width="54" height="54" alt="Masjid Icon"/>
              <span className="font-semibold text-xl tracking-tight">Al Faruq Islamic Centre</span>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a href="#Home" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Home
                </a>
                <a href="#PrayerTimes" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Prayer Times
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                  Blog
                </a>
              </div>
              <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
              </div>
            </div>
          </nav> */}

    <nav className="navBar z-30 bg-teal-900 relative rounded-lg shadow-lg px-4 w-11/12 mx-auto my-5">
       <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a href="#" className="flex items-center py-4 px-2 text-gray-100">
                  <Image src={masjidIcon} className="fill-current h-50 w-50 mr-2" alt="Masjid Icon"/>
                  <span className="font-semibold text-xl tracking-tight">Al Faruq Islamic Centre</span>
                </a>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-2">
                <a href="#" className="py-5 px-3 text-white hover:text-yellow-500 hover:text-xl text-xs lg:text-sm">Home</a>
                <a href="#" className="py-5 px-3 text-white hover:text-yellow-500 hover:text-xl text-xs lg:text-sm">Prayer Times</a>                
                <a href="#" className="py-5 px-3 text-white hover:text-yellow-500 hover:text-xl text-xs lg:text-sm">Programs</a>
                <a href="#" className="py-5 px-3 text-white hover:text-yellow-500 hover:text-xl text-xs lg:text-sm">Services</a>
                <a href="#" className="py-5 px-3 text-white hover:text-yellow-500 hover:text-xl text-xs lg:text-sm">Contact</a>
              </div>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-3 px-3 bg-yellow-300 hover:bg-yellow-600 rounded-lg shadow-lg text-gray-700 hover:text-gray-900
            transition duration-300">Donate</a>
            </div>

            {/* mobile button */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={mobileMenuButtonClick}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </button>
            </div>
          </div>
       </div>
       {/* mobile menu */}
       <div ref={mobileMenuRef} className="mobile-menu hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-800">Home</a>
       </div>
    </nav>

</>
    )
}