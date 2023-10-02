import { ModeToggle } from '@/components/mode-toggle/mode-toggle'
import React from 'react'

const Aside = () => {
    return (
        <header className='w-32 h-14 px-3 bg-slate-400'>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>ShadCN Todo APP</h3>
            <ModeToggle />
        </header>
    )
}

export default Aside
