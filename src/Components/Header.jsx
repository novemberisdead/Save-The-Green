import React from 'react'

function Header({ heroRef, endangeredRef, mapsRef, awarenessRef}) {
  const handleScroll = (sectionRef) => {
   
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        
      });
    }
  };
    return (
        <header className="bg-white/0.5 backdrop-blur-[2px] shadow-md fixed top-0 w-full z-20 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-[#228B22] font-poppins">
            <a href="#home" onClick={(e) =>{e.preventDefault(), handleScroll(heroRef)}}>The Last Leaves</a>
          </div>
          <nav className="flex space-x-8 text-lg font-semibold">
            <button
              onClick={(e) =>{e.preventDefault(), handleScroll(endangeredRef)}}
              className="text-[#228B22] hover:text-[#6B8E23] transition duration-300 font-montserrat "
            >
              Endangered Trees
            </button>
            <button
              onClick={() => handleScroll(mapsRef)}
              className="text-[#228B22] hover:text-[#6B8E23] transition duration-300 font-montserrat"
            >
              Maps
            </button>
            <button
              onClick={() => handleScroll(awarenessRef)}
              className="text-[#228B22] hover:text-[#6B8E23] transition duration-300 font-montserrat"
            >
              Awareness
            </button>
          </nav>
        </div>
      </header>
    )
}

export default Header
