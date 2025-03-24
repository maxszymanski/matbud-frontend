import ServicesCard from '../_ui/ServicesCard'
import { FaRegListAlt } from 'react-icons/fa'
import { FaHandshakeSimple } from 'react-icons/fa6'
import { MdVerifiedUser } from 'react-icons/md'

const services = [
    {
        title: 'Misja i wartości',
        service_list: [
            'Solidność i terminowość',
            'Wysoka jakość materiałów i wykonania',
            'Indywidualne podejście do każdego projektu',
            'Dbałość o detale i estetykę',
        ],
    },
    {
        title: 'Jak działamy',
        service_list: [
            'Konsultacja',
            'Projekt i kosztorys',
            'Realizacja',
            'Odbiór i gwarancja',
        ],
    },
    {
        title: 'Dlaczego my?',
        service_list: [
            'Wieloletnie doświadczenie w branży',
            'Zespół wykwalifikowanych fachowców',
            'Nowoczesne technologie budowlane',
            'Konkurencyjne ceny i przejrzyste warunki współpracy',
        ],
    },
]

function WhyUs() {
    return (
        <section className="container mx-auto flex flex-wrap items-stretch justify-center gap-20 px-6 py-18 xl:justify-evenly xl:gap-2 xl:px-2 xl:pt-24 xl:pb-36">
            {services.map((item, i) => {
                const icons = [
                    {
                        icon: (
                            <FaHandshakeSimple className="mb-8 size-24 self-center" />
                        ),
                    },
                    {
                        icon: (
                            <FaRegListAlt className="mb-8 size-24 self-center" />
                        ),
                    },
                    {
                        icon: (
                            <MdVerifiedUser className="mb-8 size-24 self-center" />
                        ),
                    },
                ]

                return (
                    <ServicesCard
                        key={item.title}
                        icon={icons[i].icon}
                        title={item.title}
                        list={item.service_list}
                    />
                )
            })}
        </section>
    )
}

export default WhyUs
