// import React from 'react'

export default function Header() {
  return (
    <header className="max-md:hidden bg-black text-white text-base h-header py-4">
        <div className="max-w-7xl mx-auto max-xl:px-10 px-6 flex justify-between items-center">
            <div className="flex flex-wrap gap-3.5 ">
                <p className="flex gap-4 cursor-pointer"><img src="/header/call.svg" alt="call" /><span>+91-9050320230</span></p>
                <p className="flex gap-4 cursor-pointer"><img src="/header/email.svg" alt="email" /><span>official@graphicshaala.com</span></p>
                <p className="flex gap-4 cursor-pointer"><img src="/header/location.svg" alt="email" /><span>Panipat, Haryana, India</span></p>
                <p className="flex gap-4 cursor-pointer"><img src="/header/time.svg" alt="email" /><span>10:00 AM - 06:00 PM  </span></p>
            </div>
            <div className="flex flex-wrap gap-8">
                <img className="cursor-pointer" src="/header/behance.svg" alt="behance" width={22.4} height={14}/>
                <img className="cursor-pointer" src="/header/linkedin.svg" alt="behance" width={16} height={16}/>
                <img className="cursor-pointer" src="/header/facebook.svg" alt="behance" width={9} height={16} />
                <img className="cursor-pointer" src="/header/p.svg" alt="behance" width={12.16} height={16}/>
            </div>
        </div>
    </header>
  )
}
