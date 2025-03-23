import { getServices } from '../../lib/api'
import ServicesCard from '../_ui/ServicesCard'
import { FaHammer, FaHome, FaRegBuilding } from 'react-icons/fa'

async function ServicesSection() {
    const services = await getServices()

    return (
        <section className="container mx-auto flex flex-wrap items-stretch justify-center gap-20 px-6 py-18 xl:justify-evenly xl:gap-2 xl:px-2 xl:pt-24 xl:pb-36">
            {services.map((item, i) => {
                const icons = [
                    {
                        icon: (
                            <FaRegBuilding className="mb-8 size-24 self-center" />
                        ),
                    },
                    {
                        icon: <FaHammer className="mb-8 size-24 self-center" />,
                    },
                    {
                        icon: <FaHome className="mb-8 size-24 self-center" />,
                    },
                ]

                return (
                    <ServicesCard
                        key={item.title}
                        icon={icons[i].icon}
                        slug={item.slug}
                        title={item.title}
                        list={item.service_list}
                    />
                )
            })}
        </section>
    )
}

export default ServicesSection
