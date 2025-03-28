import EmailStatusMessage from '../_components/_contact/EmailStatusMessage'

function UnSended() {
    return (
        <main className="relative container mx-auto px-6 py-20 lg:py-32">
            <EmailStatusMessage success={false} />
        </main>
    )
}

export default UnSended
