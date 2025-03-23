import Link from 'next/link'

const mainClass =
    'rounded-full flex  items-center text-nowrap transition-colors duration-300 '

const variants = {
    purple: 'hover:bg-primary/80 bg-primary text-sm text-white md:text-xs lg:text-sm xl:px-6 xl:py-3.5 py-2 px-4 text-center justify-center',
    orange: 'bg-primary3 text-second font-semibold tracking-wide text-base hover:bg-primary3/85 px-10 py-3.5 justify-center ',
    transparent: 'text-sm bg-transparent text-white/50 hover:text-white ',
}

function Button({
    onClick,
    children,
    restClass = '',
    href = undefined,
    variant = 'purple',

    value = undefined,
    id = undefined,
    disabled = false,
}) {
    const variantClass = variants[variant] || variants.purple

    if (href)
        return (
            <Link
                href={href}
                className={` ${mainClass} ${variantClass} ${restClass} `}
            >
                {children}
            </Link>
        )
    else
        return (
            <button
                value={value}
                onClick={onClick}
                className={`${mainClass} ${restClass} ${variantClass}`}
                disabled={disabled}
                id={id}
            >
                {children}
            </button>
        )
}

export default Button
