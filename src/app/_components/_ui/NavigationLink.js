import Link from 'next/link'

function NavigationLink({
    href = '/',
    children,
    restClass = '',
    panelNav = false,
    onClick,
    isActive = false,
}) {
    return (
        <li className="list-none">
            {onClick ? (
                <button
                    className={`flex items-center p-3 font-medium text-nowrap transition-colors duration-300 md:text-base xl:text-lg 2xl:text-xl ${
                        panelNav
                            ? 'w-full text-lg font-semibold text-white/70 hover:text-white md:justify-start'
                            : 'text-primary3 hover:text-primary3/80 text-2xl md:px-2 md:py-1.5'
                    } ${restClass}`}
                    onClick={onClick}
                >
                    {children}
                </button>
            ) : (
                <Link
                    className={`flex items-center p-3 font-medium text-nowrap transition-colors duration-300 md:text-base xl:text-lg 2xl:text-xl ${
                        panelNav
                            ? 'w-full text-lg font-semibold text-white/70 hover:text-white md:justify-start'
                            : 'hover:text-primary3/80 text-primary3 text-2xl md:px-2 md:py-1.5'
                    } ${restClass} ${isActive ? 'text-second/90 hover:text-white' : ''}`}
                    href={href}
                >
                    {children}
                </Link>
            )}
        </li>
    )
}

export default NavigationLink
