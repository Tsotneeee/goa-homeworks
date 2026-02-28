import React from 'react'
import NavBar from './navBar'
const AboutUs = () => {
    return(
        <div className="bg-slate-50 min-h-screen">
        <NavBar />
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic">
            About <span className="text-sky-600">ApexDrive</span>
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Redefining the journey from the showroom floor to your front door.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Engineering the Future of <br />
              <span className="text-sky-600 underline decoration-2 underline-offset-8">Car Buying.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At ApexDrive, we believe that buying a car should be as exhilarating as driving one. Founded by a team of petrolheads and tech innovators, we’ve stripped away the traditional friction of dealerships to create a seamless, transparent marketplace.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you are hunting for a vintage classic, a rugged off-roader, or a cutting-edge EV, we provide the tools, data, and white-glove service to get you behind the wheel faster.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 flex flex-col items-center text-center">
              <span className="text-4xl font-black text-slate-900">500+</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest mt-2">Verified Sellers</span>
            </div>
            <div className="bg-sky-600 p-8 rounded-2xl shadow-xl shadow-sky-200 flex flex-col items-center text-center text-white">
              <span className="text-4xl font-black">12k+</span>
              <span className="text-sm text-red-100 uppercase tracking-widest mt-2">Cars Sold</span>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl shadow-xl shadow-slate-400 flex flex-col items-center text-center text-white">
              <span className="text-4xl font-black">24h</span>
              <span className="text-sm text-slate-400 uppercase tracking-widest mt-2">Fast Delivery</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 flex flex-col items-center text-center">
              <span className="text-4xl font-black text-slate-900">100%</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest mt-2">Inspection Guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default AboutUs