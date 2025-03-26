import ContactForm from '../../_components/_contact/ContactForm'
import ServicesInfo from '../../_components/_services/ServicesInfo'
import MiniHeader from '../../_components/_ui/MiniHeader'
import { getServices } from '../../lib/api'

export const metadata = {
    title: 'Budowa i konstrukcje',
    description: 'Budowa i konstrukcje MatBud',
}

async function SingleService({ params }) {
    const { service } = await params
    const services = await getServices()
    const singleService = services.filter((item) => item.slug === service)[0]
    const serviceList = singleService.service_list.service_card_item

    return (
        <>
            <MiniHeader title={`${singleService.title}`} />
            <main className="flex-1">
                <section className="relative container mx-auto flex flex-col px-6 py-16 lg:py-20 xl:flex-row xl:items-start xl:justify-evenly xl:gap-8 2xl:gap-24">
                    <div>
                        {serviceList.length > 0 &&
                            serviceList.map((item) => (
                                <ServicesInfo
                                    title={item.title}
                                    description={item.description}
                                    key={item.title}
                                />
                            ))}
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
