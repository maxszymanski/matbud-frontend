function Input({
    restClass = '',
    type,
    labelText = undefined,
    message = undefined,
    error,
    name,
    textArea = false,
    formRegister = {},
    wrapperClass = '',
}) {
    return (
        <div
            className={`group relative z-0 mb-5 w-full xl:mb-7 ${wrapperClass}`}
        >
            {textArea ? (
                <textarea
                    type={type}
                    id={name}
                    placeholder=""
                    className={`${restClass} peer focus:border-primary3 text-second block max-h-36 min-h-36 w-full resize-y appearance-none border border-gray-300 bg-transparent px-3 py-4 text-sm focus:ring-0 focus:outline-none ${
                        error ? 'border-red-500' : ''
                    }`}
                    name={name}
                    {...formRegister}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    placeholder=""
                    className={`${restClass} peer focus:border-primary3 text-second block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-2 py-2.5 text-sm focus:ring-0 focus:outline-none xl:pt-3.5 ${
                        error ? 'border-red-500' : ''
                    }`}
                    name={name}
                    {...formRegister}
                    autoComplete="new-password"
                />
            )}

            <label
                htmlFor={name}
                autoComplete="new-password"
                className={`peer-focus:text-primary3 absolute top-3 left-2 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-stone-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-2 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium xl:text-base rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 ${textArea ? 'bg-primary z-20' : ''}`}
            >
                {labelText}
            </label>
            {error && (
                <span className="inline-block text-xs font-light text-red-500">
                    {message}
                </span>
            )}
        </div>
    )
}

export default Input
