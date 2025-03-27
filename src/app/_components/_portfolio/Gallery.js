import { API_URL, getImages } from '../../lib/api'
import Image from 'next/image'

const Gallery = async () => {
    const images = await getImages()
    return (
        <section className="relative mx-auto px-6 py-16 lg:container lg:py-20">
            <div className="flex w-full flex-wrap items-center justify-evenly gap-x-2 gap-y-8 xl:justify-between 2xl:justify-evenly">
                {images.map((img, index) => (
                    <div
                        className="relative h-[400px] w-full max-w-[400px] overflow-hidden"
                        key={index}
                    >
                        <Image
                            src={`${API_URL}${img.url}`}
                            alt={`Zdjęcie ${index + 1}`}
                            fill
                            className="rounded-lg object-cover"
                            quality={70}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
