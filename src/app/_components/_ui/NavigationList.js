'use client'

import NavigationLink from './NavigationLink'
import Button from './Button'
import useAppStore from '../../stores/store'
import { usePathname } from 'next/navigation'

function NavigationList({ data }) {
    const { isNavOpen } = useAppStore()
    const pathname = usePathname()

    // const phoneLink =
    //     data.contact_info.phone.replace(/[\s()\-]/g, '')
    const phoneLink = '12345678'

    return (
        <div
            className={`${
                isNavOpen
                    ? 'translate-x-0'
                    : 'translate-x-full md:translate-x-0'
            } from-primary to-primary2 absolute top-0 right-0 z-40 flex h-screen w-full flex-col items-center justify-evenly gap-12 overflow-y-auto bg-linear-to-r py-12 transition-transform duration-500 md:relative md:h-full md:flex-row md:justify-end md:overflow-y-hidden md:bg-transparent md:bg-none md:p-0 xl:gap-20 2xl:gap-24`}
        >
            <ul className="flex flex-col gap-4 pt-4 md:flex-row md:items-center md:gap-3 md:pt-0 lg:gap-6 xl:gap-10">
                <NavigationLink
                    restClass="md:hidden lg:block"
                    href="/"
                    isActive={pathname === '/'}
                >
                    Strona główna
                </NavigationLink>
                <NavigationLink
                    href="/realizacje"
                    isActive={pathname === '/realizacje'}
                >
                    Realizacje
                </NavigationLink>

                <NavigationLink
                    href="/uslugi"
                    isActive={pathname === '/uslugi'}
                >
                    Usługi
                </NavigationLink>
                <NavigationLink href="/o-nas" isActive={pathname === '/o-nas'}>
                    O nas
                </NavigationLink>
                <NavigationLink
                    href="/kontakt"
                    isActive={pathname === '/kontakt'}
                >
                    Kontakt
                </NavigationLink>
            </ul>
            <div className="flex flex-col gap-5 md:flex-row lg:gap-4 xl:gap-6">
                <Button
                    variant="orange"
                    href={`tel:${phoneLink}`}
                    restClass=" !px-5 !py-2.5 !font-normal !text-sm !md:text-xs !lg:text-sm "
                >
                    Zadzwoń do nas!
                </Button>
            </div>
        </div>
    )
}

export default NavigationList
