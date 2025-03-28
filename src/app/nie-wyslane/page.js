import EmailStatusMessage from '../_components/_contact/EmailStatusMessage'

export const metadata = {
    title: 'Status',
    description:
        'Wystąpił problem z wysłaniem wiadomości. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.',
}

function UnSended() {
    return (
        <main className="relative container mx-auto px-6 py-20 lg:py-32">
            <EmailStatusMessage success={false} />
        </main>
    )
}

export default UnSended
