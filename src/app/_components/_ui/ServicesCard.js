import Button from './Button'

function ServicesCard({ icon, title, list, slug }) {
    const services =
        Object.values(list).filter((value) => typeof value === 'string') || []

    return (
        <div className="from-primary to-primary2 text-second hover:to-primary flex w-full max-w-[400px] flex-col rounded-2xl bg-linear-to-r px-4 py-8 text-center shadow-xl shadow-[#12123b] transition-colors duration-300 sm:px-6 2xl:max-w-[430px]">
            {icon}
            <h3 className="text-center text-xl font-semibold">{title}</h3>
            {services.length > 0 && (
                <ul className="flex flex-1 flex-col gap-5 py-12 text-xs text-slate-300 sm:text-sm">
                    {services.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )}
            <Button
                href={`/uslugi/${slug}`}
                variant="orange"
                restClass="!py-2.5 mx-8"
            >
                Szczegóły
            </Button>
        </div>
    )
}

export default ServicesCard
