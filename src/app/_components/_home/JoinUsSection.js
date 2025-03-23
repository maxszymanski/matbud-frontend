import Image from 'next/image'
import Button from '../_ui/Button'
import { getHire } from '../../lib/api'

async function JoinUsSection() {
    const { titleOne, titleTwo, titleThree, description } = await getHire()

    return (
        <section className="relative container mx-auto flex flex-col items-center justify-between pt-12 pb-24 md:flex-row md:justify-center lg:gap-12 lg:py-20 xl:gap-20 xl:pt-24 xl:pb-32 2xl:gap-40">
            <Image
                src="/join.webp"
                height={424}
                width={593}
                alt="pracownicy budowlani"
                className="mb-12 max-w-[80%] sm:max-w-[400px] md:mb-0 xl:max-w-full"
                priority
            />
            <div className="flex w-full flex-col items-center gap-6 px-6 md:items-start lg:w-fit lg:self-end lg:px-6">
                <h2 className="text-second text-center text-2xl leading-[50px] font-semibold sm:text-3xl sm:leading-[50px] md:text-left lg:text-4xl lg:leading-[60px] lg:font-medium xl:text-5xl xl:leading-[80px]">
                    {titleOne && titleOne}
                    <br />
                    {titleTwo && titleTwo} <br />
                    <span className="font-extrabold">
                        {titleThree && titleThree}
                    </span>
                </h2>
                {description && (
                    <p className="mb-4 max-w-[500px] text-center text-sm leading-8 font-medium text-slate-300 md:text-start xl:text-base xl:leading-8">
                        {description}
                    </p>
                )}
                <Button
                    href="/kontakt"
                    variant="orange"
                    restClass="min-w-[160px] py-4 px-10 text-lg xl:text-lg xl:py-5 xl:px-12 md:text-lg lg:text-lg"
                >
                    Porozmawiajmy!
                </Button>
            </div>
        </section>
    )
}

export default JoinUsSection
