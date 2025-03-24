import Image from 'next/image'
import Button from '../_ui/Button'

function About() {
    return (
        <section className="relative container mx-auto flex flex-col items-center justify-between py-16 md:flex-row lg:py-20">
            <Image
                src="/home3.webp"
                height={510}
                width={674}
                alt="kreskówkowy dom"
                className="max-h-[500px] max-w-[350px] md:max-h-[720px] md:max-w-[400px] xl:max-h-max xl:max-w-full"
                priority
            />
            <div className="flex w-full flex-col items-center gap-6 px-6 pt-8 lg:w-1/2 lg:gap-10 xl:pr-0 xl:pl-6">
                <h2 className="text-second text-left text-2xl leading-[50px] font-semibold sm:text-3xl sm:leading-[50px] md:w-full md:text-left lg:text-4xl lg:leading-[60px] lg:font-medium xl:text-5xl xl:leading-[80px]">
                    Kim jesteśmy
                </h2>
                <p className="mb-4 max-w-[500px] text-center text-sm leading-8 font-medium text-slate-300 md:text-start xl:self-start xl:text-base xl:leading-8">
                    Jesteśmy doświadczoną firmą budowlaną z Palczy, działającą
                    na terenie całej Małopolski. Specjalizujemy się w budowie
                    domów, dachach i ociepleniach, dostarczając naszym klientom
                    najwyższą jakość wykonania i trwałość na lata. Od lat
                    pomagamy realizować marzenia o solidnych, funkcjonalnych i
                    estetycznych budynkach, zapewniając kompleksową obsługę – od
                    fundamentów aż po wykończenie pod klucz.
                </p>
                <Button
                    href="/kontakt"
                    variant="orange"
                    restClass="min-w-[160px] py-4 px-10 text-lg xl:text-lg xl:py-5 xl:px-12 md:text-lg lg:text-lg md:self-start"
                >
                    Poznajmy się!
                </Button>
            </div>
        </section>
    )
}

export default About
