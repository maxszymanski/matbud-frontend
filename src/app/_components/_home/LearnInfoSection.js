import LearnInfo from './LearnInfo'
import { FaBuilding, FaHome, FaHammer } from 'react-icons/fa'
import { getInfoSection } from '../../lib/api'

async function LearnInfoSection() {
    const data = await getInfoSection()

    return (
        <section className="container mx-auto flex flex-wrap items-center justify-center gap-20 px-6 lg:gap-10 xl:gap-36 2xl:gap-48">
            {data.map((info, i) => {
                const icons = [
                    {
                        icon: (
                            <FaBuilding className="text-second/90 absolute -right-7 bottom-2 size-20" />
                        ),
                    },
                    {
                        icon: (
                            <FaHome className="text-second/90 absolute -right-9 bottom-0 size-24" />
                        ),
                    },
                    {
                        icon: (
                            <FaHammer className="text-second/90 absolute -right-7 bottom-0 size-20" />
                        ),
                    },
                ]
                return (
                    <LearnInfo
                        variant="dark"
                        icon={icons[i].icon}
                        title={info.title}
                        description={info.description}
                        key={info.id}
                    />
                )
            })}
        </section>
    )
}

export default LearnInfoSection
