import { Aside } from '@/core/ui'
import React, { FC, ReactNode } from 'react'

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className='flex'>
            <Aside />
            <div className='w-full p-2'>
                {children}
            </div>
        </div>
    )
}

export default MainLayout
