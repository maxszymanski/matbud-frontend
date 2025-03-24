import Link from 'next/link'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function ContactInfo() {
    return (
        <div className="text-second w-full pb-12 md:pt-6 md:pb-0 lg:w-1/2">
            <div className="text-second mx-auto w-full max-w-sm text-center text-sm lg:max-w-lg lg:text-base xl:max-w-[450px]">
                <h3 className="mb-5 text-2xl font-medium lg:text-4xl lg:leading-[140%]">
                    Masz pytania? <br /> Skontaktuj się z nami!
                </h3>
                <p className="mb-1 leading-[170%] lg:mb-4">
                    Chętnie odpowiemy na Twoje pytania i pomożemy w realizacji
                    Twojego projektu.
                </p>
                <p className="leading-[170%]">
                    Wypełnij formularz kontaktowy, zadzwoń lub napisz do nas –
                    jesteśmy do Twojej dyspozycji!
                </p>
            </div>
            <div className="flex flex-col items-center gap-2.5 pt-6">
                <Link
                    className="text-second hover:text-primary3 flex items-center gap-2 p-1.5 transition-colors"
                    href="mailto:kontakt@matbud.pl"
                >
                    <MdEmail className="text-primary3 size-5" />{' '}
                    kontakt@matbud.pl
                </Link>
                <Link
                    className="text-second hover:text-primary3 flex items-center gap-2 p-1.5 transition-colors"
                    href="tel:888888888"
                >
                    <FaPhoneAlt className="text-primary3 size-5" /> +48 888 888
                    888
                </Link>
            </div>
        </div>
    )
}

export default ContactInfo
