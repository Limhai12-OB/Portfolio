import { FacebookIcon, LocationEdit, PhoneCall, Send } from "lucide-react";

export default function ContactMe () {
    return (
        <>
            {/* <main id="contactMe">
                <section className="max-w-7xl mx-auto mt-44 mb-10 p-6">
                    <div className="flex flex-col items-center justify-center mb-30"  >
                        <h1 className="text-4xl font-bold uppercase  mb-6">Contact Me</h1>
                        <p className="text-gray-300 text-center">If you have any questions or comments, please feel free to contact me.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        <div>
                       
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mb-5">
                                    <label htmlFor="" >First Name</label>
                                    <input className="w-full p-2 rounded-md bg-gray-700  text-white" type="text" placeholder="First Name" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="">Last Name</label>
                                    <input className="w-full p-2 rounded-md bg-gray-700 text-white" type="text" placeholder="Last Name" />
                                </div>
                                
                            </div>
                            <div className="mb-5">
                                <label htmlFor="">Email</label>
                                <input className="w-full p-2 rounded-md bg-gray-700 text-white" type="email" placeholder="Email" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="">Phone Number</label>
                                <input className="w-full p-2 rounded-md bg-gray-700 text-white" type="text" placeholder="Phone Number" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="">Message</label>
                                <textarea className="w-full p-2 rounded-md bg-gray-700 text-white" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="px-14">
                            <div className="mb-5">
                                <h2 className=" text-2xl font-bold mb-4">Chat with me</h2>
                                <p className=" text-gray-300">I'm always here to help you. If you have any questions or comments, please feel free to contact me.</p>
                            </div>
                        <div className="mb-4">
                            <div className="flex items-center gap-2">
                                <FacebookIcon size={20} />
                                <span className="underline">Facebook</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Send size={20} />
                                <span className="underline">Telegram</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-2xl font-medium mb-2">Call Us</h2>
                            <p>I am available for a call. Please feel free to contact me.</p>
                            <div className="flex items-center gap-2">
                                <PhoneCall size={20} />
                                <span className="underline">+855 70694862</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-2xl font-medium mb-2">Visit Me</h2>
                            <p>I am available for a visit. Please feel free to contact me.</p>
                            <div className="flex items-center gap-2">
                                <LocationEdit size={20} />
                                <span className="underline">Phnom Penh, Cambodia</span>
                            </div>
                        </div>
                        </div>
                        <button className="bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors duration-300 px-4 py-2 rounded-md">Send Message</button>
                    </div>
                </section>
            </main> */}
            <main id="contactMe" >
      <section className="max-w-7xl mx-auto mt-44 mb-10 p-6">
        <div className="flex flex-col items-center justify-center mb-30">
          <h1 className="text-4xl font-bold uppercase text-gray-100 mb-6">Contact Me</h1>
          <p className="text-gray-400 text-center">If you have any questions or comments, please feel free to contact me.</p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-5">
                <label htmlFor="firstName" className="text-gray-300">First Name</label>
                <input 
                  id="firstName"
                  className="w-full p-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                  type="text" 
                  placeholder="First Name" 
                />
              </div>
              <div className="mb-5">
                <label htmlFor="lastName" className="text-gray-300">Last Name</label>
                <input 
                  id="lastName"
                  className="w-full p-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                  type="text" 
                  placeholder="Last Name" 
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="text-gray-300">Email</label>
              <input 
                id="email"
                className="w-full p-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                type="email" 
                placeholder="Email" 
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone" className="text-gray-300">Phone Number</label>
              <input 
                id="phone"
                className="w-full p-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                type="text" 
                placeholder="Phone Number" 
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="text-gray-300">Message</label>
              <textarea 
                id="message"
                className="w-full p-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600" 
                rows={10} 
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <div className="px-14 text-gray-100">
            <div className="mb-5">
              <h2 className="text-2xl font-bold mb-4">Chat with me</h2>
              <p className="text-gray-400">I'm always here to help you. If you have any questions or comments, please feel free to contact me.</p>
            </div>
            <div className="mb-4 space-y-2">
              <div className="flex items-center gap-2">
                <FacebookIcon size={20} className="text-blue-400" />
                <a href="https://www.facebook.com/share/1BondqMGmN/?mibextid=wwXIfr" target="_blank" className="underline text-gray-200">Facebook</a>
              </div>
              <div className="flex items-center gap-2">
                <Send size={20} className="text-blue-400" />
                <a href="https://t.me/Try_Limhai" target="_blank" className="underline text-gray-200">Telegram</a>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-medium mb-2">Call Us</h2>
              <p className="text-gray-400 mb-2">I am available for a call. Please feel free to contact me.</p>
              <div className="flex items-center gap-2">
                <PhoneCall size={20} className="text-green-400" />
                <a href="tel:+85570694862" className="underline text-gray-200">+855 70694862</a>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-medium mb-2">Visit Me</h2>
              <p className="text-gray-400 mb-2">I am available for a visit. Please feel free to contact me.</p>
              <div className="flex items-center gap-2">
                <LocationEdit size={20} className="text-red-400" />
                <span className="underline text-gray-200">Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="bg-purple-600 text-white cursor-pointer hover:bg-purple-700 transition-colors duration-300 px-6 py-3 rounded-md">
            Send Message
          </button>
        </div>
      </section>
    </main>
        </>
    )
}