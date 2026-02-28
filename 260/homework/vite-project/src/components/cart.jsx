import React from 'react'
import NavBar from './navBar'
import axios from 'axios'

function Cart() {
  return (
  <>
    <NavBar />
    <div className="bg-sky-50 min-h-screen py-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight text-center mb-12">
              Your <span className="text-blue-500">Garage</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Main Cart Items Area - THIS IS WHERE YOU WILL ADD YOUR CARDS */}
          <div className="lg:col-span-2 space-y-6">

            {/* Simple Example of a Card Structure (for your reference) */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-100 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-full sm:w-48 h-32 bg-sky-100 rounded-2xl overflow-hidden">
                {/* Your Car Image would go here */}
                <div className="w-full h-full flex items-center justify-center text-blue-300 font-bold">CAR IMAGE</div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900 leading-tight">2024 Apex Turbo S</h3>
                <p className="text-blue-600 font-medium">$145,000</p>
              </div>
              <button className="p-3 text-slate-400 hover:text-red-500 transition-colors bg-slate-50 rounded-xl hover:bg-red-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>

          </div>

          {/* Checkout Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-blue-900/5 border border-white sticky top-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">$0.00</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping & Handling</span>
                  <span className="font-bold text-slate-900">$0.00</span>
                </div>
                <div className="flex justify-between text-xl font-black text-slate-900 pt-2">
                  <span>Total</span>
                  <span className="text-blue-600">$0.00</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-95">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Cart