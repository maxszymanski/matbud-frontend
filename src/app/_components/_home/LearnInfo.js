function LearnInfo({ description, title, variant, icon }) {
    return (
        <div className="flex flex-col items-center justify-between gap-5 text-center">
            <div className="from-primary3 via-primary3/70 to-primary3/40 relative size-24 rounded-full bg-radial-[at_50%_75%] to-90%">
                {icon}
            </div>
            <div className="mx-auto max-w-72 text-center">
                <p
                    className={`${
                        variant === 'dark'
                            ? 'mt-3 mb-5 text-stone-300 xl:text-lg'
                            : variant === 'light'
                              ? 'xlmb-6 mt-3 mb-5 text-4xl text-stone-300 xl:mt-4 xl:text-5xl'
                              : ''
                    } font-semibold`}
                >
                    {title}
                </p>
                <p
                    className={`${
                        variant === 'dark'
                            ? 'tracking-wider text-slate-300'
                            : variant === 'light'
                              ? 'max-w-56 text-white xl:max-w-72 xl:px-3'
                              : ''
                    } text-xs xl:text-sm`}
                >
                    {description}
                </p>
            </div>
        </div>
    )
}

export default LearnInfo
