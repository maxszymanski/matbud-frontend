import Image from 'next/image'
import Button from '../_ui/Button'
import { getHeader } from '../../lib/api'

async function Header() {
    const { titleOne, titleTwo, titleThree, description } = await getHeader()

    return (
        <header className="bg-gradient-primary pt-16 md:pt-0">
            <div className="container mx-auto flex h-full flex-col items-center justify-between px-4 text-center md:flex-row md:items-stretch lg:px-6 xl:px-8">
                <div className="text-second flex h-full w-full flex-col justify-center gap-4 py-10 text-center md:w-1/2 md:items-start md:py-16 md:text-left lg:py-28 xl:py-40 2xl:gap-8 2xl:py-48 2xl:pl-4">
                    <h1 className="w-full text-2xl leading-9 font-extrabold tracking-wide lg:text-3xl lg:leading-[50px] xl:text-4xl xl:leading-[65px] 2xl:text-[44px] 2xl:leading-[80px]">
                        {titleOne && titleOne} <br /> {titleTwo && titleTwo}{' '}
                        <br /> {titleThree && titleThree}
                    </h1>
                    {description && (
                        <p className="text-sm xl:text-base">{description}</p>
                    )}
                    <Button
                        href="/uslugi"
                        variant="orange"
                        restClass=" mt-8 self-center md:self-start min-w-[160px] py-4 px-10 text-lg xl:text-lg xl:py-5 xl:px-12 md:text-lg lg:text-lg"
                    >
                        Nasze Usługi
                    </Button>
                </div>
                <div className="flex-1 py-10 md:self-center md:py-0">
                    <Image
                        width={732}
                        height={732}
                        src="/home-hero.webp"
                        alt="dom"
                        priority
                        className="h-auto w-80 md:h-full md:w-full"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header
