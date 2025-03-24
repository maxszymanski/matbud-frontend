function MiniHeader({ title }) {
    return (
        <header className="px-6 pt-24 md:pt-8 xl:container xl:mx-auto xl:pt-14">
            <h1 className="text-second w-full text-2xl leading-9 font-medium tracking-wide lg:text-3xl xl:text-4xl">
                <span className="text-primary3">/</span>
                {title}
            </h1>
        </header>
    )
}

export default MiniHeader
