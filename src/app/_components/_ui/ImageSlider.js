'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { API_URL } from '../../lib/api'

const ImageSlider = ({ images }) => {
    return (
        <Swiper
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            }}
            className="mx-auto w-full max-w-4xl cursor-grab overflow-hidden rounded-lg lg:max-w-7xl"
        >
            {images.map((img, index) => (
                <SwiperSlide
                    key={index}
                    className="flex items-center justify-center overflow-hidden"
                >
                    <div className="relative h-[400px] w-full overflow-hidden">
                        <Image
                            src={`${API_URL}${img.url}`}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="rounded-lg object-cover"
                            quality={70}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ImageSlider
