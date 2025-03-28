import { Suspense } from 'react'
import Footer from './_components/_footer/Footer'
import Header from './_components/_home/Header'
import JoinUsSection from './_components/_home/JoinUsSection'
import LearnInfoSection from './_components/_home/LearnInfoSection'
import LearnSkill from './_components/_home/LearnSkill'
import NumberSection from './_components/_home/NumberSection'
import PortfolioSection from './_components/_home/PortfolioSection'
import ServicesSection from './_components/_home/ServicesSection'

export const revalidate = 3600

async function Home() {
    return (
        <>
            <Header />
            <main className="overflow-hidden pt-14 lg:pb-4">
                <LearnInfoSection />
                <LearnSkill />
                <ServicesSection />
                <NumberSection />
                <PortfolioSection />
                <JoinUsSection />
            </main>
        </>
    )
}

export default Home
