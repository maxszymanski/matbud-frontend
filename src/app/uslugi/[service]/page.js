import WhyUs from '../../_components/_aboutus/WhyUs'
import MiniHeader from '../../_components/_ui/MiniHeader'

export const metadata = {
    title: 'Budowa domu',
    description: 'Budowa domu MatBud',
}

function SingleService() {
    return (
        <>
            <MiniHeader title="Budowa domu" />
            <main className="flex-1">
                <WhyUs />
            </main>
        </>
    )
}

export default SingleService
