import Image from 'next/image'
import Button from '../_ui/Button'
import { getProfessionall } from '../../lib/api'

async function LearnSkill() {
    const { titleOne, titleTwo, titleThree, description } =
        await getProfessionall()

    return (
        <section className="relative container mx-auto flex flex-col items-center justify-between py-16 md:flex-row lg:py-20 xl:max-w-[1300px] xl:pt-32 xl:pb-24 2xl:container">
            <Image
                src="/second-home.webp"
                height={510}
                width={674}
                alt="szcześliwy student"
                className="max-h-[500px] max-w-[350px] md:max-h-[720px] md:max-w-[400px] xl:max-h-max xl:max-w-full"
                priority
            />
            <div className="flex w-full flex-col items-center gap-6 px-6 pt-8 md:items-start lg:w-1/2 lg:items-start lg:self-center xl:pr-0 xl:pl-6">
                <h2 className="text-second text-center text-2xl leading-[50px] font-semibold sm:text-3xl sm:leading-[50px] md:text-left lg:text-4xl lg:leading-[60px] lg:font-medium xl:text-5xl xl:leading-[80px]">
                    {titleOne && titleOne}
                    <br />
                    {titleTwo && titleTwo}
                    <br />
                    <span className="font-extrabold">
                        {titleThree && titleThree}
                    </span>
                </h2>
                <p className="mb-4 max-w-[500px] text-center text-sm leading-8 font-medium text-slate-300 md:text-start xl:text-base xl:leading-8">
                    {description && description}
                </p>
                <Button
                    href="/kontakt"
                    variant="orange"
                    restClass="min-w-[160px] py-4 px-10 text-lg xl:text-lg xl:py-5 xl:px-12 md:text-lg lg:text-lg"
                >
                    Bezpłatna wycena
                </Button>
            </div>
        </section>
    )
}

export default LearnSkill
