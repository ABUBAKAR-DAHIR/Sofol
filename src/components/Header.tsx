// import React from 'react'

export default function Header() {
  return (
    <header className="bg-black text-white text-base h-header py-4 max-xl:hidden">
        <div className="flex mx-40 justify-between">
            <div className="flex gap-3.5 ">
                <p className="flex gap-4"><img src="/header/call.svg" alt="call" /><span>+91-9050320230</span></p>
                <p className="flex gap-4"><img src="/header/email.svg" alt="email" /><span>official@graphicshaala.com</span></p>
                <p className="flex gap-4"><img src="/header/location.svg" alt="email" /><span>Panipat, Haryana, India</span></p>
                <p className="flex gap-4"><img src="/header/time.svg" alt="email" /><span>10:00 AM - 06:00 PM  </span></p>
            </div>
            <div className="flex gap-8">
                <img src="/header/behance.svg" alt="behance" width={22.4} height={14}/>
                <img src="/header/linkedin.svg" alt="behance" width={16} height={16}/>
                <img src="/header/facebook.svg" alt="behance" width={9} height={16} />
                <img src="/header/p.svg" alt="behance" width={12.16} height={16}/>
            </div>
        </div>
    </header>
  )
}
