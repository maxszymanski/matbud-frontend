import ServicesSection from '../_components/_home/ServicesSection'
import MiniHeader from '../_components/_ui/MiniHeader'

export const revalidate = 3600

export const metadata = {
    title: 'Usługi',
    description:
        'Oferujemy kompleksowe usługi budowlane: budowa domów, dachów, fundamentów oraz inne prace budowlane. Sprawdź naszą ofertę i wybierz odpowiednią usługę.',
}

function ServicesPage() {
    return (
        <>
            <MiniHeader title="Usługi" />
            <main className="flex-1">
                <ServicesSection />
            </main>
        </>
    )
}

export default ServicesPage
