import ContactForm from '../../_components/_contact/ContactForm'
import WhyUs from '../../_components/_aboutus/WhyUs'
import ServicesInfo from '../../_components/_services/ServicesInfo'
import MiniHeader from '../../_components/_ui/MiniHeader'

export const metadata = {
    title: 'Budowa i konstrukcje',
    description: 'Budowa i konstrukcje MatBud',
}

function SingleService() {
    return (
        <>
            <MiniHeader title="Budowa i konstrukcje" />
            <main className="flex-1">
                <section className="relative container mx-auto flex flex-col px-6 py-16 lg:py-20 xl:flex-row xl:items-start xl:justify-evenly xl:gap-8 2xl:gap-16">
                    <div>
                        <ServicesInfo />
                        <ServicesInfo />
                        <ServicesInfo />
                        <ServicesInfo />
                    </div>
                    <div className="w-full xl:sticky xl:top-4 xl:min-w-96 2xl:w-md">
                        <ContactForm />
                    </div>
                </section>
            </main>
        </>
    )
}

export default SingleService
