import ContactForm from '../_components/_contact/ContactForm'
import MiniHeader from '../_components/_ui/MiniHeader'

function Contact() {
    return (
        <>
            <MiniHeader title="Kontakt" />
            <main className="flex-1">
                <ContactForm />
            </main>
        </>
    )
}

export default Contact
