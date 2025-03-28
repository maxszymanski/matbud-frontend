import ContactForm from '../_components/_contact/ContactForm'
import ContactInfo from '../_components/_contact/ContactInfo'
import MiniHeader from '../_components/_ui/MiniHeader'

export const revalidate = 3600

export const metadata = {
    title: 'Kontakt',
    description:
        'Skontaktuj się z nami! Jesteśmy do dyspozycji w sprawie budowy, remontów i innych usług budowlanych. Zadzwoń lub napisz, chętnie pomożemy!',
}

function Contact() {
    return (
        <>
            <MiniHeader title="Kontakt" />
            <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-evenly px-6 py-16 md:flex-row md:gap-4 lg:gap-8 xl:py-24">
                <ContactInfo />
                <ContactForm />
            </main>
        </>
    )
}

export default Contact
