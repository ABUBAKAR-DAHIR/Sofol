import Input from "../Input";

export default function Contact() {
  return (
    <section>
        <div className="max-w-7xl flex flex-col items-center justify-center mx-auto pt-4">
            <div className="mx-auto flex flex-col items-center justify-center">
                <p className="capitalize text-sofolRed">projects</p>
                <p className="font-semibold text-2xl text-sofolBlack max-md:text-center max-md:px-2">let us help you find the perfect solution</p>
                <div className="flex gap-2 my-2 mx-auto">
                    <div className="h-[3.5px] w-25 bg-sofolRed rounded-full" />
                    <div className="h-[3.5px] w-25 bg-sofolRed rounded-full" />
                </div>
            </div>

            <div className="shadow-lg p-8 my-4 w-200 rounded-xl max-[820px]:w-150 max-sm:w-80 max-sm:p-3">
                <p className="uppercase font-semibold text-gray-700 my-2 max-sm:text-center">leave us a message</p>
                <div className="flex gap-4 justify-between w-full max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center">
                    <form action="" className="flex flex-col mr-4 w-9/20 max-sm:w-full">
                        <Input type="text" placeholder="First name and last name" className="mb-2.5"/>
                        <Input type="email" placeholder="Email" className="mb-2.5"/>
                        <textarea name="" id="" cols={4} rows={10} placeholder="your message" className="resize-none px-2 py-2.5 border-2 border-black rounded-sm my-1 text-sm text-gray-800 outline-none"></textarea>
                        <button type="submit" className="bg-sofolRed text-white capitalize cursor-pointer hover:bg-sofolRed/70 w-full rounded-xl py-3 mt-4">submit</button>
                    </form>

                    <div className="w-9/20 max-sm:w-full">
                        <p className="flex gap-2 my-2 text-gray-700 cursor-pointer text-sm"><img src="/public/contact/phone.svg" alt="phone" width={15} height={15} /> +91-311-1234567</p>
                        <p className="flex gap-2 my-2 text-gray-700 cursor-pointer text-sm"><img src="/public/contact/email.svg" alt="email" width={15} height={15} /> myportfolio@gmail.com</p>
                        <p className="flex gap-2 my-2 text-gray-700 cursor-pointer text-sm"><img src="/public/contact/location.svg" alt="location" width={15} height={15} /> Address, Haryana, India</p>

                        <img src="/contact/map.png" alt="map" width={270} height={180} className="mt-4" />
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
