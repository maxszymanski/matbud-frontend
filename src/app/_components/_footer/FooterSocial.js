import Image from 'next/image'
import Link from 'next/link'
import Logo from '../_ui/Logo'
import { getFooter } from '../../lib/api'

async function FooterSocial({ data }) {
    const facebookLink = data.contact_info.facebook_link

    return (
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-12">
            <div className="w-fit">
                <Logo isMobile />
            </div>
            <p className="max-w-[300px] pl-2 text-center text-sm leading-5 md:max-w-[400px] md:text-left md:text-base lg:max-w-[500px]">
                W MatBud specjalizujemy się w realizacji solidnych,
                funkcjonalnych i bezpiecznych projektów budowlanych.
            </p>
            <div className="flex gap-1 pt-2">
                <Link
                    href={facebookLink}
                    className="inline-flex p-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/icon-fb.png"
                        alt="ikona Facebook"
                        width={36}
                        height={36}
                    />
                </Link>
            </div>
        </div>
    )
}

export default FooterSocial
