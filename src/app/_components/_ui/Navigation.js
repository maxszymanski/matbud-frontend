'use client'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import MobileNav from './MobileNav'
import NavigationList from './NavigationList'

function Navigation({ data }) {
    const pathname = usePathname()

    return (
        <>
            <nav
                className={`from-primary to-primary2 fixed z-40 flex w-full flex-col gap-2 bg-linear-to-r md:relative md:flex-row md:items-center md:justify-between md:px-6 md:py-6 xl:container xl:mx-auto`}
            >
                <MobileNav pathname={pathname} />
                <Logo />
                <NavigationList data={data} />
            </nav>
        </>
    )
}

export default Navigation
