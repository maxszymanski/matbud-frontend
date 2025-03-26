function ServicesInfo({ title, description }) {
    return (
        <div className="text-second mb-10 w-full md:mb-16">
            <h3 className="mb-6 text-2xl font-semibold tracking-wide md:text-3xl xl:text-4xl">
                {title}
            </h3>
            <p className="text-sm leading-[170%] text-slate-300 md:text-base">
                {description}
            </p>
        </div>
    )
}

export default ServicesInfo
