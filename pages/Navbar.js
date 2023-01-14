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
                  {/* <Image src={masjidIcon} className="fill-current h-50 w-50 mr-2 text-gray-100" alt="Masjid Icon"/> */}
                  <span>
                  <svg className='w-10 h-10 mr-5' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_iconCarrier"> <title>mosque</title> 
            <g id="mosque"> 
            <circle cx="43.5" cy="8.5" r="1.5"></circle> 
            <circle cx="47" cy="16" r="1"></circle> 
            <line x1="54" y1="8.463" x2="54" y2="9.878" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="54" y1="14.122" x2="54" y2="15.537" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="50.463" y1="12" x2="51.878" y2="12" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="56.122" y1="12" x2="57.537" y2="12" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <path d="M55.689,39.588A13.8,13.8,0,0,0,57,33.636c0-6.326-9-11.454-9-11.454a24.758,24.758,0,0,0-2.146,1.425" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path> 
            <path d="M20.846,19a12.891,12.891,0,0,0,1.287-5.714C22.133,7.605,14.5,3,14.5,3S6.867,7.605,6.867,13.286A12.891,12.891,0,0,0,8.154,19Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path> 
            <path d="M44,31.533a9.9,9.9,0,0,0,2-5.9c0-6.326-14-11.454-14-11.454S18,19.31,18,25.636a9.888,9.888,0,0,0,2,5.9" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path> 
            <path d="M44.389,40H56.5A1.5,1.5,0,0,1,58,41.5h0A1.5,1.5,0,0,1,56.5,43H44.324" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path> 
            <rect x="17" y="32" width="30" height="3" rx="1.5" ry="1.5" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></rect> 
            <polyline points="29 60.554 29 43 32 40 35 43 35 60.554" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polyline> 
            <line x1="32" y1="14" x2="32" y2="10" fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="2px"></line> 
            <path d="M32.191,4.66a3,3,0,0,0,3.166,5.1" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path> 
            <path d="M19.564,44H8.5A1.5,1.5,0,0,0,7,45.5H7A1.5,1.5,0,0,0,8.5,47H19.637" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path> 
            <line x1="51" y1="43" x2="51" y2="48" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="48" y1="43" x2="48" y2="48" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="39" y1="35" x2="39" y2="50" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="25" y1="35" x2="25" y2="50" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="13" y1="47.364" x2="13" y2="52" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="16" y1="47.364" x2="16" y2="52" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="13" y1="39" x2="13" y2="43.564" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="16" y1="39" x2="16" y2="43.564" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="60" y1="61" x2="4" y2="61" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="9" y1="44" x2="9" y2="19" fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="20" y1="21" x2="20" y2="20" fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="55" y1="43" x2="55" y2="61" fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="9" y1="47" x2="9" y2="61" fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="20" y1="61" x2="20" y2="35" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="44" y1="61" x2="44" y2="35" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            </g> </g>
            </svg>
                  </span>
                  <span className="font-semibold text-xl tracking-tight">Al Faruq Islamic Centre</span>
                </a>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-2">
                <a href="#Home" className="py-5 px-3 text-white hover:text-yellow-500 hover:text-xl text-xs lg:text-sm">Home</a>
                <a href="#PrayerTimes" className="py-5 px-3 text-white hover:text-yellow-500 hover:text-xl text-xs lg:text-sm">Prayer Times</a>                
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
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </button>
            </div>
          </div>
       </div>
       {/* mobile menu */}
       <div ref={mobileMenuRef} className="mobile-menu hidden">
          <a href="#Home" className="block py-2 px-4 text-sm text-gray-100 hover:text-gray-300">Home</a>
       </div>
    </nav>

</>
    )
}