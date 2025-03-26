import About from '../_components/_aboutus/About'
import WhyUs from '../_components/_aboutus/WhyUs'
import NumberSection from '../_components/_home/NumberSection'
import MiniHeader from '../_components/_ui/MiniHeader'

export const metadata = {
    title: 'O nas',
    description: 'O nas MatBud',
}

function AboutUs() {
    return (
        <>
            <MiniHeader title="O nas" />
            <main className="flex-1">
                <About />
                <WhyUs />
                <NumberSection />
            </main>
        </>
    )
}

export default AboutUs
