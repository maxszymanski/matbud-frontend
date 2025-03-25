'use client'

import Button from './_components/_ui/Button'

export default function Error({ error, reset }) {
    return (
        <main className="text-second flex flex-1 flex-col items-center justify-center gap-10 px-6 py-30 text-center">
            <h1 className="text-3xl font-semibold">Coś poszło nie tak!</h1>
            <p className="text-lg">{error.message}</p>

            <Button variant="orange" restClass="cursor-pointer" onClick={reset}>
                Spróbuj ponownie
            </Button>
        </main>
    )
}
