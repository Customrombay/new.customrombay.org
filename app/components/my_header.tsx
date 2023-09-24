"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar'

export default function MyHeader() {
    const [visible, setVisible] = React.useState(false);

    return (
        <header className="container flex justify-between md:justify-between gap-4 flex-wrap px-6 pt-3 mx-auto relative">
            <a href="/" className="font-extrabold text-2xl"><img className="h-8 max-w-full" alt="Customrombay.org" src="/banner.webp"/></a>
            <div>
                <div className="card flex justify-content-center md:hidden">
                    <Button icon="pi pi-bars" onClick={() => setVisible(true)}/>
                </div>
                <div className='flex hidden md:block'>
                    <Link className='px-4 font-bold' href="/gallery">Device gallery</Link>
                    <Link className='px-4 font-bold' href="https://github.com/PiotrZPL">GitHub</Link>
                    <Link className='px-4 font-bold' href="https://sourceforge.net/projects/piotrzplbuilds/">SourceForge</Link>
                    <Link className='px-4 font-bold' href="https://t.me/piotrzplbuilds">Telegram</Link>
                </div>
            </div>
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2 className='font-extrabold text-2xl'>PiotrZPLBuilds</h2>
                <div className='flex flex-col pt-3'>
                    <Link className='android-highlighted font-bold text-xl' href="https://github.com/PiotrZPL">GitHub</Link>
                    <Link className='android-highlighted font-bold text-xl pt-2' href="https://sourceforge.net/projects/piotrzplbuilds/">SourceForge</Link>
                    <Link className='android-highlighted font-bold text-xl pt-2' href="https://t.me/piotrzplbuilds">Telegram</Link>
                </div>
            </Sidebar>
            
      </header>
    )
}
