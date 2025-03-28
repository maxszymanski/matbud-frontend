import About from '../_components/_aboutus/About'
import WhyUs from '../_components/_aboutus/WhyUs'
import NumberSection from '../_components/_home/NumberSection'
import MiniHeader from '../_components/_ui/MiniHeader'
import { getAbout } from '../lib/api'

export const revalidate = 3600

export const metadata = {
    title: 'O nas',
    description:
        '"Poznaj naszą firmę budowlaną. Jesteśmy ekspertami w budowie domów, dachach i remontach. Gwarantujemy wysoką jakość i terminowość realizacji.',
}

async function AboutUs() {
    const about = await getAbout()

    return (
        <>
            <MiniHeader title="O nas" />
            <main className="flex-1">
                <About about={about.about_info} />
                <NumberSection />
                <WhyUs about={about.why_us} />
            </main>
        </>
    )
}

export default AboutUs
