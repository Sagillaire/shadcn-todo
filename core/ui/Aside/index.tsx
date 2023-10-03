import { ModeToggle } from '@/components/mode-toggle/mode-toggle'
import { CalendarIcon, TargetIcon, FileTextIcon, AvatarIcon } from "@radix-ui/react-icons"

const asideModules = [
    { label: 'Inicio', icon: <TargetIcon /> },
    { label: 'Next 7 Days', icon: <CalendarIcon /> },
    { label: 'All My Task', icon: <FileTextIcon /> }
]

export const Aside = () => {
    return (
        <aside className='w-80 h-screen py-2 flex flex-col'>
            <div className='flex px-2 items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <AvatarIcon width={35} height={35} />
                    <div className='flex flex-col'>
                        <span className='text-xs font-semibold'>Sagillaire</span>
                        <span className='text-xs text-zinc-400'>Free Plan</span>
                    </div>
                </div>
                <ModeToggle />
            </div>

            <div className='flex flex-col'>
                {asideModules.map((module, iModule) => (
                    <span className='w-auto flex items-center gap-1 px-2 mb-3 first-of-type:mt-3 cursor-pointer' key={iModule}>
                        {module.icon}{module.label}
                    </span>
                ))}
            </div>

        </aside>
    )
}
