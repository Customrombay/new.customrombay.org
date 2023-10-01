"use client"
import Image from 'next/image'
import React from 'react'
// import { motion, useAnimationControls } from "framer-motion"
import Link from 'next/link'
import DeviceView from './components/device_view'
import { InputText } from 'primereact/inputtext';

export default function Home() {
  return (
    <main className="pt-24 pb-24">
      <div>
        <article className="mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold lg:text-5xl mx-5 text-center">Welcome to Customrombay.org!
          </h1>
          <p className="text-xl lg:text-2xl mt-8 mx-5 text-center">A place to find all custom ROMs available for your device.</p>
          <h2 className="text-xl font-bold lg:text-3xl mx-5 text-center">We already support 703 devices!
          </h2>
        </article>
        <div className="bg-android">
          <h2 className="text-3xl font-bold lg:text-5xl mx-5 text-center py-6 text-gray-900">Find your device</h2>
          <div className='grid justify-center pb-6'>
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText placeholder="Search" />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold lg:text-5xl mx-5 text-center">Popular devices</h2>
        </div>
        <div className="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
          <DeviceView deviceName="xiaomi-beryllium"></DeviceView>
          <DeviceView deviceName="xiaomi-apollo"></DeviceView>
          <DeviceView deviceName="xiaomi-alioth"></DeviceView>
        </div>
      </div>
    </main>
  )
}
