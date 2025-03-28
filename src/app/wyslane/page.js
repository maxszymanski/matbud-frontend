import EmailStatusMessage from '../_components/_contact/EmailStatusMessage'

export const metadata = {
    title: 'Status',
    description:
        'Dziękujemy za wysłanie wiadomości. Twoje zapytanie zostało pomyślnie przesłane, a nasz zespół skontaktuje się z Tobą wkrótce',
}

function Sended() {
    return (
        <main className="relative container mx-auto px-6 py-20 lg:py-32">
            <EmailStatusMessage />
        </main>
    )
}

export default Sended
