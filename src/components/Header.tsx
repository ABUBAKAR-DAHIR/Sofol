// import React from 'react'

export default function Header() {
  return (
    <header className="max-md:hidden bg-black text-white text-base h-header py-4">
        <div className="max-w-7xl mx-auto max-xl:px-10 px-6 flex justify-between items-center">
            <div className="flex flex-wrap gap-3.5 ">
                <a href="tel:+919050320230" className="flex gap-4 cursor-pointer hover:text-gray-300 hover:scale-95 duration-300"><img src="/header/call.svg" alt="call" /><span>+91-9050320230</span></a>
                <a href="mailto:official@graphicshaala.com" className="flex gap-4 cursor-pointer hover:text-gray-300 hover:scale-95 duration-300 "><img src="/header/email.svg" alt="email" /><span>official@graphicshaala.com</span></a>
                <a href="https://www.google.com/maps/search/?api=1&query=Panipat,Haryana,India" target="_blank" rel="noopener noreferrer" className="flex gap-4 cursor-pointer hover:text-gray-300 hover:scale-95 duration-300"><img src="/header/location.svg" alt="email" /><span>Panipat, Haryana, India</span></a>
                <a href="tel:" className="flex gap-4 cursor-pointer hover:text-gray-300 hover:scale-95 duration-300"><img src="/header/time.svg" alt="email" /><span>10:00 AM - 06:00 PM  </span></a>
            </div>
            <div className="flex flex-wrap gap-8">
                <img className="cursor-pointer hover:text-gray-300 hover:scale-95 duration-300" src="/header/behance.svg" alt="behance" width={22.4} height={14}/>
                <img className="cursor-pointer hover:text-gray-300 hover:scale-95 duration-300" src="/header/linkedin.svg" alt="behance" width={16} height={16}/>
                <img className="cursor-pointer hover:text-gray-300 hover:scale-95 duration-300" src="/header/facebook.svg" alt="behance" width={9} height={16} />
                <img className="cursor-pointer hover:text-gray-300 hover:scale-95 duration-300" src="/header/p.svg" alt="behance" width={12.16} height={16}/>
            </div>
        </div>
    </header>
  )
}
