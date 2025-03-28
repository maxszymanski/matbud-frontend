import ContactForm from '../../_components/_contact/ContactForm'
import ServicesSection from '../../_components/_home/ServicesSection'
import ServicesInfo from '../../_components/_services/ServicesInfo'
import MiniHeader from '../../_components/_ui/MiniHeader'
import { getServices } from '../../lib/api'

export const revalidate = 3600

export async function generateMetadata({ params }) {
    const { title } = await await getServices(params.service)
    return {
        title: `${title}`,
        description: `Zapoznaj się ze szczegółami naszej usługi - ${title}`,
    }
}

export async function generateStaticParams() {
    const services = await getServices()

    const slugs = services.map((service) => ({
        serviceSlug: service.slug,
    }))

    return slugs
}

async function SingleService({ params }) {
    const { service } = await params
    const singleService = await getServices(service)
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
                <ServicesSection />
            </main>
        </>
    )
}

export default SingleService
