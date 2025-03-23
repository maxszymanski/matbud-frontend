import Image from 'next/image'
import Link from 'next/link'

function Logo({ isMobile = false }) {
    return (
        <Link
            href="/"
            className={`text-primary3 hover:text-primary3/80 p-1.5 text-2xl font-bold transition-colors duration-300 ${isMobile ? 'block' : 'hidden md:block'}`}
        >
            MatBud
            {/* <Image
                alt="logo"
                src="/logo-sm.png"
                height={35}
                width={190}
                className="block w-[120px] lg:w-[190px]"
                priority
            /> */}
        </Link>
    )
}

export default Logo
