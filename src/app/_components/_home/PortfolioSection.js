import { getImages } from '../../lib/api'
import ImageSlider from '../_ui/ImageSlider'

async function PortfolioSection() {
    const images = await getImages()

    return (
        <section className="container mx-auto flex items-center justify-center px-6 py-18 xl:py-24">
            <ImageSlider images={images} />
        </section>
    )
}

export default PortfolioSection
