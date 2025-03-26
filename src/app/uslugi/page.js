import ServicesSection from '../_components/_home/ServicesSection'
import MiniHeader from '../_components/_ui/MiniHeader'

export const metadata = {
    title: 'Usługi',
    description: 'Usługi MatBud',
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
