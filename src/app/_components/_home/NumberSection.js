import LearnInfo from './LearnInfo'
import { FiBriefcase, FiCheckCircle, FiHome, FiLayers } from 'react-icons/fi'
import { getNumbers } from '../../lib/api'

async function NumberSection() {
    const data = await getNumbers()

    return (
        <section className="bg-gradient-primary px-6 py-16 xl:py-20">
            <div className="mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-20 lg:justify-between lg:gap-x-2 xl:container xl:gap-x-6">
                {data.map((info, i) => {
                    const icons = [
                        {
                            icon: (
                                <FiBriefcase className="text-second/90 absolute -right-7 bottom-2 size-20" />
                            ),
                        },
                        {
                            icon: (
                                <FiLayers className="text-second/90 absolute -right-7 bottom-2 size-20" />
                            ),
                        },
                        {
                            icon: (
                                <FiCheckCircle className="text-second/90 absolute -right-7 bottom-2 size-20" />
                            ),
                        },
                        {
                            icon: (
                                <FiHome className="text-second/90 absolute -right-7 bottom-2 size-20" />
                            ),
                        },
                    ]
                    return (
                        <LearnInfo
                            variant="light"
                            icon={icons[i].icon}
                            title={info.title}
                            description={info.description}
                            key={info.title}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default NumberSection
