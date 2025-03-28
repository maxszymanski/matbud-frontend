function Loading() {
    return (
        <main className="flex-1">
            <div className="flex h-full w-full items-center justify-center py-60">
                <div className="flex flex-row gap-2">
                    <div className="bg-primary3 h-4 w-4 animate-bounce rounded-full [animation-delay:.7s]"></div>
                    <div className="bg-primary3 h-4 w-4 animate-bounce rounded-full [animation-delay:.3s]"></div>
                    <div className="bg-primary3 h-4 w-4 animate-bounce rounded-full [animation-delay:.7s]"></div>
                </div>
            </div>
        </main>
    )
}

export default Loading
