import React from 'react';
import NavBar from './navBar';

const ContactUs = () => {
  return (
    <>
    <NavBar />
    <div className="bg-sky-50 min-h-screen py-16 px-6 font-sans">
      
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
            Get In Touch
          </h2>
          <h1 className="text-5xl font-extrabold text-slate-900">
            Lets Talk <span className="text-blue-500">Cars.</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-lg">
            Have a question about a listing or want to sell your vehicle? Our team of specialists is ready to help you gear up.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-blue-100 flex items-start space-x-4 transition-hover hover:shadow-md">
              <div className="bg-sky-100 p-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Call Us</h3>
                <p className="text-slate-500 text-sm mt-1">Mon-Fri 8am to 6pm</p>
                <p className="text-blue-600 font-semibold mt-2">+995 599-44-89-69</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-blue-100 flex items-start space-x-4 transition-hover hover:shadow-md">
              <div className="bg-sky-100 p-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email Us</h3>
                <p className="text-slate-500 text-sm mt-1">We reply within 2 hours</p>
                <p className="text-blue-600 font-semibold mt-2">support@apexdrive.com</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-blue-100 flex items-start space-x-4 transition-hover hover:shadow-md">
              <div className="bg-sky-100 p-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Visit Us</h3>
                <p className="text-slate-500 text-sm mt-1">Tbilisi, Georgia</p>
                <p className="text-blue-600 font-semibold mt-2 underline cursor-pointer">View on Maps</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-blue-900/10 border border-white">
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Your name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all text-slate-900"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all text-slate-900"
                />
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700 ml-1">What are you looking for?</label>
                <select className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all text-slate-900 appearance-none">
                  <option>Buying a vehicle</option>
                  <option>Selling / Trade-in</option>
                  <option>Maintenance equest</option>
                  <option>Other inquiry</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Write your message here..." 
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all text-slate-900"
                ></textarea>
              </div>
              <button className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center justify-center space-x-3">
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;