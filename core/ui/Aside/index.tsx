import { ModeToggle } from '@/components/mode-toggle/mode-toggle'
import React from 'react'

const asideModules = ['Inicio', 'Favoritos', 'Configuración']

export const Aside = () => {
    return (
        <aside className='w-80 h-screen p-2 flex flex-col bg-zinc-900'>
            <ModeToggle />

            <div className='flex flex-col cursor-pointer'>
                {asideModules.map((module, iModule) => (
                    <span className='border-b border-b-orange-50 mb-3 first-of-type:mt-3' key={iModule}>
                        {module}
                    </span>
                ))}
            </div>

        </aside>
    )
}
