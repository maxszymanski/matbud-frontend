'use client'

import { useEffect } from 'react'

import { IoMenu, IoClose } from 'react-icons/io5'
import Button from './Button'
import Logo from './Logo'
import useAppStore from '../../stores/store'

function MobileNav({ pathname }) {
    const { isNavOpen, toggleNavigation, closeNavigation } = useAppStore()

    useEffect(() => {
        closeNavigation()
    }, [pathname, closeNavigation])

    useEffect(() => {
        if (isNavOpen) {
            document.body.style.overflowY = 'hidden'
            document.body.style.height = '100vh'
        } else {
            document.body.style.overflowY = 'visible'
            document.body.style.height = '100%'
        }
    })

    return (
        <div
            className={`top-0 left-0 flex w-full items-center justify-between bg-transparent px-4 py-1 md:hidden`}
        >
            <Logo isMobile />
            <Button
                restClass="relative z-50"
                variant="transparent"
                onClick={() => {
                    toggleNavigation()
                }}
            >
                {isNavOpen ? (
                    <IoClose
                        className={`size-12 bg-transparent font-semibold text-white`}
                    />
                ) : (
                    <IoMenu
                        className={`size-12 bg-transparent font-semibold text-white`}
                    />
                )}
            </Button>
        </div>
    )
}

export default MobileNav
